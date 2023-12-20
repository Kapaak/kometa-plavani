import { useState } from "react";

import {
  ControlledInput,
  ControlledNameInput,
  ControlledRadio,
  ControlledSelect,
} from "~/components/Shared";
import { LectureTypes } from "~/domains";
import { useLecturePaymentOptions } from "~/hooks";
import { Danger, Space, Subheadline, Text } from "~/styles";
import { createOption } from "~/utils";

import { SwimmingForm } from "../SwimmingForm";
import * as S from "../SwimmingForm/SwimmingForm.style";



interface SchoolFormProps {
  onSubmit: () => void;
  isLoading: boolean;
  errors: any;
}

export const SchoolForm = ({
  onSubmit,
  errors,
  isLoading,
}: SchoolFormProps) => {
  const { school: schoolPaymentOptions } = useLecturePaymentOptions();

  const [maxNumberOfLessons, setMaxNumberOfLessons] = useState(
    schoolPaymentOptions[0].lessonsPerWeek
  );

  return (
    <SwimmingForm
      lectureType={LectureTypes.SCHOOL}
      onSubmit={onSubmit}
      isLoading={isLoading}
      maxNumberOfLessons={maxNumberOfLessons}
    >
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
            <Danger>{errors?.schoolName?.message}</Danger>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="address"
              placeholder="Adresa"
              required="Adresa nesmí být prázdná"
            />
            <S.Label>Adresa</S.Label>
            <Danger>{errors?.address?.message}</Danger>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="identifier"
              placeholder="IČ nebo DIČ"
              pattern={{
                value: /^\d+$/,
                message: "IČ nebo DIČ musí být číslo.",
              }}
              required="IČ nebo DIČ musí být vyplněno."
            />
            <S.Label>IČ nebo DIČ</S.Label>
            <Danger>{errors?.identifier?.message}</Danger>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="childrenCount"
              placeholder="Počet dětí"
              required="Počet dětí musí být vyplněn"
              type="number"
              // pattern={/^(?=.*1)(?=.*[2-9]|30)[1-9]\d?$/}
            />
            <S.Label>Počet dětí</S.Label>
            <Danger>{errors?.childrenCount?.message}</Danger>
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
            <Danger>{errors?.childrenCount?.message}</Danger>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput name="notes" placeholder="Poznámky" />
            <S.Label>Poznámky</S.Label>
            <Danger>{errors?.childrenCount?.message}</Danger>
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
            <Danger>{errors?.contactPerson?.message}</Danger>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="contactPersonPhone"
              placeholder="Telefon kontaktní osoby"
              required="Telefon kontaktní osoby musí být vyplněn"
            />
            <S.Label>Telefon kontaktní osoby</S.Label>
            <Danger>{errors?.contactPersonPhone?.message}</Danger>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="contactPersonEmail"
              placeholder="Email kontaktní osoby"
              required="Email kontaktní osoby musí být vyplněn"
            />
            <S.Label>Email kontaktní osoby</S.Label>
            <Danger>{errors?.contactPersonEmail?.message}</Danger>
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
            options={schoolPaymentOptions}
          />
          <Text variant="dark">
            V případě individuálních požadavků kontaktujte
            plavaniluzanky@kometaplavani.cz
          </Text>
        </S.FormItem>
      </S.Container>
    </SwimmingForm>
  );
};
