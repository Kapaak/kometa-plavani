//components
import { usePageContext } from "~/contexts";

import { Hamburger } from "../Hamburger";
import { Logo } from "../Logo";
import NavLinks from "./NavLinks/NavLinks";
import { data } from "./Navigation.data";

import * as S from "./Navigation.style";

interface Props {
  isActive: boolean;
}

const Navigation = ({ isActive }: Props) => {
  const { toggleNavigation, isNavigationOpen } = usePageContext();

  return (
    <S.Navigation>
      <Logo />
      <NavLinks data={data} isActive={isActive} />
      <Hamburger isOpen={isNavigationOpen} onChange={toggleNavigation} />
    </S.Navigation>
  );
};

export default Navigation;
