//libraries
import { useSelector } from "react-redux";
//styles
import * as S from "./NavLinks.style";
//redux
import { RootState } from "@redux/store";
import NavLink from "./NavLink/NavLink";

const NavItems = () => {
  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );

  return (
    <S.NavLinks isActive={isActive}>
      <NavLink href="/">Domů</NavLink>
      <NavLink href="#o-nas">O nás</NavLink>
      <NavLink href="#prihlasky">Přihlášky</NavLink>
      <NavLink href="#aktuality">Aktuality</NavLink>
      <NavLink href="#zakladni-info">Základní informace</NavLink>
      <NavLink href="#treneri">Trenéři</NavLink>
      <NavLink href="#dokumenty">Dokumenty</NavLink>
      <NavLink href="#kontakt">Kontakt</NavLink>
    </S.NavLinks>
  );
};

export default NavItems;
