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
  text: string;
  image: StaticImageData;
  scrollTarget: scrollTargets;
}

const Service = (props: Props) => {
  const { headline, text, image, scrollTarget } = props;

  const router = useRouter();

  const clickHandler = async () => {
    await router.push("/prihlasky");

    // await delay(() => scrollTo(scrollTarget)); //not working well

    scrollTo(scrollTarget);
  };

  return (
    <S.Service>
      <S.Container>
        <S.ImageContainer>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            alt={headline.toLowerCase()}
          />
        </S.ImageContainer>
        <S.Flex justify="space-between" gap="2rem">
          <Subheadline variant="dark">{headline}</Subheadline>
          <Text variant="dark">{text}</Text>
          <S.A variant="transparent-blue" onClick={clickHandler}>
            Více informací
          </S.A>
        </S.Flex>
      </S.Container>
    </S.Service>
  );
};

export default Service;
