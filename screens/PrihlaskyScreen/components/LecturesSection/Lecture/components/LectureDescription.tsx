import { Flex, Text } from "@/styles";
import * as S from "../Lecture.style";
import { Calendar, Coin, Timer } from "@phosphor-icons/react";

interface LectureDescriptionProps {
  title: string;
  text: string;
  price?: string;
  time?: number;
  url?: string;
}

export const LectureDescription = ({
  title,
  text,
  price,
  time,
  url,
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
          <Text variant="dark">
            (
            <a
              href={"/files/CENIK_LUZANKY.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              download
              style={{ textDecoration: "underline" }}
            >
              ceník&nbsp;lekcí
            </a>
            )
          </Text>
        </Flex>
        <Flex direction="row" gap="1rem" align="center">
          <Timer size={20} />
          <Text variant="dark">{time} min</Text>
        </Flex>
        <Flex direction="row" gap="1rem" align="center">
          <Calendar size={20} />
          <Text variant="dark">
            <a
              href={"/files/ROZVRH_LEKCI.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              download
              style={{ textDecoration: "underline" }}
            >
              stáhnout rozvrh lekcí
            </a>
          </Text>
        </Flex>
      </Flex>
    </S.Flex>
  );
};
