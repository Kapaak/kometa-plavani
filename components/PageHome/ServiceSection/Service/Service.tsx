//libraries
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
//styles
import * as S from "./Service.style";
import { A, Flex, Subheadline, Text } from "@/styles";
//interfaces
import { scrollTargets } from "../ServiceSection.interface";
//others
import { delay, scrollTo } from "@/utils/functions";

interface Props {
  headline: string;
  smallText: string;
  fullText: string;
  image: StaticImageData;
  scrollTarget: scrollTargets;
}

const Service = (props: Props) => {
  const { fullText, headline, smallText, image, scrollTarget } = props;

  const router = useRouter();

  const clickHandler = async () => {
    await router.push("/prihlasky");

    await delay(() => scrollTo(scrollTarget));

    //scrollTo(scrollTarget);
  };

  return (
    <S.Service>
      <S.Container>
        <Flex justify="flex-end" relative>
          <Subheadline variant="light">{headline}</Subheadline>
          <Text variant="light">{smallText}</Text>
          <S.A variant="yellow" onClick={clickHandler}>
            Více informací
          </S.A>
        </Flex>
        <S.ImageContainer>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            alt={headline.toLowerCase()}
          />
        </S.ImageContainer>
      </S.Container>
      <S.DesktopContainer>
        <Subheadline variant="dark">{headline}</Subheadline>
        <Text variant="dark">{fullText}</Text>
        <A variant="transparent-blue" onClick={clickHandler}>
          Více informací
        </A>
      </S.DesktopContainer>
    </S.Service>
  );
};

export default Service;
