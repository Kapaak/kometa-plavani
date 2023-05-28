import { Divider, Strong, Text } from "@/styles";
import { Modal } from "@/shared";
import { UserCirclePlus } from "phosphor-react";
import * as S from "./SuccessModal.style";

interface ModalProps {
  isOpen: boolean;
  addChild: () => void;
  redirect: () => void;
}

export const SuccessModal = ({ addChild, isOpen, redirect }: ModalProps) => {
  return (
    <Modal
      headline={"vaše přihláška byla úspěšně odeslána"}
      isOpen={isOpen}
      redirect={redirect}
    >
      <S.TextWrapper>
        <Text variant="dark">
          Děkujeme za přihlášku na Váš email byl odeslán potvrzovací email.
        </Text>
        <Divider />
        <Text variant="dark">
          <Strong weight="400">
            V případě, že vám e-mail nedorazil, zkontrolujte prosím spam.
          </Strong>
        </Text>
        <Divider />
        <Text variant="dark">
          <Strong weight="400">Potřebujete pomoc? </Strong>V případě jakéhokoliv
          problému se prosím obraťte na tel. číslo 773708287 nebo na email
          plavaniluzanky@kometabrno.cz
        </Text>
        <Divider width="50%" />

        <S.ButtonContainer justify="center" gap="2rem">
          <S.CreateButton onClick={addChild}>
            <UserCirclePlus size={34} color="var(--col2)" />
            VYTVOŘIT DALŠÍ PŘIHLÁŠKU
          </S.CreateButton>
          <S.ReturnButton onClick={redirect} iconAfter={S.ArrowRightIcon}>
            vrátit na úvodní stránku
          </S.ReturnButton>
        </S.ButtonContainer>
      </S.TextWrapper>
    </Modal>
  );
};