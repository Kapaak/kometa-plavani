import { Space, Subheadline, Text } from "@/styles";
import * as S from "../SwimmingForm/SwimmingForm.style";
import {
  ControlledInput,
  ControlledSelect,
  ControlledNameInput,
  ControlledRadio,
} from "@/shared";
import { createOption } from "@/utils";
import { useState } from "react";
import { useLectureOptions, useLecturePaymentOptions } from "@/hooks";
import { SwimmingForm } from "../SwimmingForm";

interface ConditionFormProps {
  onSubmit: () => void;
  isLoading: boolean;
  errors: any;
}

export const ConditionForm = ({
  onSubmit,
  errors,
  isLoading,
}: ConditionFormProps) => {
  const { condition: conditionOptions } = useLectureOptions();
  const { condition: conditionPaymentOptions } = useLecturePaymentOptions();

  const [maxNumberOfLessons, setMaxNumberOfLessons] = useState(
    conditionPaymentOptions[0].lessonsPerWeek
  );

  return (
    <SwimmingForm
      selectOptions={conditionOptions}
      onSubmit={onSubmit}
      isLoading={isLoading}
      maxNumberOfLessons={maxNumberOfLessons}
    >
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
              pattern={{
                value: /\d{4}([.,\/]\d{4})/,
                message:
                  "Rodné číslo v nesprávném formátu. Příklad: 045421/1234.",
              }}
              required="Rodné číslo musí být vyplněno."
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
              pattern={{
                value: /\S+@\S+\.\S+/,
                message:
                  "Platný email musí obsahovat @ (př. novak.filip@email.cz).",
              }}
              required="Email musí být vyplněn."
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
            }}
            options={conditionPaymentOptions}
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
