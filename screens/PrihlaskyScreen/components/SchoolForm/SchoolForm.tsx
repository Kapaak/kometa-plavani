import { Subheadline } from "@/styles";
import * as S from "./SchoolForm.style";
import {
  ControlledInput,
  ControlledSelect,
  ControlledNameInput,
} from "@/shared";
import { createOption } from "@/utils";
import { IconButton } from "@/components/Shared";

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
  return (
    <S.Form onSubmit={onSubmit}>
      <S.Container>
        <S.FormItem>
          <Subheadline variant="dark">Údaje</Subheadline>
          <S.FormInputContainer>
            <ControlledNameInput
              name="schoolName"
              placeholder="Název školy"
              required="Jméno nesmí být prázdné"
            />
            <S.Label>Název školy</S.Label>
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
              required="Telefon Kontaktní osoby musí být vyplněn"
            />
            <S.Label>Telefon kontaktní osoby</S.Label>
            <S.ErrorContainer>
              {errors?.contactPersonPhone?.message}
            </S.ErrorContainer>
          </S.FormInputContainer>
        </S.FormItem>
        <S.FormItem>
          <Subheadline variant="dark">Lekce</Subheadline>
          <S.FormInputContainer>
            <ControlledInput
              name="lessonsCount"
              placeholder="Počet lekcí"
              pattern={/^\d+$/}
              required="Počet lekcí musí být číselná hodnota"
            />
            <S.Label>Počet lekcí</S.Label>
            <S.ErrorContainer>{errors?.lessonsCount?.message}</S.ErrorContainer>
          </S.FormInputContainer>
          <S.FormInputContainer>
            <ControlledInput
              name="childrenCount"
              placeholder="Počet dětí"
              pattern={/^\d+$/}
              required="Počet dětí musí být číselná hodnota"
            />
            <S.Label>Počet dětí</S.Label>
            <S.ErrorContainer>
              {errors?.childrenCount?.message}
            </S.ErrorContainer>
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
                createOption("7:00", "7:00"),
                createOption("7:30", "7:30"),
                createOption("8:00", "8:00"),
                createOption("8:30", "8:30"),
                createOption("9:00", "9:00"),
                createOption("9:30", "9:30"),
                createOption("10:00", "10:00"),
                createOption("10:30", "10:30"),
                createOption("11:00", "11:00"),
                createOption("11:30", "11:30"),
                createOption("12:00", "12:00"),
                createOption("13:30", "13:30"),
                createOption("13:30", "13:30"),
                createOption("14:00", "14:00"),
                createOption("14:30", "14:30"),
                createOption("15:00", "15:00"),
                createOption("15:30", "15:30"),
                createOption("16:00", "16:00"),
                createOption("16:30", "16:30"),
                createOption("17:00", "17:00"),
                createOption("17:30", "17:30"),
                createOption("18:00", "18:00"),
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
