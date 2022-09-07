//libraries
import Image from "next/image";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";
//styles
import * as S from "./Service.style";
import { A, Flex, Subheadline, Text } from "@/styles";

interface Props {
  headline: string;
  smallText: string;
  fullText: string;
  image: any;
  scrollTarget: string;
}

const Service = (props: Props) => {
  const { fullText, headline, smallText, image, scrollTarget } = props;

  const router = useRouter();

  const clickHandler = async () => {
    await router.push("/prihlasky");
    scroller.scrollTo(scrollTarget, { smooth: true, offset: -100 });
  };

  return (
    <S.Service>
      <S.Container>
        <Flex justify="flex-end" relative>
          <Subheadline>{headline}</Subheadline>
          <Text variant="light">{smallText}</Text>
          <S.A variant="yellow" onClick={clickHandler}>
            Více informací
          </S.A>
        </Flex>
        <S.ImageContainer>
          <Image src={image} layout="fill" objectFit="cover" />
        </S.ImageContainer>
      </S.Container>
      <S.DesktopContainer>
        <Text variant="dark">{fullText}</Text>
        <A variant="transparent-blue" onClick={clickHandler}>
          Více informací
        </A>
      </S.DesktopContainer>
    </S.Service>
  );
};

export default Service;
