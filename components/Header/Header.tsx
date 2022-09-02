//libraries
import { useSelector } from "react-redux";
//styles
import * as S from "./Header.style";
//components
import Hamburger from "./Hamburger/Hamburger";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
//redux
import { RootState } from "@redux/store";

const Header = () => {
  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );

  return (
    <S.Header>
      <Logo />
      <Navigation isActive={isActive} />
      <Hamburger />
    </S.Header>
  );
};

export default Header;
