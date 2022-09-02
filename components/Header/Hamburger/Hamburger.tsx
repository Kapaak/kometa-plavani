//libraries
import { useDispatch, useSelector } from "react-redux";
//styles
import * as S from "./Hamburger.style";
//redux
import { toggleNavigation } from "@redux/slices/navigationSlice";
import { RootState } from "@redux/store";

const Hamburger = () => {
  const dispatch = useDispatch();

  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );

  return (
    <S.Hamburger
      isActive={isActive}
      onClick={() => dispatch(toggleNavigation())}
    >
      <p></p>
      <p></p>
      <p></p>
    </S.Hamburger>
  );
};

export default Hamburger;
