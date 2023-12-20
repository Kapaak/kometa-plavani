//components
import { usePageContext } from "~/contexts";

import { data } from "./Navigation.data";
import NavLinks from "./NavLinks/NavLinks";
import { Hamburger } from "../Hamburger";
import { Logo } from "../Logo";

//styles
import * as S from "./Navigation.style";
//data


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
