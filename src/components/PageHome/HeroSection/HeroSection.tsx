import HeroImage from "~/public/images/hero-img.jpg";

import { Button } from "~/components/Shared";
import { MainHeadline, MainSubheadline, MaxHeight } from "~/styles";
import { scrollTo } from "~/utils";

import * as S from "./HeroSection.style";

const HeroSection = () => {
  return (
    <S.HeroSection name="home">
      <MaxHeight $gradient={true}>
        <S.MaxWidth>
          <S.FlexWrapper align="flex-start" justify="flex-end" gap="2rem">
            <div>
              <MainHeadline>
                Plavecká škola{" "}
                <S.EmphasizedHeadline>kometa</S.EmphasizedHeadline>
              </MainHeadline>
              <MainSubheadline>Bazén za Lužánkami</MainSubheadline>
            </div>
            <div>
              <S.TextContainer variant="light">
                Základní plavání pro děti. Svěřte se do rukou profesionálů pod
                záštitou nejúspěšnějšího plaveckého klubu v České republice.
              </S.TextContainer>
            </div>
            <Button
              variant="filled"
              color="secondary"
              onClick={() => scrollTo("service")}
            >
              Zobrazit lekce
            </Button>
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
      </MaxHeight>
    </S.HeroSection>
  );
};

export default HeroSection;
