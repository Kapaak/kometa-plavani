//libraries
import Image from "next/image";
import { useSelector } from "react-redux";
//styles
import * as S from "./Navigation.style";
import LogoWhite from "@/public/icons/logo-white.svg";
import { Flex } from "@/styles";
//components
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";
//redux
import { RootState } from "@redux/store";

const Navigation = () => {
  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );

  return (
    <S.Navigation isActive={isActive}>
      <Flex direction="row" justify="space-between">
        <S.ImageContainer>
          <Image src={LogoWhite} height={75} width={75} />
        </S.ImageContainer>
        <NavLinks />
        <Hamburger />
      </Flex>
    </S.Navigation>
  );
};

//*TODO -> header by mel obalovat navigation a logo
{
  /* <header>
	<div class="logo"></div>
	<Navigation/>
</header> */
}

export default Navigation;
