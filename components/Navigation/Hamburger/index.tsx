//libraries
import { useDispatch } from "react-redux";
//styles
import * as S from "./Hamburger.style";
//redux
import { toggleNavigation } from "@redux/slices/navigationSlice";

const Hamburger = () => {
	const dispatch = useDispatch();

	return (
		<S.Hamburger onClick={() => dispatch(toggleNavigation())}>
			<p></p>
			<p></p>
			<p></p>
		</S.Hamburger>
	);
};

export default Hamburger;
