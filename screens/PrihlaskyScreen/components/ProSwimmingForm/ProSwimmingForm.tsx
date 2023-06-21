import { Space, Subheadline, Text } from "@/styles";
import * as S from "./ProSwimmingForm.style";
import {
  ControlledInput,
  ControlledSelect,
  ControlledNameInput,
  IconButton,
  ControlledRadio,
} from "@/shared";
import { createOption } from "@/utils";
import Select, { MultiValue, StylesConfig } from "react-select";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useProSwimmingOptions } from "@/hooks";
import { Level, Option, SwimmingPage } from "@/domains";

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

export const ProSwimmingForm = ({
  onSubmit,
  errors,
  isLoading,
}: SwimmingPage) => {
  const [selectedLevel, setSelectedLevel] = useState<Level>("lower");
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
    []
  );

  const { lessonOptions, highLevelOptions, lowLevelOptions, radioOptions } =
    useProSwimmingOptions();

  const [maxNumberOfLessons, setMaxNumberOfLessons] = useState(
    lessonOptions[0].lessonsPerWeek
  );

  const handleSubmit = (e: BaseSyntheticEvent) => {
    onSubmit(e);
    setSelectedOptions([]);
  };

  const { setValue } = useFormContext();

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
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Osobní údaje</Subheadline>
          <S.FormInputContainer>
            <ControlledNameInput
              name="firstName"
              placeholder="Jméno dítěte"
              required="Jméno nesmí být prázdné"
            />
            <S.Label>Jméno dítěte</S.Label>
            <S.ErrorContainer>{errors?.firstName?.message}</S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="lastName"
              placeholder="Příjmení dítěte"
              required="Příjmení nesmí být prázdné"
            />
            <S.Label>Příjmení dítěte</S.Label>
            <S.ErrorContainer>{errors?.lastName?.message}</S.ErrorContainer>
          </S.FormInputContainer>
          <div>
            <ControlledSelect
              name="gender"
              placeholder="Pohlaví"
              options={[
                createOption("Muž", "muž"),
                createOption("Žena", "žena"),
              ]}
              required="Pohlaví musí být vyplněno"
            />
            <S.ErrorContainer>{errors?.gender?.message}</S.ErrorContainer>
          </div>
          <S.FormInputContainer>
            <ControlledInput
              name="personalIdNum"
              placeholder="Rodné číslo dítěte (př. 045421/1234)"
              pattern={/\d{4}([.,\/]\d{4})/}
              required="Rodné číslo v nesprávném formátu. Příklad: 045421/1234."
            />
            <S.Label>Rodné číslo</S.Label>
            <S.ErrorContainer>
              {errors?.personalIdNum?.message}
            </S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="dateOfBirth"
              placeholder="Datum narození dítěte"
              required="Datum narození musí být vyplněno."
            />
            <S.Label>Datum narození dítěte</S.Label>
            <S.ErrorContainer>{errors?.dateOfBirth?.message}</S.ErrorContainer>
          </S.FormInputContainer>
        </S.FormItem>
        <S.FormItem>
          <Subheadline variant="dark">Kontaktní údaje</Subheadline>
          <S.FormInputContainer>
            <ControlledInput
              name="phone"
              placeholder="Telefon"
              required="Telefon musí být vyplněn"
            />
            <S.Label>Telefon</S.Label>
            <S.ErrorContainer>{errors?.phone?.message}</S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="email"
              placeholder="E-mail"
              pattern={/\S+@\S+\.\S+/}
              required="Platný email musí obsahovat @ (př. novak.filip@email.cz)."
            />
            <S.Label>E-mail</S.Label>
            <S.ErrorContainer>{errors?.email?.message}</S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="address"
              placeholder="Adresa a číslo popisné"
              required="Adresa musí být vyplněna"
            />
            <S.Label>Adresa a číslo popisné</S.Label>
            <S.ErrorContainer>{errors?.address?.message}</S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="city"
              placeholder="Město"
              required="Město musí být vyplněno"
            />
            <S.Label>Město</S.Label>
            <S.ErrorContainer>{errors?.city?.message}</S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="postCode"
              placeholder="PSČ"
              required="PSČ musí být vyplněno"
            />
            <S.Label>PSČ</S.Label>
            <S.ErrorContainer>{errors?.postCode?.message}</S.ErrorContainer>
          </S.FormInputContainer>
        </S.FormItem>
        <S.FormItem>
          <Subheadline variant="dark">Ostatní</Subheadline>
          <S.FormInputContainer>
            <ControlledInput name={`alergy`} placeholder="Alergie" />
            <S.Label>Alergie</S.Label>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="healthIssues"
              placeholder="Upozornění  na zdravotní potíže"
            />
            <S.Label>Zdravotní potíže</S.Label>
          </S.FormInputContainer>
        </S.FormItem>
      </S.Container>
      <Space />
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Počet lekcí</Subheadline>
          <ControlledRadio
            name="lessonsPrice"
            onClick={(radio) => {
              setMaxNumberOfLessons(radio?.lessonsPerWeek ?? 0);
              setSelectedOptions([]);
            }}
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
          <div>
            <Text variant="dark">
              Mezi kondiční plavce se řadí dítě, které zvládá dané dovednosti:
            </Text>
            <ul
              style={{
                listStylePosition: "inside",
                fontWeight: "300",
                marginLeft: "2rem",
              }}
            >
              <li>umí kraul, znak a prsa</li>
              <li> uplave 200 m alespoň jedním plaveckým způsobem</li>
            </ul>
          </div>
        </S.FormItem>
      </S.Container>
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
          disabled={isLoading || selectedOptions.length !== maxNumberOfLessons}
          iconAfter={S.ArrowRightIcon}
        >
          Odeslat
        </IconButton>
      </S.SubmitContainer>
    </S.Form>
  );
};
