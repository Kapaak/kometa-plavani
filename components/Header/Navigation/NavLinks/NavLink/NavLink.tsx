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
  dropdown?: Array<TDropdown>;
}

type TDropdown = {
  href: string;
  scrollTarget: string;
  output: string;
};

const NavLink = ({ scrollTarget, children, href, dropdown }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const clickHandler = async (scrollTarget: string, href: string) => {
    const currentRoute = router.route;
    const onDifferentPage = href !== currentRoute;

    if (onDifferentPage) await router.push(href);
    scrollTo(scrollTarget);

    dispatch(toggleNavigation());
  };
  return (
    //I dont use next/link because I want to change route and then scroll to element
    //if I had next/link I would only change route, the function would not fire
    //maybe push route like /example#school and on example page have useEffect, that would fire
    //Scrolling to #school element on the initial page load (empty dependency array)
    <S.NavLink>
      <a onClick={() => clickHandler(scrollTarget, href)}>{children}</a>
      {dropdown && (
        <S.Dropdown>
          {dropdown.map((g, i) => (
            <a onClick={() => clickHandler(g.scrollTarget, g.href)} key={i}>
              {g.output}
            </a>
          ))}
        </S.Dropdown>
      )}
    </S.NavLink>
  );
};

export default NavLink;
