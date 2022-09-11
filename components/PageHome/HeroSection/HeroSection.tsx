//styles
import { MainHeadline, MainSubheadline, MaxHeight } from "@/styles";
import Image from "next/image";
import * as S from "./HeroSection.style";
//fix -> https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module
//@ts-ignore
import HeroImage from "@/public/images/hero-img.JPG";

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
            placeholder={HeroImage}
            priority={true}
          />
        </S.ImageContainer>
      </MaxHeight>
    </S.HeroSection>
  );
};

export default HeroSection;
