import { Option, SwimmingPage } from "@/domains";
import * as S from "./SwimmingForm.style";
import { useBasicSwimmingOptions } from "@/hooks";
import Select, { MultiValue, StylesConfig } from "react-select";
import {
  BaseSyntheticEvent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";
import { IconButton } from "@/components/Shared";
import { Space, Subheadline } from "@/styles";

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
  children,
  selectOptions,
  maxNumberOfLessons,
}: PropsWithChildren<SwimmingPage>) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
    []
  );

  const { setValue } = useFormContext();

  const handleSubmit = (event: BaseSyntheticEvent) => {
    onSubmit(event);
    setSelectedOptions([]);
  };

  const handleOptionSelect = (options: MultiValue<Option>) => {
    setSelectedOptions(options);
  };

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
            placeholder="Termín a čas"
            styles={colourStyles}
            value={selectedOptions}
            isMulti
            name="lessonsDayTime"
            closeMenuOnSelect={false}
            onChange={handleOptionSelect}
            isOptionDisabled={() =>
              selectedOptions.length >= maxNumberOfLessons
            }
            options={selectOptions}
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

        <IconButton
          loading={isLoading}
          disabled={isLoading || selectedOptions.length !== maxNumberOfLessons}
          iconAfter={S.ArrowRightIcon}
        >
          Odeslat
        </IconButton>
      </S.SubmitContainer>
    </S.Form>
  );
};
