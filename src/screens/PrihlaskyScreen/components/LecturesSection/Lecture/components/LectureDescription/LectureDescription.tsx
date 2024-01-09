import { Baby, Coin, Timer } from "@phosphor-icons/react";

import { IconText, Text } from "~/styles";

import * as S from "./LectureDescription.style";

interface LectureDescriptionProps {
  title?: string;
  text?: string;
  price?: string;
  time?: number;
  pricingDocument?: string;
  age?: string;
}

export const LectureDescription = ({
  title,
  text,
  price,
  time,
  age,
  pricingDocument,
}: LectureDescriptionProps) => {
  return (
    <S.LectureSection gap="2rem">
      <S.Headline>{title}</S.Headline>
      <Text variant="dark">{text}</Text>
      <S.Container>
        <IconText icon={Coin} text={price} bold />
        <IconText icon={Timer} text={`${time} min`} />
        {age && <IconText icon={Baby} text={age} />}
        {pricingDocument && (
          <S.DocumentLink
            href={pricingDocument}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="dark" as="span">
              zobrazit ceník lekcí
            </Text>
          </S.DocumentLink>
        )}
      </S.Container>
    </S.LectureSection>
  );
};
