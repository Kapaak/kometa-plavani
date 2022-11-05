//libraries
import Image from "next/image";
import Link from "next/link";
//styles
import { A, Flex, SectionElement, Subheadline, Text } from "@/styles";
import * as S from "./ServiceSection.style";
//interfaces
import { ISection } from "../ServiceSections.interface";

const ServiceSection = (props: ISection) => {
  const { headline, text, image, isEven, name, alt } = props;

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
          <Link href="/prihlasky" passHref>
            <A variant="disabled">připravujeme</A>
          </Link>
        </S.Flex>
      </Flex>
    </SectionElement>
  );
};

export default ServiceSection;
