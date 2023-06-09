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
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface ProSwimmingFormProps {
  onSubmit: any;
  errors: any;
  isLoading: boolean;
}

type Option = {
  label: string;
  value: string;
};

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

const availableLessons = [
  {
    label: "4000 Kč - pololetí, 1 x týdně - cca 17 lekcí ve vybrané skupince",
    value: "4000 Kč",
    lessonsPerWeek: 1,
  },
  {
    label:
      "7700 Kč - celý školní rok, 1 x týdně - cca 34 lekcí ve vybrané skupince",
    value: "7700 Kč",
    lessonsPerWeek: 1,
  },
  {
    label: "7500 Kč - pololetí, 2x týdně - cca 34 lekcí ve vybrané skupince",
    value: "7500 Kč",
    lessonsPerWeek: 2,
  },
  {
    label:
      "14500 Kč - celý školní rok, 2x týdně - cca 68 lekcí ve vybrané skupince",
    value: "14500 Kč",
    lessonsPerWeek: 2,
  },
  {
    label: "9000 Kč - pololetí, 3x týdně - cca 51 lekcí ve vybrané skupince",
    value: "9000 Kč",
    lessonsPerWeek: 3,
  },
  {
    label: "15000 Kč - pololetí, 3x týdně - cca 102 lekcí ve vybrané skupince",
    value: "15000 Kč",
    lessonsPerWeek: 3,
  },
];

const dayTimeOptions = [
  {
    label: "Pondělí",
    options: [{ label: "15:00 - 16:00", value: "po_15" }],
  },

  {
    label: "Středa",
    options: [{ label: "15:00 - 16:00", value: "st_15" }],
  },
  {
    label: "Pátek",
    options: [
      { label: "16:00 - 17:00", value: "pa_16" },
      { label: "17:00 - 18:00", value: "pa_17" },
    ],
  },
];

export const ProSwimmingForm = ({
  onSubmit,
  errors,
  isLoading,
}: ProSwimmingFormProps) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
    []
  );

  const [maxNumberOfLessons, setMaxNumberOfLessons] = useState(
    availableLessons[0].lessonsPerWeek
  );

  const handleSubmit = (data: any) => {
    onSubmit(data);
    setSelectedOptions([]);
  };

  const { watch, setValue } = useFormContext();

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
            options={availableLessons}
          />
          <Text variant="dark">
            V případě individuálních požadavků kontaktujte
            plavaniluzanky@kometabrno.cz
          </Text>
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
            options={dayTimeOptions}
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
