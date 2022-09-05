//libraries
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//styles
import * as S from "./Header.style";
//components
import Hamburger from "./Hamburger/Hamburger";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
//redux
import { RootState } from "@redux/store";

const Header = () => {
  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    const currentRoute = router.route;
    if (currentRoute === "/") setIsHomePage(true);
    else setIsHomePage(false);
  }, [router.route]);

  return (
    <S.Header isHomePage={isHomePage}>
      <Logo />
      <Navigation isActive={isActive} />
      <Hamburger />
    </S.Header>
  );
};

export default Header;
