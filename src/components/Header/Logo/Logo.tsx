//libraries
import LogoLatest from "~/public/icons/logo-latest.svg";

import Image from "next/image";
import Link from "next/link";

//styles
import * as S from "./Logo.style";
//images

export const Logo = () => {
  return (
    <Link href="/" aria-label="logo této stránky" passHref>
      <S.Img src={LogoLatest} alt="logo" />
    </Link>
  );
};
