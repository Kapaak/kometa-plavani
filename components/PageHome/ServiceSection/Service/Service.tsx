//libraries
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
//styles
import * as S from "./Service.style";
import { Subheadline, Text } from "@/styles";
//interfaces
import { ScrollSections } from "../ServiceSection.interface";
//others
import { scrollTo } from "@/utils/functions";

interface Props {
  headline: string;
  text: string;
  image: StaticImageData;
  alt: string;
  scrollTarget: ScrollSections;
}

const Service = (props: Props) => {
  const { headline, text, image, scrollTarget, alt } = props;

  const router = useRouter();

  const clickHandler = async () => {
    await router.push("/prihlasky");

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
            alt={alt}
          />
        </S.ImageContainer>
        <S.Flex justify="space-between" gap="1rem">
          <Subheadline variant="dark">{headline}</Subheadline>
          <Text variant="grey">{text}</Text>
          <S.A
            variant="transparent-blue"
            onClick={clickHandler}
            aria-label="odkazuje na stránku přihlášky"
          >
            Více informací
          </S.A>
        </S.Flex>
      </S.Container>
    </S.Service>
  );
};

export default Service;
