//libraries
import { useSelector } from "react-redux";
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
			<S.NavLink>Domů</S.NavLink>
			<S.NavLink>O nás</S.NavLink>
			<S.NavLink>Přihlášky</S.NavLink>
			<S.NavLink>Aktuality</S.NavLink>
			<S.NavLink>Základní informace</S.NavLink>
			<S.NavLink>Trenéři</S.NavLink>
			<S.NavLink>Dokumenty</S.NavLink>
			<S.NavLink>Kontakt</S.NavLink>
		</S.NavLinks>
	);
};

export default NavItems;
