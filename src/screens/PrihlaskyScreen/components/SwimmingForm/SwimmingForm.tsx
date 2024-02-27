import {
  BaseSyntheticEvent,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";
import Select, { MultiValue, StylesConfig } from "react-select";

import { useLecturesContext } from "~/contexts";
import { Option, SwimmingPage } from "~/domains";
import { Space, Subheadline } from "~/styles";
import { semesterNumberFromString } from "~/utils";

import * as S from "./SwimmingForm.style";

const colourStyles: StylesConfig<any, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),

  multiValue: (styles, { data }) => {
    const prefix = data.value.split("_")[0].toUpperCase() as string;
    return {
      ...styles,
      paddingLeft: "1rem",
      ":before": {
        display: "flex",
        alignSelf: "center",
        content: `"${prefix}"`,
        fontSize: "1.2rem",
      },
    };
  },
};

export const SwimmingForm = ({
  isLoading,
  onSubmit,
  maxNumberOfLessons,
  lectureType,
  children,
}: PropsWithChildren<SwimmingPage>) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
    []
  );
  const {
    getAvailableLectureOptions,
    isError: isDataError,
    isLoading: isDataLoading,
  } = useLecturesContext();

  const { setValue, watch } = useFormContext();

  const handleSubmit = (event: BaseSyntheticEvent) => {
    onSubmit(event);
    setSelectedOptions([]);
  };

  const handleOptionSelect = (options: MultiValue<Option>) => {
    setSelectedOptions(options);
  };

  const lessonsPrice = watch("lessonsPrice", null);
  const personCount = watch("childrenCount", null);
  const semester = watch("midTerm", null);

  const selectableOptions = useMemo(() => {
    const semesterNumber = semesterNumberFromString(semester) ?? 1;

    const personCountNumber = !personCount ? 1 : Number(personCount);

    return getAvailableLectureOptions(
      lectureType,
      semesterNumber,
      personCountNumber
    );
  }, [getAvailableLectureOptions, lectureType, personCount, semester]);

  useEffect(() => {
    //resetuj "vybraný termín a čas", když se změní počet lekcí, počet osob, nebo semestr
    setSelectedOptions([]);
  }, [lessonsPrice, personCount, semester]);

  useEffect(() => {
    const transformSelectedOptions = [...selectedOptions].map(
      (option) => option.value
    );

    setValue("lessonsDayTime", transformSelectedOptions.toString());
  }, [selectedOptions, setValue]);

  return (
    <S.Form onSubmit={handleSubmit}>
      {children}
      <Space />
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Vybraný termín a čas</Subheadline>
          {/* //todo pridej at to rovnou uklada do react hook form */}
          <Select
            instanceId="lessons-select"
            placeholder={
              isDataError
                ? "Nepodařilo se načíst data, zkuste prosím později"
                : "Termín a čas"
            }
            styles={colourStyles}
            value={selectedOptions}
            isMulti
            name="lessonsDayTime"
            noOptionsMessage={() => "Všechny termíny jsou obsazené"}
            closeMenuOnSelect={false}
            onChange={handleOptionSelect}
            isOptionDisabled={() =>
              selectedOptions.length >= maxNumberOfLessons || isDataError
            }
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
          disabled={isLoading || selectedOptions.length !== maxNumberOfLessons}
        >
          Odeslat
        </S.SubmitButton>
      </S.SubmitContainer>
    </S.Form>
  );
};
