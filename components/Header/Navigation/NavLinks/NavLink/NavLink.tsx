//libraries
import { toggleNavigation } from "@redux/slices/navigationSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
//styles
import * as S from "./NavLink.style";
//others
import { scrollTo } from "@/components/utils/functions";
interface Props {
  children: React.ReactNode;
  scrollTarget: string;
  href: string;
}

const NavLink = ({ scrollTarget, children, href }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const clickHandler = async () => {
    const currentRoute = router.route;
    const onDifferentPage = href !== currentRoute;

    if (onDifferentPage) await router.push(href);
    scrollTo(scrollTarget);

    dispatch(toggleNavigation());
  };
  return (
    <S.NavLink onClick={clickHandler}>
      <a>{children}</a>
    </S.NavLink>
  );
};

export default NavLink;
