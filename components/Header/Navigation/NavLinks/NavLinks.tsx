//libraries
import { useSelector } from "react-redux";
//components
import NavLink from "./NavLink/NavLink";
//styles
import * as S from "./NavLinks.style";
//redux
import { RootState } from "@redux/store";

const NavItems = () => {
  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );

  return (
    <S.NavLinks isActive={isActive}>
      <NavLink href="/" scrollTarget="home">
        Domů
      </NavLink>
      <NavLink href="/" scrollTarget="about">
        O nás
      </NavLink>
      <NavLink href="/prihlasky" scrollTarget="application">
        Přihlášky
      </NavLink>
      {/* <NavLink href="#aktuality">Aktuality</NavLink>
      <NavLink href="#zakladni-info">Základní informace</NavLink>
      <NavLink href="#treneri">Trenéři</NavLink> 
      <NavLink href="#dokumenty">Dokumenty</NavLink>
      <NavLink href="/" scrollTarget="contact">Kontakt</NavLink>*/}
    </S.NavLinks>
  );
};

export default NavItems;
