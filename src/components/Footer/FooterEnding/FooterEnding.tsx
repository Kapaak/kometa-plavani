import FacebookIcon from "~/public/icons/facebook.svg";
import InstagramIcon from "~/public/icons/instagram.svg";
import YoutubeIcon from "~/public/icons/youtube.svg";

import Image from "next/image";
import Link from "next/link";

import { Flex } from "~/styles";

import * as S from "./FooterEnding.style";

const FooterEnding = () => {
  return (
    <Flex gap="1rem">
      <S.ImageFlexContainer gap="1rem" direction="row">
        <Link href="https://www.youtube.com/KometaSwimTv">
          <Image src={YoutubeIcon} width={30} height={30} alt="youtube" />
        </Link>
        <Link href="https://www.instagram.com/kometaplavani">
          <Image src={InstagramIcon} width={30} height={30} alt="instagram" />
        </Link>
        <Link href="https://www.facebook.com/kometaplavani">
          <Image src={FacebookIcon} width={30} height={30} alt="facebook" />
        </Link>
      </S.ImageFlexContainer>
      <S.Creator>
        <a href="https://www.pavelzapletal.cz/">© 2022 Pavel Zapletal</a>
      </S.Creator>
    </Flex>
  );
};

export default FooterEnding;
