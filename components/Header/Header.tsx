//libraries
import { useSelector } from "react-redux";
//styles
import * as S from "./Header.style";
//components
import Hamburger from "./Hamburger/Hamburger";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
//redux
import { RootState } from "@/redux/store";
import { Flex } from "@/styles";
import { DiscountLabel } from "../DiscountLabel";
import { SanityInfoBar } from "@/domains";

interface HeaderProps {
  infoBar?: SanityInfoBar;
}

const Header = ({ infoBar }: HeaderProps) => {
  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );

  const withShadow = useSelector(
    (state: RootState) => state.navigation.withShadow
  );

  return (
    <S.Header withShadow={withShadow}>
      {infoBar && (
        <DiscountLabel title={infoBar?.title} description={infoBar?.text} />
      )}
      <S.MaxWidth>
        <Flex direction="row" align="center" justify="space-between">
          <Logo />
          <Navigation isActive={isActive} />
          <Hamburger />
        </Flex>
      </S.MaxWidth>
    </S.Header>
  );
};

export default Header;
