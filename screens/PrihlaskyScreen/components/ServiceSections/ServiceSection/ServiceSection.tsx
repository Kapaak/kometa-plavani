//libraries
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
//styles
import { A, Flex, SectionElement, Subheadline, Text } from "@/styles";
import * as S from "./ServiceSection.style";
//interfaces
import { ScrollSections } from "@/domains";
import { Button } from "@/components/Shared/Button";
import { Calendar, Coin, Timer } from "@phosphor-icons/react";

interface ServiceSectionProps {
  headline: string;
  text: string;
  image: StaticImageData;
  alt: string;
  name: ScrollSections;
  url?: string;
  isEven: boolean;
  price?: string;
  time?: number;
  priceListHref?: string;
}

export const ServiceSection = (props: ServiceSectionProps) => {
  const {
    headline,
    text,
    image,
    isEven,
    name,
    alt,
    url,
    time,
    price,
    priceListHref,
  } = props;

  return (
    <SectionElement name={name}>
      <Flex direction="row" gap="6rem">
        <S.DesktopImageContainer isEven={isEven}>
          <S.Img src={image} alt={alt} />
        </S.DesktopImageContainer>
        <S.Flex gap="2rem">
          <S.ImageContainer>
            <S.Img src={image} alt={alt} />
          </S.ImageContainer>
          <S.Headline>{headline}</S.Headline>
          <Text variant="dark">{text}</Text>
          <Flex>
            <Flex direction="row" gap="1rem" align="center">
              <Coin size={20} />
              <Text variant="dark">{price}</Text>
              <Text variant="dark">
                (
                <a
                  href={priceListHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  // download
                  style={{ textDecoration: "underline" }}
                >
                  ceník lekcí
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
                  href={"/files/ROZPIS_LEKCI.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  // download
                  style={{ textDecoration: "underline" }}
                >
                  zobrazit rozpis lekcí
                </a>
              </Text>
            </Flex>
          </Flex>
          <Link href={`/prihlasky/${url}`} passHref>
            <Button>přihláška</Button>
          </Link>
        </S.Flex>
      </Flex>
    </SectionElement>
  );
};
