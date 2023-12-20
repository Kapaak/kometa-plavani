//components
import NavLinks from "./NavLinks/NavLinks";
//styles
import * as S from "./Navigation.style";
//data
import { data } from "./Navigation.data";
import { Logo } from "../Logo";
import { Hamburger } from "../Hamburger";
import { usePageContext } from "~/contexts";

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
