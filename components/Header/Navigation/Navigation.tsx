//components
import NavLinks from "./NavLinks/NavLinks";
//styles
import * as S from "./Navigation.style";
//data
import { data } from "./Navigation.data";
import { Logo } from "../Logo";
import { Hamburger } from "../Hamburger";

interface Props {
  isActive: boolean;
}

const Navigation = ({ isActive }: Props) => {
  return (
    <S.NavBar>
      <Logo />
      <NavLinks data={data} isActive={isActive} />
      <Hamburger />
    </S.NavBar>
  );
};

export default Navigation;
