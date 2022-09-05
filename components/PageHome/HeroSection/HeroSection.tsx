//styles
import { MainHeadline, MainSubheadline, MaxHeight, MaxWidth } from "@/styles";
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
      <MaxHeight $gradient={true}>
        <MaxWidth>
          <S.FlexWrapper
            align="center"
            justify="flex-end"
            textAlign="center"
            gap="var(--gap)"
          >
            <div>
              <MainHeadline>Plavecká škola</MainHeadline>
              <MainHeadline>kometa</MainHeadline>
            </div>
            <div>
              <MainSubheadline>Bazén za Lužánkami</MainSubheadline>
              <S.TextContainer variant="light" center>
                Základní plavání pro děti. Svěřte se do rukou profesionálů pod
                záštitou nejúspěšnějšího plaveckého klubu v České republice
              </S.TextContainer>
            </div>
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

export default HeroSection;
