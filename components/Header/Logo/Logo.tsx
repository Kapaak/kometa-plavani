//libraries
import Image from "next/image";
//styles
import * as S from "./Logo.style";
//images
import LogoWhite from "@/public/icons/logo-white.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <S.Logo>
        <Image src={LogoWhite} height={75} width={75} />
      </S.Logo>
    </Link>
  );
};

export default Logo;
