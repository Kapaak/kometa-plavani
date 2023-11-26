import { Icon } from "@phosphor-icons/react";

import { Flex } from "@/styles";

import * as S from "./ContactSectionItem.style";

export interface ContactItem {
  title: string;
  icon: Icon;
  description?: string;
  value: string;
}

export const ContactSectionItem = ({
  icon,
  description,
  title,
  value,
}: ContactItem) => {
  const Icon = icon;
  return (
    <S.FlexContainer direction="row" gap="2rem" align="center">
      <Icon size={35} weight="light" />
      <Flex gap=".5rem">
        <S.Headline>{title}</S.Headline>
        <S.TextElement>{value}</S.TextElement>
        {description && <S.TextElement>{description}</S.TextElement>}
      </Flex>
    </S.FlexContainer>
  );
};
