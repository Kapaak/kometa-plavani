//libraries
import Link from "next/link";
import { useRouter } from "next/router";
//styles
import * as S from "./NavLink.style";
//interfaces
import { Dropdown, ScrollSections } from "~/domains";
//others
import { scrollTo } from "~/utils";
import { PropsWithChildren } from "react";
import { usePageContext } from "~/contexts";

interface NavLinkProps extends PropsWithChildren {
  scrollTarget?: ScrollSections;
  href: string;
  dropdown?: Array<Dropdown>;
}

const NavLink = ({ scrollTarget, children, href, dropdown }: NavLinkProps) => {
  const { toggleNavigation } = usePageContext();
  const router = useRouter();

  const clickHandler = async (scrollTarget: string, href: string) => {
    const currentRoute = router.route;
    const onDifferentPage = href !== currentRoute;

    if (onDifferentPage) await router.push(href);
    scrollTo(scrollTarget);

    toggleNavigation();
  };
  return (
    //I dont use next/link because I want to change route and then scroll to element
    //if I had next/link I would only change route, the function would not fire
    //maybe push route like /example#school and on example page have useEffect, that would fire
    //Scrolling to #school element on the initial page load (empty dependency array)
    <S.NavLink>
      {scrollTarget ? (
        <a onClick={() => clickHandler(scrollTarget, href)}>{children}</a>
      ) : (
        <Link href={href} onClick={() => toggleNavigation()}>
          {children}
        </Link>
      )}
      {/* {dropdown && (
        <S.Dropdown>
          {dropdown.map((g, i) => (
            <a onClick={() => clickHandler(g.scrollTarget, g.href)} key={i}>
              {g.output}
            </a>
          ))}
        </S.Dropdown>
      )} */}
    </S.NavLink>
  );
};

export default NavLink;
