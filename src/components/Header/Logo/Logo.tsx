import LogoLatest from "~/public/icons/logo-latest.svg";

import Link from "next/link";

import * as S from "./Logo.style";

export const Logo = () => {
  return (
    <Link href="/" aria-label="logo této stránky" passHref>
      <S.Img src={LogoLatest} alt="logo" />
    </Link>
  );
};
