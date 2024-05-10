import { StaticImageData } from "next/image";
import { useRouter } from "next/router";

import { Button } from "~/components/Shared";
import { ScrollSections } from "~/domains";
import { scrollTo } from "~/utils";

import * as S from "./Service.style";

interface ServiceProps {
  headline?: string;
  text: string;
  image: StaticImageData;
  alt: string;
  name: ScrollSections;
  tag?: string;
  price: string;
}

export const Service = (props: ServiceProps) => {
  const { headline, text, image, name, alt, tag, price } = props;

  const router = useRouter();

  const clickHandler = async () => {
    await router.push("/prihlasky");

    scrollTo(name);
  };

  return (
    <S.Service>
      <S.Container>
        <S.ImageContainer>
          <S.Img src={image} placeholder="blur" alt={alt} />
          {tag && <S.Tag>{tag}</S.Tag>}
        </S.ImageContainer>
        <S.Flex justify="space-between" align="flex-start">
          <S.Label variant="dark">{headline}</S.Label>
          <S.Description variant="dark">{text}</S.Description>
          <Button
            onClick={clickHandler}
            aria-label="odkazuje na stránku přihlášky"
          >
            Více informací
          </Button>
        </S.Flex>
      </S.Container>
    </S.Service>
  );
};
