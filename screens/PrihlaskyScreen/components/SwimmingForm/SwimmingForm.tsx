import { Option, SwimmingPage } from "@/domains";
import * as S from "./SwimmingForm.style";
import { useBasicSwimmingOptions, useLecturePaymentOptions } from "@/hooks";
import Select, { MultiValue, StylesConfig } from "react-select";
import {
  BaseSyntheticEvent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";
import {
  Button,
  ControlledInput,
  ControlledRadio,
  IconButton,
} from "@/components/Shared";
import { Flex, Space, Subheadline, Text } from "@/styles";
import { ArrowRight } from "@phosphor-icons/react";

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

  const { setValue, watch } = useFormContext();

  const handleSubmit = (event: BaseSyntheticEvent) => {
    onSubmit(event);
    setSelectedOptions([]);
  };

  const handleOptionSelect = (options: MultiValue<Option>) => {
    setSelectedOptions(options);
  };

  const watchLessonsPrice = watch("lessonsPrice");

  useEffect(() => {
    //resetuj "vybraný termín a čas", když se změní počet lekcí
    setSelectedOptions([]);
  }, [watchLessonsPrice]);

  useEffect(() => {
    const transformSelectedOptions = [...selectedOptions].map(
      (option) => option.value
    );

    setValue("lessonsDayTime", transformSelectedOptions.toString());
  }, [selectedOptions, setValue]);

  const { kindergarden: kindergardenPaymentOptions } =
    useLecturePaymentOptions();
  //swimmingForm bude 2x jeden pro skoly a druhy pro kurzy
  return (
    <S.Form onSubmit={handleSubmit}>
      <Space />
      {/* ZACATEK PRVNI SEKCE */}
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Počet lekcí</Subheadline>
          <ControlledRadio
            name="lessonsPrice"
            // onClick={(radio) =>
            //   setMaxNumberOfLessons(radio?.lessonsPerWeek ?? 0)
            // }
            options={kindergardenPaymentOptions}
          />
          <Text variant="dark">
            V případě individuálních požadavků kontaktujte
            plavaniluzanky@kometaplavani.cz
          </Text>
        </S.FormItem>
        <S.FormItem>
          <Subheadline variant="dark">Počet dětí</Subheadline>
          <S.FormInputContainer>
            <ControlledInput
              name="childrenCount"
              placeholder="Počet dětí"
              required="Počet dětí musí být vyplněn"
              type="number"
              // pattern={/^(?=.*1)(?=.*[2-9]|30)[1-9]\d?$/}
            />
            <S.Label>Počet dětí</S.Label>
            {/* <Danger>{errors?.childrenCount?.message}</Danger> */}
          </S.FormInputContainer>
        </S.FormItem>
        <S.FormItem>
          <Subheadline variant="dark">Pololetí</Subheadline>
          <S.FormInputContainer>
            <ControlledRadio
              name="semester"
              // onClick={(radio) =>
              //   setMaxNumberOfLessons(radio?.lessonsPerWeek ?? 0)
              // }
              options={[
                { label: "1. pololetí", value: "1. pololetí" },
                { label: "2. pololetí", value: "2. pololetí" },
              ]}
            />
          </S.FormInputContainer>
        </S.FormItem>
      </S.Container>
      {/* //to tlacitko musi byt iconbutton, tam je i dobre ten loading ... */}
      <Button type="button" style={{ alignSelf: "end" }}>
        Dostupné termíny
      </Button>
      {/* KONEC PRVNI SEKCE */}
      <Space />
      {/* ZACATEK DRUHE SEKCE */}
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Dostupné termíny</Subheadline>
          TODO: CALENDAR
        </S.FormItem>
        <S.FormItem>
          <Subheadline variant="dark">Vybrat den a termín</Subheadline>
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
      <Space />
      <Flex direction="row" justify="end" gap="2rem">
        <Button type="button">Zpět na výběr lekcí</Button>
        <Button type="button" variant="filled">
          Zadat ostatní údaje
        </Button>
      </Flex>
      {/* KONEC DRUHE SEKCE */}
      <Space />

      {/* ZACATEK TRETI SEKCE */}
      <Space />
      {children}
      {/* KONEC TRETI SEKCE */}

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
