import { Flex, Space, Subheadline, Text } from "@/styles";
import * as S from "./SchoolForm.style";
import {
  ControlledCheckbox,
  ControlledInput,
  ControlledNameInput,
  ControlledRadio,
} from "@/shared";
import { IconButton } from "@/components/Shared";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface SchoolFormProps {
  onSubmit: any;
  errors: any;
  isLoading: boolean;
}

export const SchoolForm = ({
  onSubmit,
  errors,
  isLoading,
}: SchoolFormProps) => {
  //pokud bude checkedFields met vetsi length nez max, tak to hodi ostatni,
  //ktery nejsou zrovna checked jako disabled
  const [checkedFields, setCheckedFields] = useState<string[]>([]);

  const { watch } = useFormContext();

  const watchedFields = watch();

  useEffect(() => {
    //tohle by slo hodit do wrapperu <CheckboxGroup>{children}</CheckboxGroup>
    // Subscribe to changes in fields with names containing "day_"
    for (const fieldName in watchedFields) {
      if (fieldName.includes("day_")) {
        const fieldValue = watchedFields[fieldName];
        //tak tady budu checkovat, jestli uz je 1 a pokud ano, tak disablni vse
        console.log(`Field "${fieldName}" changed:`, fieldValue);
        // if (fieldValue) setCheckedFields((prev) => [...prev, fieldName]);
      }
    }
  }, [watchedFields]);

  return (
    <S.Form onSubmit={onSubmit}>
      <button type="button" onClick={() => console.log(checkedFields, "ckds")}>
        show checkd
      </button>
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
            name="numOfLessons"
            options={[
              {
                label:
                  "2040 Kč - pololetí, 1x týdně - cca 17 lekcí ve vybrané skupince / na 1 žáka",
                value: "2040 Kč",
              },
            ]}
          />
          <Text variant="dark">
            V případě individuálních požadavků kontaktujte
            plavaniluzanky@kometabrno.cz
          </Text>
        </S.FormItem>
        <S.FormItem>
          <Subheadline variant="dark">Úroveň</Subheadline>
          <ControlledRadio
            name="level"
            options={[
              { label: "Škola", value: "škola" },
              { label: "Školka", value: "školka" },
            ]}
          />
        </S.FormItem>
      </S.Container>
      <Space />
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Vybraný termín a čas</Subheadline>
          <Flex direction="row" gap="6rem" align="baseline">
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
          </Flex>
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
          disabled={isLoading}
          iconAfter={S.ArrowRightIcon}
        >
          Odeslat
        </IconButton>
      </S.SubmitContainer>
    </S.Form>
  );
};

// export const CheckboxGroup = () => {
//   return
// }
