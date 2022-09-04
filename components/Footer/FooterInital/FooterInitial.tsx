import Image from "next/image";
//svgs
import LuzankyLogo from "@/public/icons/luzanky.svg";
import KometaLogo from "@/public/icons/kometa.svg";
//styles
import { Flex } from "@/styles";
import * as S from "./FooterInitial.style";

const FooterInitial = () => {
  return (
    <S.Flex justify="space-between" direction="row" wrap="wrap" gap="3rem">
      <Image src={LuzankyLogo} />
      <Image src={KometaLogo} />
      <S.Text variant="light">
        Sportovní klub policie Brno <br />
        Bauerova 321/5, Brno 613 00 <br /> 613 00 Brno
      </S.Text>
    </S.Flex>
  );
};

export default FooterInitial;
