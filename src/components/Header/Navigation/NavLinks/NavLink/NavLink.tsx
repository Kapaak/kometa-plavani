import Link from "next/link";
import { useRouter } from "next/router";

import { usePageContext } from "~/contexts/PageContext";
import { Dropdown, ScrollSections } from "~/domains";
import { scrollTo } from "~/utils";

import * as S from "./NavLink.style";

interface NavLinkProps {
  children: React.ReactNode;
  scrollTarget?: ScrollSections;
  href: string;
  dropdown?: Array<Dropdown>;
}

export function NavLink({
  scrollTarget,
  children,
  href,
  dropdown,
}: NavLinkProps) {
  const { toggleNavigation } = usePageContext();

  const router = useRouter();

  const clickHandler = async (scrollTarget: string, href: string) => {
    const currentRoute = router.route;
    const onDifferentPage = href !== currentRoute;

    if (onDifferentPage) await router.push(href);
    scrollTo(scrollTarget);

    toggleNavigation(false);
  };

  if (scrollTarget)
    return (
      <S.NavLink onClick={() => clickHandler(scrollTarget, href)}>
        <button>{children}</button>
      </S.NavLink>
    );

  return (
    //I dont use next/link because I want to change route and then scroll to element
    //if I had next/link I would only change route, the function would not fire
    //maybe push route like /example#school and on example page have useEffect, that would fire
    //Scrolling to #school element on the initial page load (empty dependency array)
    <S.NavLink light>
      <Link href={href} onClick={() => toggleNavigation(false)} passHref>
        {children}
      </Link>
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
}

export default NavLink;
