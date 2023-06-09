import { Subheadline } from "@/styles";
import * as S from "./BasicSwimmingForm.style";
import {
  ControlledInput,
  ControlledSelect,
  ControlledNameInput,
  IconButton,
} from "@/shared";
import { createOption } from "@/utils";

interface BasicSwimmingFormProps {
  onSubmit: any;
  errors: any;
  isLoading: boolean;
}

export const BasicSwimmingForm = ({
  onSubmit,
  errors,
  isLoading,
}: BasicSwimmingFormProps) => {
  return (
    <S.Form onSubmit={onSubmit}>
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
          <S.FormInputContainer>
            <ControlledSelect
              name="preferedDay"
              placeholder="Preferovaný den"
              pattern={/^\d+$/}
              required="Preferovaný den nesmí být prázdný"
              options={[
                createOption("pondělí", "pondělí"),
                createOption("úterý", "úterý"),
                createOption("středa", "středa"),
                createOption("čtvrtek", "čtvrtek"),
                createOption("pátek", "pátek"),
              ]}
            />
            <S.Label>Preferovaný den</S.Label>
            <S.ErrorContainer>{errors?.preferedDay?.message}</S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledSelect
              name="preferedTime"
              placeholder="Preferovaný čas"
              pattern={/^\d+$/}
              required="Preferovaný čas nesmí být prázdný"
              options={[
                createOption("15:00 - 16:00", "15:00 - 16:00"),
                createOption("16:00 - 17:00", "16:00 - 17:00"),
                createOption("17:00 - 18:00", "17:00 - 18:00"),
              ]}
            />
            <S.Label>Preferovaný den</S.Label>
            <S.ErrorContainer>{errors?.preferedTime?.message}</S.ErrorContainer>
          </S.FormInputContainer>
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
