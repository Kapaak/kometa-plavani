//libraries
import Image from "next/image";
//styles
import { MainHeadline, MainSubheadline, MaxHeight } from "@/styles";
import * as S from "./HeroSection.style";
//images
//@ts-ignore it should be lowercase .jpg i guess
import HeroImage from "@/public/images/hero-img.JPG";
import ArrowYellow from "@/public/icons/arrow-yellow.svg";
//others
import { scrollTo } from "@/utils/functions";

const HeroSection = () => {
  return (
    <S.HeroSection name="home">
      <MaxHeight $gradient={true}>
        <S.MaxWidth>
          <S.FlexWrapper
            align="center"
            justify="flex-end"
            textAlign="center"
            gap="var(--gap)"
          >
            <div>
              <MainHeadline>
                Plavecká škola{" "}
                <S.EmphasizedHeadline>kometa</S.EmphasizedHeadline>
              </MainHeadline>
              <MainSubheadline>Bazén za Lužánkami</MainSubheadline>
            </div>
            <div>
              <S.TextContainer variant="light" center>
                Základní plavání pro děti. Svěřte se do rukou profesionálů pod
                záštitou nejúspěšnějšího plaveckého klubu v České republice
              </S.TextContainer>
            </div>
          </S.FlexWrapper>
        </S.MaxWidth>
        <S.ImageContainer>
          <Image
            src={HeroImage}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={HeroImage}
            priority={true}
          />
        </S.ImageContainer>
        <S.ArrowContainer onClick={() => scrollTo("about")}>
          <Image src={ArrowYellow} />
        </S.ArrowContainer>
      </MaxHeight>
    </S.HeroSection>
  );
};

export default HeroSection;
