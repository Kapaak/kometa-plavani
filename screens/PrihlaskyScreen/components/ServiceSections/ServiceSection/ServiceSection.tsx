//libraries
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
//styles
import { A, Flex, SectionElement, Subheadline, Text } from "@/styles";
import * as S from "./ServiceSection.style";
//interfaces
import { ScrollSections } from "@/domains";

interface ServiceSectionProps {
  headline: string;
  text: string;
  image: StaticImageData;
  alt: string;
  name: ScrollSections;
  url?: string;
  isEven: boolean;
}

export const ServiceSection = (props: ServiceSectionProps) => {
  const { headline, text, image, isEven, name, alt, url } = props;

  return (
    <SectionElement name={name}>
      <Flex direction="row" gap="6rem">
        <S.DesktopImageContainer isEven={isEven}>
          <Image layout="fill" src={image} objectFit="cover" alt={alt} />
        </S.DesktopImageContainer>
        <S.Flex gap="2rem">
          <S.ImageContainer>
            <Image layout="fill" src={image} objectFit="cover" alt={alt} />
          </S.ImageContainer>
          <S.Headline>{headline}</S.Headline>
          <Text variant="dark">{text}</Text>
          <Link href={`/prihlasky/${url}`} passHref>
            <A variant="transparent-blue">přejít na přihlášku</A>
          </Link>
        </S.Flex>
      </Flex>
    </SectionElement>
  );
};
