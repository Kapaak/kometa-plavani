//libraries
import Image from "next/image";
//styles
import { MainHeadline, MainSubheadline, MaxHeight } from "@/styles";
import * as S from "./HeroSection.style";
//images
import HeroImage from "@/public/images/hero-img.jpg";
import ArrowYellow from "@/public/icons/arrow-yellow.svg";
//others
import { scrollTo } from "@/utils";

const HeroSection = () => {
  return (
    <S.HeroSection name="home">
      <MaxHeight $gradient={true}>
        <S.MaxWidth>
          <S.FlexWrapper
            align="center"
            justify="flex-end"
            textAlign="center"
            gap="2rem"
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
                záštitou nejúspěšnějšího plaveckého klubu v České republice.
              </S.TextContainer>
            </div>
          </S.FlexWrapper>
        </S.MaxWidth>
        <S.ImageContainer>
          <S.Img
            src={HeroImage}
            placeholder="blur"
            priority={true}
            alt="děti na bazéně v Brně soutěžící proti sobě"
          />
        </S.ImageContainer>
        <S.ArrowButton
          onClick={() => scrollTo("about")}
          aria-label="šipka která naviguje na sekci o nás"
        >
          <Image src={ArrowYellow} alt="šipka" />
        </S.ArrowButton>
      </MaxHeight>
    </S.HeroSection>
  );
};

export default HeroSection;
