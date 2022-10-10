//libraries
import Image from "next/image";
import Link from "next/link";
//styles
import { A, Flex, SectionElement, Text } from "@/styles";
import * as S from "./ServiceSection.style";
//interfaces
import { ISection } from "../ServiceSections.interface";

const ServiceSection = (props: ISection) => {
  const { headline, text, image, isEven, name } = props;

  return (
    <SectionElement name={name}>
      <Flex direction="row" gap="6rem">
        <S.DesktopImageContainer isEven={isEven}>
          <Image layout="fill" src={image} objectFit="cover" />
        </S.DesktopImageContainer>
        <S.Flex gap="2rem">
          <S.Headline>{headline}</S.Headline>
          <S.ImageContainer>
            <Image layout="fill" src={image} objectFit="cover" />
          </S.ImageContainer>
          <Text variant="dark">{text}</Text>
          <Link href="">
            <A variant="disabled">připravujeme</A>
          </Link>
        </S.Flex>
      </Flex>
    </SectionElement>
  );
};

export default ServiceSection;
