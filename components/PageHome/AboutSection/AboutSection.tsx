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
    <S.AboutSection name="about" ref={ref}>
      <S.MaxWidth>
        {/* <S.ImageContainer>
          <S.Img src={WaveYellow} alt="vlnka" />
        </S.ImageContainer>
        <S.AboutText center bold>
          Předpoklad pro otevření přihlášek kurzů je 12.června 2023. Budeme se
          na Vás těšit.
        </S.AboutText> */}
        <S.ImageContainer>
          <S.Img src={WaveYellow} alt="vlnka" />
        </S.ImageContainer>
        <S.AboutText bold center>
          Naše plavecké kurzy budou otevřeny od října 2023. Těšíme se na Vás.
        </S.AboutText>
        <S.AboutText center>
          Naše plavecká škola pracuje pod záštitou plaveckého oddílu KPSP Kometa
          Brno. Naší specializací je výuka plavání dětí předškolního a školního
          věku. V plavecké přípravě dětí jsme nasbírali během řady let mnoho
          zkušeností a díky tomu můžeme dětem nabídnout komplexní výuku plavání
          podle nejnovějších metodik. Výuku zajišťují certifikovaní trenéři,
          kteří patří mezi špičku v trenérské branži.
        </S.AboutText>
        <S.ImageContainer>
          <S.Img src={WaveYellow} alt="vlnka" />
        </S.ImageContainer>
      </S.MaxWidth>
    </S.AboutSection>
  );
};

export default AboutSection;
