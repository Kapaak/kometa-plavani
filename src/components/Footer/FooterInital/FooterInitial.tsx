import KometaLogo from "~/public/icons/kometa.svg";

import Image from "next/image";

import * as S from "./FooterInitial.style";

const FooterInitial = () => {
  return (
    <S.Flex justify="space-between" direction="row" wrap="wrap" gap="3rem">
      <Image src={KometaLogo} alt="logo Kometa Brno" />
      <S.Text variant="light">
        Klub plaveckých sportů policie Kometa Brno z.s.
        <br />
        Sportovní 486/4
        <br /> 602 00 Brno - Královo Pole
      </S.Text>
    </S.Flex>
  );
};

export default FooterInitial;
