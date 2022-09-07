//libraries
import { toggleNavigation } from "@redux/slices/navigationSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { scroller } from "react-scroll";
//styles
import * as S from "./NavLink.style";

interface Props {
  children: React.ReactNode;
  scrollTarget: string;
  href: string;
}

const NavLink = ({ scrollTarget, children, href }: Props) => {
  const dispatch = useDispatch()
  const router = useRouter();

  const clickHandler = async () => {
    const currentRoute = router.route;

    if (href !== currentRoute) await router.push(href);
    scroller.scrollTo(scrollTarget, { smooth: true, offset: -100 });

    dispatch(toggleNavigation())
  };
  return (
    <S.NavLink onClick={clickHandler}>
      <a>{children}</a>
    </S.NavLink>
  );
};

export default NavLink;
