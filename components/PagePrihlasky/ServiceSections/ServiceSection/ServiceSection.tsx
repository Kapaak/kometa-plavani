//libraries
import Image, { StaticImageData } from "next/image";
//styles
import { A, Flex, Text } from "@/styles";
import * as S from "./ServiceSection.style";
import Link from "next/link";

interface Props {
  isEven: boolean;
  headline: string;
  fullText: string;
  image: StaticImageData;
}

const ServiceSection = ({ headline, fullText, image, isEven }: Props) => {
  return (
    <Flex direction="row" gap="6rem">
      <S.DesktopImageContainer isEven={isEven}>
        <Image layout="fill" src={image} objectFit="cover" />
      </S.DesktopImageContainer>
      <S.Flex gap="2rem">
        <h1>{headline}</h1>
        <S.ImageContainer>
          <Image layout="fill" src={image} objectFit="cover" />
        </S.ImageContainer>
        <Text variant="dark">{fullText}</Text>
        <Link href="">
          <A variant="transparent-blue">přihlásit dítě</A>
        </Link>
      </S.Flex>
    </Flex>
  );
};

export default ServiceSection;
