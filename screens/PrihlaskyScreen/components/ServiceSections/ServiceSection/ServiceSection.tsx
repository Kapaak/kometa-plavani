//libraries
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
//styles
import { A, Flex, SectionElement, Subheadline, Text } from "@/styles";
import * as S from "./ServiceSection.style";
//interfaces
import { ScrollSections } from "@/domains";
import { Button } from "@/components/Shared/Button";
import { Coin, Timer } from "phosphor-react";

interface ServiceSectionProps {
  headline: string;
  text: string;
  image: StaticImageData;
  alt: string;
  name: ScrollSections;
  url?: string;
  isEven: boolean;
  price: string;
  time: number;
}

export const ServiceSection = (props: ServiceSectionProps) => {
  const { headline, text, image, isEven, name, alt, url, time, price } = props;

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
          <Flex direction="row" gap="1rem" align="center">
            <Coin />
            <Text variant="dark">{price} Kč</Text>
          </Flex>
          <Flex direction="row" gap="1rem" align="center">
            <Timer />
            <Text variant="dark">{time} min</Text>
          </Flex>
          <Link href={`/prihlasky/${url}`} passHref>
            <Button>přejít na přihlášku</Button>
          </Link>
        </S.Flex>
      </Flex>
    </SectionElement>
  );
};
