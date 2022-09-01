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
//fix -> https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module
//@ts-ignore
import HeroImage from "@/public/images/hero-img.JPG";

const HeroSection = () => {
  return (
    <S.HeroSection>
      <MaxHeight>
        <MaxWidth>
          <S.FlexWrapper
            align="center"
            justify="flex-end"
            textAlign="center"
            gap="var(--gap)"
          >
            <MainHeadline>Plavecká škola kometa</MainHeadline>
            <div>
              <MainSubheadline>Bazén za Lužánkami</MainSubheadline>
              <S.TextContainer light center>
                Základní plavání pro děti. Svěřte se do rukou profesionálů pod
                záštitou nejúspěšnějšího plaveckého klubu v České republice
              </S.TextContainer>
            </div>
            <S.ImageButton>
              <Image src={PlusButton} objectFit="cover" />
            </S.ImageButton>
          </S.FlexWrapper>
        </MaxWidth>
        <S.ImageContainer>
          <Image
            src={HeroImage}
            layout="fill"
            objectFit="cover"
            placeholder={HeroImage}
            priority={true}
          />
        </S.ImageContainer>
      </MaxHeight>
    </S.HeroSection>
  );
};

//to skakani je obecne debilni
//co to udelat po svym, ze si zmerim pri nacitani stranky velikost a jen 1
//to podle toho upravim a uz se to dal menit nebude
//mozna by melo ale, kdyz nekdo otoci mobil na landscape

//pouzij tu measure height funkci z use100vh .. ta by mohla byt gut

export default HeroSection;
