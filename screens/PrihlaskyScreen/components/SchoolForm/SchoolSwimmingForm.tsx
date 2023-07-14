import { Flex, Space, Subheadline, Text } from "@/styles";
import * as S from "./SchoolSwimmingForm.style";
import {
  ControlledInput,
  ControlledNameInput,
  ControlledRadio,
  ControlledSelect,
} from "@/shared";
import { IconButton } from "@/components/Shared";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Select, { MultiValue, StylesConfig } from "react-select";
import { Level, Option, SwimmingPage } from "@/domains";
import { useSchoolSwimmingOptions } from "@/hooks";
import { createOption } from "@/utils";

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

export const SchoolSwimmingForm = ({
  onSubmit,
  errors,
  isLoading,
}: SwimmingPage) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
    []
  );

  const { highLevelOptions, lessonOptions, lowLevelOptions, radioOptions } =
    useSchoolSwimmingOptions();

  const [maxNumberOfLessons, setMaxNumberOfLessons] = useState(
    lessonOptions[0].lessonsPerWeek
  );

  const [selectedLevel, setSelectedLevel] = useState<Level>("lower");

  const { setValue } = useFormContext();

  const handleOptionSelect = (options: MultiValue<Option>) => {
    setSelectedOptions(options);
  };

  const handleSubmit = (event: BaseSyntheticEvent) => {
    onSubmit(event);

    setSelectedOptions([]);
    setSelectedLevel("lower");
  };

  useEffect(() => {
    const transformSelectedOptions = [...selectedOptions].map(
      (option) => option.value
    );

    setValue("lessonsDayTime", transformSelectedOptions.toString());
  }, [selectedOptions, setValue]);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Údaje</Subheadline>
          <S.FormInputContainer>
            <ControlledNameInput
              name="schoolName"
              placeholder="Název školy / školky"
              required="Jméno nesmí být prázdné"
            />
            <S.Label>Název školy / školky</S.Label>
            <S.ErrorContainer>{errors?.schoolName?.message}</S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="address"
              placeholder="Adresa"
              required="Adresa nesmí být prázdná"
            />
            <S.Label>Adresa</S.Label>
            <S.ErrorContainer>{errors?.address?.message}</S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="identifier"
              placeholder="IČ nebo DIČ"
              pattern={/^\d+$/}
              required="IČ nebo DIČ musí být číslo"
            />
            <S.Label>IČ nebo DIČ</S.Label>
            <S.ErrorContainer>{errors?.identifier?.message}</S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="childrenCount"
              placeholder="Počet dětí"
              required="Počet dětí musí být vyplněn"
              type="number"
              pattern={/^(?=.*1)(?=.*[2-9]|30)[1-9]\d?$/}
            />
            <S.Label>Počet dětí</S.Label>
            <S.ErrorContainer>
              {errors?.childrenCount?.message}
            </S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledSelect
              name="midTerm"
              placeholder="Pololetí"
              required="Pololetí musí být vyplněno"
              options={[
                createOption("1. pololetí", "1. pololetí"),
                createOption("2. pololetí", "2. pololetí"),
              ]}
            />
            <S.Label>Pololetí</S.Label>
            <S.ErrorContainer>
              {errors?.childrenCount?.message}
            </S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput name="notes" placeholder="Poznámky" />
            <S.Label>Poznámky</S.Label>
            <S.ErrorContainer>
              {errors?.childrenCount?.message}
            </S.ErrorContainer>
          </S.FormInputContainer>
        </S.FormItem>
        <S.FormItem>
          <Subheadline variant="dark">Kontaktní osoba</Subheadline>
          <S.FormInputContainer>
            <ControlledInput
              name="contactPerson"
              placeholder="Jméno kontaktní osoby"
              required="Kontaktní osoba musí být vyplněna"
            />
            <S.Label>Jméno kontaktní osoby</S.Label>
            <S.ErrorContainer>
              {errors?.contactPerson?.message}
            </S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="contactPersonPhone"
              placeholder="Telefon kontaktní osoby"
              required="Telefon kontaktní osoby musí být vyplněn"
            />
            <S.Label>Telefon kontaktní osoby</S.Label>
            <S.ErrorContainer>
              {errors?.contactPersonPhone?.message}
            </S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="contactPersonEmail"
              placeholder="Email kontaktní osoby"
              required="Email kontaktní osoby musí být vyplněn"
            />
            <S.Label>Email kontaktní osoby</S.Label>
            <S.ErrorContainer>
              {errors?.contactPersonEmail?.message}
            </S.ErrorContainer>
          </S.FormInputContainer>
        </S.FormItem>
      </S.Container>
      <Space />
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Počet lekcí</Subheadline>
          <ControlledRadio
            name="lessonsPrice"
            onClick={(radio) =>
              setMaxNumberOfLessons(radio?.lessonsPerWeek ?? 0)
            }
            options={lessonOptions}
          />
          <Text variant="dark">
            V případě individuálních požadavků kontaktujte
            plavaniluzanky@kometaplavani.cz
          </Text>
        </S.FormItem>
        <S.FormItem>
          <Subheadline variant="dark">Úroveň</Subheadline>
          <ControlledRadio
            name="level"
            onClick={(radio) => {
              setSelectedLevel(radio?.level ?? "lower");
              setSelectedOptions([]);
            }}
            options={radioOptions}
          />
        </S.FormItem>
      </S.Container>
      <Space />
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Vybraný termín a čas</Subheadline>
          {/* //todo pridej at to rovnou uklada do react hook form */}
          {/* vsak komponent na toto uz mam, to je ten ControlledSelect */}
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
            options={
              selectedLevel === "higher" ? highLevelOptions : lowLevelOptions
            }
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
          disabled={isLoading || selectedOptions.length === 0}
          iconAfter={S.ArrowRightIcon}
        >
          Odeslat
        </IconButton>
      </S.SubmitContainer>
    </S.Form>
  );
};