import { ReactNode } from "react";

import { Icon as TIcon } from "@phosphor-icons/react";

import { Text } from "~/styles";

import * as S from "./IconText.style";

interface IconTextProps {
  icon: TIcon;
  text?: string | number;
  bold?: boolean;
}

export const IconText = ({ icon, text, bold = false }: IconTextProps) => {
  const Icon = icon as TIcon;

  return (
    <S.IconText>
      <Icon size={20} />
      <Text variant="dark" bold={bold}>
        {text}
      </Text>
    </S.IconText>
  );
};
