//libraries
import Image from "next/image";
//styles
import * as S from "./Logo.style";
//images
import LogoWhite from "@/public/icons/logo-white.svg";

const Logo = () => {
  return (
    <S.Logo>
      <Image src={LogoWhite} height={75} width={75} />
    </S.Logo>
  );
};

export default Logo;
