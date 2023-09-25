import { Flex, Text } from "@/styles";
import * as S from "../Lecture.style";
import { Baby, Coin, Timer } from "@phosphor-icons/react";

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
    <S.Flex gap="2rem">
      <S.Headline>{title}</S.Headline>
      <Text variant="dark">{text}</Text>
      <Flex>
        <Flex direction="row" gap="1rem" align="center">
          <Coin size={20} />
          <Text variant="dark" bold>
            {price}
          </Text>
        </Flex>
        <Flex direction="row" gap="1rem" align="center">
          <Timer size={20} />
          <Text variant="dark">{time} min</Text>
        </Flex>
        <Flex direction="row" gap="1rem" align="center">
          <Baby size={20} />
          <Text variant="dark">{age}</Text>
        </Flex>
        <Flex direction="row" gap="1rem" align="center">
          <Text variant="dark">
            <a
              href={pricingDocument}
              target="_blank"
              rel="noopener noreferrer"
              // download
              style={{ textDecoration: "underline" }}
            >
              zobrazit ceník&nbsp;lekcí
            </a>
          </Text>
        </Flex>
      </Flex>
    </S.Flex>
  );
};
