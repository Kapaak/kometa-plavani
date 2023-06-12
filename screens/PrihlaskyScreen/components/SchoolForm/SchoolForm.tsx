import { Flex, Space, Subheadline, Text } from "@/styles";
import * as S from "./SchoolForm.style";
import {
  ControlledInput,
  ControlledNameInput,
  ControlledRadio,
  ControlledSelect,
} from "@/shared";
import { IconButton } from "@/components/Shared";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Select, { MultiValue, StylesConfig } from "react-select";

interface SchoolFormProps {
  onSubmit: any;
  errors: any;
  isLoading: boolean;
}

type Option = {
  label: string;
  value: string;
};

const availableLessons = [
  {
    label:
      "2040 Kč - pololetí, 1x týdně - cca 17 lekcí ve vybrané skupince / na 1 žáka",
    value: "2040 Kč",
    lessonsPerWeek: 1,
  },
];

const highLevelOptions = [
  {
    label: "Pondělí",
    options: [
      { label: "9:00 - 10:00", value: "po_9" },
      { label: "10:00 - 11:00", value: "po_10" },
    ],
  },
  {
    label: "Úterý",
    options: [
      { label: "9:00 - 10:00", value: "ut_9" },
      { label: "10:00 - 11:00", value: "ut_10" },
    ],
  },
  {
    label: "Středa",
    options: [
      { label: "9:00 - 10:00", value: "st_9" },
      { label: "10:00 - 11:00", value: "st_10" },
    ],
  },
  {
    label: "Čtvrtek",
    options: [
      { label: "9:00 - 10:00", value: "ct_9" },
      { label: "10:00 - 11:00", value: "ct_10" },
    ],
  },
  {
    label: "Pátek",
    options: [
      { label: "9:00 - 10:00", value: "pa_9" },
      { label: "10:00 - 11:00", value: "pa_10" },
    ],
  },
];

const lowLevelOptions = [
  {
    label: "Pondělí",
    options: [{ label: "9:00 - 10:00", value: "po_9" }],
  },
  {
    label: "Pátek",
    options: [{ label: "10:00 - 11:00", value: "pa_10" }],
  },
];

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

export const SchoolForm = ({
  onSubmit,
  errors,
  isLoading,
}: SchoolFormProps) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
    []
  );

  const [maxNumberOfLessons, setMaxNumberOfLessons] = useState(
    availableLessons[0].lessonsPerWeek
  );

  const [selectedLevel, setSelectedLevel] = useState<"lower" | "higher">(
    "lower"
  );
  // const [selectedLevel, setSelectedLevel] = useState<Option[]>(lowLevelOptions);

  //pokud bude checkedFields met vetsi length nez max, tak to hodi ostatni,
  //ktery nejsou zrovna checked jako disabled
  // const [checkedFields, setCheckedFields] = useState<string[]>([]);

  const { watch, setValue } = useFormContext();

  // const watchedFields = watch();

  // const handleOptionSelect = (option:readonly Option[]) => {
  const handleOptionSelect = (options: MultiValue<Option>) => {
    setSelectedOptions(options);
  };

  const handleSubmit = (data: any) => {
    onSubmit(data);
    setSelectedOptions([]);
    setSelectedLevel("lower");
  };

  // useEffect(() => {
  //   //tohle by slo hodit do wrapperu <CheckboxGroup>{children}</CheckboxGroup>
  //   // Subscribe to changes in fields with names containing "day_"
  //   for (const fieldName in watchedFields) {
  //     if (fieldName.includes("day_")) {
  //       const fieldValue = watchedFields[fieldName];
  //       //tak tady budu checkovat, jestli uz je 1 a pokud ano, tak disablni vse
  //       console.log(`Field "${fieldName}" changed:`, fieldValue);
  //       // if (fieldValue) setCheckedFields((prev) => [...prev, fieldName]);
  //     }
  //   }
  // }, [watchedFields]);

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
                { label: "1. pololetí", value: "1. pololetí" },
                { label: "2. pololetí", value: "2. pololetí" },
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
            options={availableLessons}
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
            options={[
              { label: "Školka", value: "školka", level: "lower" },
              { label: "Škola", value: "škola", level: "higher" },
            ]}
          />
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
          {/* <Flex direction="row" gap="6rem" align="baseline">
            <Flex gap="1rem">
              <Text variant="dark" bold>
                Pondělí
              </Text>
              <ControlledCheckbox name="day_po_9" label="9:00 - 10:00" />
              <ControlledCheckbox name="day_po_8" label="10:00 - 11:00" />
            </Flex>
            <Flex gap="1rem">
              <Text variant="dark" bold>
                Úterý
              </Text>
              <ControlledCheckbox name="day_ut_9" label="9:00 - 10:00" />
              <ControlledCheckbox name="day_ut_8" label="10:00 - 11:00" />
            </Flex>
          </Flex> */}
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
