//libraries
import Image from "next/image";
//styles
import * as S from "./Service.style";
import { A, Flex, Subheadline, Text } from "@/styles";
import Link from "next/link";

interface Props {
  headline: string;
  smallText: string;
  fullText: string;
  image: any;
}

const Service = ({ fullText, headline, smallText, image }: Props) => {
  return (
    <S.Service>
      <S.Container>
        <Flex justify="flex-end" relative>
          <Subheadline>{headline}</Subheadline>
          <Text variant="light">{smallText}</Text>
          <Link href="/prihlasky">
            <S.A variant="yellow">Více informací</S.A>
          </Link>
        </Flex>
        <S.ImageContainer>
          <Image src={image} layout="fill" objectFit="cover" />
        </S.ImageContainer>
      </S.Container>
      <S.DesktopContainer>
        <Text variant="dark">{fullText}</Text>
        <Link href="/prihlasky">
          <A variant="transparent-blue">Více informací</A>
        </Link>
      </S.DesktopContainer>
    </S.Service>
  );
};

export default Service;
