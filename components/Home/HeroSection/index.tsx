//styles
import {
  Flex,
  MainHeadline,
  MainSubheadline,
  MaxHeight,
  MaxWidth,
  Text,
} from "@/styles";
import Image from "next/image";
import * as S from "./HeroSection.style";
//images or svgs
import PlusButton from "@/public/icons/plus-button.svg";
//@ts-ignore
import HeroImg from "@/public/images/hero-img.JPG";

const HeroSection = () => {
  return (
    <S.HeroSection>
      <MaxHeight>
        <MaxWidth>
          <Flex
            align="center"
            justify="flex-end"
            textAlign="center"
            gap="var(--gap)"
          >
            <MainHeadline>Plavecká škola kometa</MainHeadline>
            <div>
              <MainSubheadline>Bazén za Lužánkami</MainSubheadline>
              <Text light center>
                Základní plavání pro děti. Svěřte se do rukou profesionálů pod
                záštitou nejúspěšnějšího plaveckého klubu v České republice
              </Text>
            </div>
            <S.ImageButton>
              <Image src={PlusButton} objectFit="cover" />
            </S.ImageButton>
          </Flex>
        </MaxWidth>

        <S.ImageContainer>
          <Image src={HeroImg} layout="fill" objectFit="cover" />
        </S.ImageContainer>
      </MaxHeight>
    </S.HeroSection>
  );
};

export default HeroSection;
