//libraries
import { use100vh, measureHeight } from "react-div-100vh";
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
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [height, setHeight] = useState<number | null>(0);

  useEffect(() => {
    setHeight(measureHeight());
  });

  return (
    <S.HeroSection>
      {/* <MaxHeight> */}
      <div style={{ height: `${height}px` }}>
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
      </div>
      {/* </MaxHeight> */}
    </S.HeroSection>
  );
};

//to skakani je obecne debilni
//co to udelat po svym, ze si zmerim pri nacitani stranky velikost a jen 1
//to podle toho upravim a uz se to dal menit nebude
//mozna by melo ale, kdyz nekdo otoci mobil na landscape

//pouzij tu measure height funkci z use100vh .. ta by mohla byt gut

export default HeroSection;
