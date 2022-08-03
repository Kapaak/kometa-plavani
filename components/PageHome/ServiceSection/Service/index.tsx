//libraries
import Image from "next/image";
//styles
import * as S from "./Service.style";
import { Button, Flex, Subheadline, Text } from "@/styles";

interface Props {
  headline: string;
  smallText: string;
  fullText: string;
  image: any;
}

const Service = ({ fullText, headline, smallText, image }: Props) => {
  return (
    <S.Service>
      <Flex justify="flex-end" relative>
        <Subheadline>{headline}</Subheadline>
        <Text light>{smallText}</Text>
        <S.ButtonContainer>
          <Button bgCol="yellow">Více informací</Button>
        </S.ButtonContainer>
      </Flex>
      <S.ImageContainer>
        <Image src={image} layout="fill" objectFit="cover" />
      </S.ImageContainer>
    </S.Service>
  );
};

export default Service;
