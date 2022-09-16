//libraries
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
//images
import WaveYellow from "@/public/icons/wave-yellow.svg";
//styles
import * as S from "./AboutSection.style";
//redux
import { toggleShadow } from "@/redux/slices/navigationSlice";

const AboutSection = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.15,
    // triggerOnce: true, //plan B
  });

  const dispatch = useDispatch();

  useEffect(() => {
    //this would trigger everytime I enter / leave this element
    //I want a shadow on <Header/> to disappear only on hero page
    //(in default behavior it would disappear after we leave this element)
    //therefore I check if boundingClientRect - visible area of element is above current page or not
    const isCrossingHeroSection =
      entry?.boundingClientRect && entry?.boundingClientRect.top > 0;
    if (isCrossingHeroSection) dispatch(toggleShadow(inView));
  }, [inView]);

  return (
    <div>
      <S.AboutSection name="about" ref={ref}>
        <S.MaxWidth>
          <S.ImageContainer>
            <Image src={WaveYellow} layout="fill" alt="vlnka" />
          </S.ImageContainer>
          <S.AboutText center bold>
            Přihlášky se spustí po dostavení a spuštění chodu v bazénu.
            Předpokládaná doba je září 2023. Budeme se na vás těšit.
          </S.AboutText>
          <S.ImageContainer>
            <Image src={WaveYellow} layout="fill" alt="vlnka" />
          </S.ImageContainer>
          <S.AboutText center>
            Naše plavecká škola pracuje pod záštitou plaveckého oddílu SKP
            Kometa. Naší specializací je výuka plavání předškolních dětí a dětí
            ze základních škol. V plavecké přípravě dětí jsme nasbírali během
            řady let mnoho zkušeností a díky tomu můžeme dětem nabídnout
            profesionální výuku plavání pod vedením certifikovaných trenérů,
            kteří patří mezi špičku v trenérské branži.
          </S.AboutText>
          <S.ImageContainer>
            <Image src={WaveYellow} layout="fill" alt="vlnka" />
          </S.ImageContainer>
        </S.MaxWidth>
      </S.AboutSection>
    </div>
  );
};

export default AboutSection;
