import KometaLogo from "~/public/icons/kometa-blue.svg";

import Link from "next/link";

import * as S from "./Logo.style";

export const Logo = () => {
  return (
    <Link href="/" aria-label="logo této stránky" passHref>
      <S.Img src={KometaLogo} alt="logo" />
    </Link>
  );
};
