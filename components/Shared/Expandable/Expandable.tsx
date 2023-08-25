import { ReactNode, useState } from "react";
import * as S from "./Expandable.style";
import { Icon as TIcon } from "@phosphor-icons/react";
import { Flex } from "@/styles";
import { DynamicPhosphorIcon, IconType, KeyofIcons } from "@/utils";

interface FAQProps {
  title: string;
  subtitle?: string;
  description: ReactNode;
  icon?: KeyofIcons;
}

export const Expandable = ({
  title,
  description,
  icon,
  subtitle,
}: FAQProps) => {
  const [showMore, setShowMore] = useState(false);

  if (!icon)
    return (
      <S.Expandable>
        <S.ExpandingButton onClick={() => setShowMore((prev) => !prev)}>
          <Flex direction="column">
            <S.Title>{title}</S.Title>
            {subtitle && <S.Subtitle variant="dark">{subtitle}</S.Subtitle>}
          </Flex>
          <S.CaretIcon size={18} weight="bold" $isActive={showMore} />
        </S.ExpandingButton>
        {showMore && description}
      </S.Expandable>
    );

  const Icon = DynamicPhosphorIcon({ name: icon }) as IconType;

  return (
    <S.Expandable>
      <S.ExpandingButton onClick={() => setShowMore((prev) => !prev)}>
        {icon && <Icon size={30} weight="light" color="var(--colb)" />}
        <Flex direction="column">
          <S.Title>{title}</S.Title>
          {subtitle && <S.Subtitle variant="dark">{subtitle}</S.Subtitle>}
        </Flex>
        <S.CaretIcon size={18} weight="bold" $isActive={showMore} />
      </S.ExpandingButton>
      {showMore && <S.Text variant="dark">{description}</S.Text>}
    </S.Expandable>
  );
};
