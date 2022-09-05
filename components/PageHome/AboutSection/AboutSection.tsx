//libraries
import Image from "next/image";
//images or svgs
import WaveYellow from "@/public/icons/wave-yellow.svg";
//styles
import { MaxWidth, Text } from "@/styles";
import * as S from "./AboutSection.style";

const AboutSection = () => {
  return (
    <S.AboutSection>
      <S.MaxWidth>
        <S.ImageContainer>
          <Image src={WaveYellow} layout="fill" />
        </S.ImageContainer>
        <S.AboutText>
          Naše plavecká škola pracuje pod záštitou plaveckého oddílu SKP Kometa.
          Naší specializací je výuka plavání předškolních dětí a dětí ze
          základních škol. V plavecké přípravě dětí jsme nasbírali během řady
          let mnoho zkušeností a díky tomu můžeme dětem nabídnout profesionální
          výuku plavání pod vedením certifikovaných trenérů, kteří patří mezi
          špičku v trenérské branži.
        </S.AboutText>
        <S.ImageContainer>
          <Image src={WaveYellow} layout="fill" />
        </S.ImageContainer>
      </S.MaxWidth>
    </S.AboutSection>
  );
};

export default AboutSection;
