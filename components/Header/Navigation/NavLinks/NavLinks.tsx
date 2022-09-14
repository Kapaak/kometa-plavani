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

  const appGroup = [
    {
      href: "/prihlasky/skolky",
      output: "školky",
      scrollTarget: "skolky",
    },
    {
      href: "/prihlasky/skoly",
      output: "školy",
      scrollTarget: "skoly",
    },
    {
      href: "/prihlasky/kurzy",
      output: "kurzy",
      scrollTarget: "kurzy",
    },
  ];

  return (
    <S.NavLinks isActive={isActive}>
      <NavLink href="/" scrollTarget="home">
        Domů
      </NavLink>
      <NavLink href="/" scrollTarget="about">
        O nás
      </NavLink>
      <NavLink href="/prihlasky" scrollTarget="application" group={appGroup}>
        Přihlášky
      </NavLink>
      <NavLink href="/" scrollTarget="contact">
        Kontakt
      </NavLink>

      {/* <NavLink href="#aktuality">Aktuality</NavLink>
      <NavLink href="#zakladni-info">Základní informace</NavLink>
      <NavLink href="#treneri">Trenéři</NavLink> 
      <NavLink href="#dokumenty">Dokumenty</NavLink>
      */}
    </S.NavLinks>
  );
};

export default NavItems;
