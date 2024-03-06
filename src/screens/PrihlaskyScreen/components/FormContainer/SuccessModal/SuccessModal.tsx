import { UserCirclePlus } from "@phosphor-icons/react";

import { Button, Modal } from "~/components/Shared";
import { Divider, Strong, Text } from "~/styles";

import * as S from "./SuccessModal.style";

interface ModalProps {
  isOpen: boolean;
  addChild: () => void;
  redirect: () => void;
  retryEmailSend: () => Promise<void>;
}

export const SuccessModal = ({
  addChild,
  isOpen,
  redirect,
  retryEmailSend,
}: ModalProps) => {
  return (
    <Modal
      title="vaše přihláška byla odeslána"
      open={isOpen}
      onChange={redirect}
    >
      <S.TextWrapper>
        <Text variant="dark" bold>
          Děkujeme za přihlášku na Váš email byl odeslán potvrzovací email.
        </Text>
        <Divider />
        <Text variant="dark">
          V případě, že Vám e-mail nedorazil, můžete si ho nechat zaslat znovu.
        </Text>
        <Button onClick={retryEmailSend} style={{ marginTop: "1rem" }}>
          Znovu zaslat potvrzovací email
        </Button>
        <Divider />
        <Text variant="dark">
          <Strong weight="400">Potřebujete pomoc? </Strong>V případě jakéhokoliv
          problému se prosím obraťte na tel. číslo 773708287 nebo na email
          plavaniluzanky@kometaplavani.cz
        </Text>
        <Divider width="50%" />

        <S.ButtonContainer justify="center" gap="2rem">
          <S.CreateButton onClick={addChild}>
            <UserCirclePlus size={26} color="var(--col2)" />
            Vytvořit další přihlášku
          </S.CreateButton>
          <S.ReturnButton onClick={redirect}>
            Vrátit se na úvodní stránku
          </S.ReturnButton>
        </S.ButtonContainer>
      </S.TextWrapper>
    </Modal>
  );
};
