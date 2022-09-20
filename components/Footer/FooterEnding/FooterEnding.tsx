//libraries
import Image from "next/image";
import Link from "next/link";
//styles
import * as S from "./FooterEnding.style";
import { Flex } from "@/styles";
//images
import FacebookIcon from "@/public/icons/facebook.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import YoutubeIcon from "@/public/icons/youtube.svg";

const FooterEnding = () => {
  return (
    <Flex gap="1rem">
      <S.ImageFlexContainer gap="1rem" direction="row">
        <Link href="https://www.youtube.com/KometaSwimTv">
          <a>
            <Image
              src={YoutubeIcon}
              width={30}
              height={30}
              alt="youtube-icon"
            />
          </a>
        </Link>
        <Link href="https://instagram.com/kometaplavani">
          <a>
            <Image
              src={InstagramIcon}
              width={30}
              height={30}
              alt="instagram-icon"
            />
          </a>
        </Link>
        <Link href="https://www.facebook.com/kometaplavani">
          <a>
            <Image
              src={FacebookIcon}
              width={30}
              height={30}
              alt="facebook-icon"
            />
          </a>
        </Link>
      </S.ImageFlexContainer>
      <S.Creator>© 2022 Pavel Zapletal</S.Creator>
    </Flex>
  );
};

export default FooterEnding;
