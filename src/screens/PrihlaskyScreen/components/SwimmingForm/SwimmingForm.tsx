import {
  BaseSyntheticEvent,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";
import Select, { OnChangeValue, StylesConfig } from "react-select";

import { ControlledRadio } from "~/components/Shared";
import { useCourseDetailContext } from "~/contexts";
import { SwimmingPage } from "~/domains";
import { Space, Subheadline, Text } from "~/styles";
import { semesterNumberFromString } from "~/utils";

import * as S from "./SwimmingForm.style";

const colourStyles: StylesConfig<any, false> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data }) => {
    const discount = data.discount as number;

    return {
      ...styles,
      display: "flex",
      gap: "2rem",
      ":after": Boolean(discount)
        ? {
            content: `"-${discount} %"`,
            right: "2rem",
            alignSelf: "center",
            fontSize: "1.2rem",
            backgroundColor: "var(--col1)",
            padding: ".2rem 1rem",
            borderRadius: "2rem",
          }
        : {},
    };
  },
  singleValue: (styles, { data }) => {
    const prefix = data.value.split("_")[0].toUpperCase() as string;
    const discount = data.discount as number;
    return {
      ...styles,
      display: "flex",
      gap: "2rem",
      ":before": {
        display: "flex",
        alignSelf: "center",
        content: `"${prefix}"`,
        fontSize: "1.2rem",
      },
      ":after": Boolean(discount)
        ? {
            content: `"-${discount} %"`,
            right: "2rem",
            alignSelf: "center",
            fontSize: "1.2rem",
            backgroundColor: "var(--col1)",
            padding: ".2rem 1rem",
            borderRadius: "2rem",
          }
        : {},
    };
  },
};

interface SelectOptions {
  label: string;
  value: string;
  discount: number;
}

export const SwimmingForm = ({
  isLoading,
  onSubmit,
  children,
}: PropsWithChildren<SwimmingPage>) => {
  const [selectedOption, setSelectedOption] = useState<SelectOptions | null>(
    null
  );
  const {
    getAvailableLectureOptions,
    lecturePricingOptions,
    isError: isDataError,
    isLoading: isDataLoading,
  } = useCourseDetailContext();

  const { setValue, watch } = useFormContext();

  const handleSubmit = (event: BaseSyntheticEvent) => {
    onSubmit(event);
    setSelectedOption(null);
  };

  const handleOptionSelect = (option: OnChangeValue<SelectOptions, false>) => {
    setSelectedOption(option);
  };

  const lessonsPrice = watch("lessonsPrice", null);
  const personCount = watch("childrenCount", null);
  const semester = watch("midTerm", null);

  const radioLectureOptions = useMemo(
    () =>
      lecturePricingOptions?.map((lectureOption) => ({
        label: lectureOption.title,
        value: String(lectureOption.price),
        lectureFrequency: lectureOption.lectureFrequency,
      })),
    [lecturePricingOptions]
  );

  const selectableOptions = useMemo(() => {
    const semesterNumber = semesterNumberFromString(semester) ?? 1;

    const personCountNumber = !personCount ? 1 : Number(personCount);

    return getAvailableLectureOptions(semesterNumber, personCountNumber);
  }, [getAvailableLectureOptions, personCount, semester]);

  useEffect(() => {
    //resetuj "vybraný termín a čas", když se změní počet lekcí, počet osob, nebo semestr
    setSelectedOption(null);
  }, [lessonsPrice, personCount, semester]);

  useEffect(() => {
    if (selectedOption?.value) {
      setValue("lessonsDayTime", selectedOption.value);
      setValue("discount", selectedOption?.discount ?? 0);
    }
  }, [selectedOption, setValue]);

  return (
    <S.Form onSubmit={handleSubmit}>
      {children}
      <Space />
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Počet lekcí</Subheadline>
          <ControlledRadio
            name="lessonsPrice"
            options={radioLectureOptions}
            discount={selectedOption?.discount}
            price={Number(lessonsPrice)}
          />
          <Text variant="dark">
            V případě individuálních požadavků kontaktujte
            plavaniluzanky@kometaplavani.cz
          </Text>
        </S.FormItem>
      </S.Container>
      <Space />
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Vybraný termín a čas</Subheadline>
          <Select
            instanceId="lessons-select"
            placeholder={
              isDataError
                ? "Nepodařilo se načíst data, zkuste prosím později"
                : "Termín a čas"
            }
            styles={colourStyles}
            value={selectedOption}
            name="lessonsDayTime"
            noOptionsMessage={() => "Všechny termíny jsou obsazené"}
            onChange={handleOptionSelect}
            options={selectableOptions}
            isLoading={isDataLoading}
          />
        </S.FormItem>
      </S.Container>
      <S.SubmitContainer>
        <S.Text>
          Odesláním přihlášky potvrzuji, že jsem se seznámil(a) s{" "}
          <S.UnderlinedInput
            href="/files/VSEOBECNE-PODMINKY.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            podmínkami přijetí
          </S.UnderlinedInput>
          . S podmínkami souhlasím a moje dítě je splňuje.
        </S.Text>

        <S.SubmitButton
          isLoading={isLoading}
          disabled={isLoading || !Boolean(selectedOption)}
        >
          Odeslat
        </S.SubmitButton>
      </S.SubmitContainer>
    </S.Form>
  );
};
