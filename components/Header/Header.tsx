//libraries
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//styles
import * as S from "./Header.style";
//components
import Hamburger from "./Hamburger/Hamburger";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
//redux
import { RootState } from "@redux/store";
import { setNavbarHeight } from "@redux/slices/navigationSlice";

const Header = () => {
  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );

  const dispatch = useDispatch();
  const ref = useRef(null);

  const getElementHeight = () => {
    //@ts-ignore
    return ref?.current!.offsetHeight;
  };

  const setNavigationHeight = () => {
    dispatch(setNavbarHeight(getElementHeight()));
  };

  useEffect(() => {
    setNavigationHeight();
    window.addEventListener("resize", setNavigationHeight);

    return () => window.removeEventListener("resize", setNavigationHeight);
  }, []);

  return (
    <S.Header onClick={setNavigationHeight} ref={ref}>
      <Logo />
      <Navigation isActive={isActive} />
      <Hamburger />
    </S.Header>
  );
};

export default Header;
