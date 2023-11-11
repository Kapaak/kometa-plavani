import { Danger, Space, Subheadline, Text } from "@/styles";
import * as S from "../SwimmingForm/SwimmingForm.style";
import {
  ControlledInput,
  ControlledSelect,
  ControlledNameInput,
  ControlledRadio,
} from "@/shared";
import { createOption } from "@/utils";
import { useState } from "react";
import { useLecturePaymentOptions } from "@/hooks";
import { SwimmingForm } from "../SwimmingForm";
import { LectureTypes } from "@/domains";

interface AdultFormProps {
  onSubmit: () => void;
  isLoading: boolean;
  errors: any;
}

export const AdultForm = ({ onSubmit, errors, isLoading }: AdultFormProps) => {
  const { advanced: advancedPaymentOptions } = useLecturePaymentOptions();

  const [maxNumberOfLessons, setMaxNumberOfLessons] = useState(
    advancedPaymentOptions[0].lessonsPerWeek
  );

  return (
    <SwimmingForm
      lectureType={LectureTypes.ADVANCED}
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
              placeholder="Jméno"
              required="Jméno nesmí být prázdné"
            />
            <S.Label>Jméno</S.Label>
            <Danger>{errors?.firstName?.message}</Danger>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="lastName"
              placeholder="Příjmení"
              required="Příjmení nesmí být prázdné"
            />
            <S.Label>Příjmení</S.Label>
            <Danger>{errors?.lastName?.message}</Danger>
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
            <Danger>{errors?.gender?.message}</Danger>
          </div>
          <S.FormInputContainer>
            <ControlledInput
              name="personalIdNum"
              placeholder="Rodné číslo (př. 045421/1234)"
              pattern={{
                value: /\d{4}([.,\/]\d{4})/,
                message:
                  "Rodné číslo v nesprávném formátu. Příklad: 045421/1234.",
              }}
              required="Rodné číslo musí být vyplněno."
            />
            <S.Label>Rodné číslo</S.Label>
            <Danger>{errors?.personalIdNum?.message}</Danger>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="dateOfBirth"
              placeholder="Datum narození"
              required="Datum narození musí být vyplněno."
            />
            <S.Label>Datum narození</S.Label>
            <Danger>{errors?.dateOfBirth?.message}</Danger>
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
            <Danger>{errors?.phone?.message}</Danger>
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
            <Danger>{errors?.email?.message}</Danger>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="address"
              placeholder="Adresa a číslo popisné"
              required="Adresa musí být vyplněna"
            />
            <S.Label>Adresa a číslo popisné</S.Label>
            <Danger>{errors?.address?.message}</Danger>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="city"
              placeholder="Město"
              required="Město musí být vyplněno"
            />
            <S.Label>Město</S.Label>
            <Danger>{errors?.city?.message}</Danger>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="postCode"
              placeholder="PSČ"
              required="PSČ musí být vyplněno"
            />
            <S.Label>PSČ</S.Label>
            <Danger>{errors?.postCode?.message}</Danger>
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
            options={advancedPaymentOptions}
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
