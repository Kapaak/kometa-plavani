//libraries
import KometaLogo from "~/public/icons/kometa.svg";
import LogoWhite from "~/public/icons/logo-latest-white.svg";

import Image from "next/image";
//images

//styles
import * as S from "./FooterInitial.style";

const FooterInitial = () => {
  return (
    <S.Flex justify="space-between" direction="row" wrap="wrap" gap="3rem">
      <Image src={LogoWhite} alt="logo stránky plavani-luzanky" />
      <Image src={KometaLogo} alt="logo Kometa Brno" />
      <S.Text variant="light">
        Sportovní klub policie Brno <br />
        Bauerova 321/5
        <br /> 613 00 Brno
      </S.Text>
    </S.Flex>
  );
};

export default FooterInitial;
