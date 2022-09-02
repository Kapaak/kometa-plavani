//libraries
import { useSelector } from "react-redux";
//styles
import * as S from "./Header.style";
//components
import Hamburger from "./Hamburger/Hamburger";
import NavLinks from "./NavLinks/NavLinks";
//redux
import { RootState } from "@redux/store";
import Logo from "./Logo/Logo";

const Header = () => {
  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );

  return (
    <S.Header>
      <Logo />
      <S.Navigation isActive={isActive}>
        <S.Flex direction="row" justify="space-between">
          <NavLinks />
        </S.Flex>
      </S.Navigation>
      <Hamburger />
    </S.Header>
  );
};

//*TODO -> header by mel obalovat navigation a logo
{
  /* <header>
	<div class="logo"></div>
	<Navigation/>
</header> */
}

export default Header;
