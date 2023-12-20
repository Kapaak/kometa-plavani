import FacebookInvertIcon from "~/public/icons/facebook-invert.svg";
import InstagramInvertIcon from "~/public/icons/instagram-invert.svg";

import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/Shared";
import { NavLink as NavLinkType } from "~/domains";
import { Hidden } from "~/styles";

import NavLink from "./NavLink/NavLink";

import * as S from "./NavLinks.style";

interface Props {
  data: NavLinkType[];
  isActive?: boolean;
}

const NavItems = ({ data, isActive = false }: Props) => {
  return (
    <S.NavLinks isActive={isActive}>
      {data.map((d, i) => (
        <NavLink
          key={i}
          href={d.href}
          scrollTarget={d?.scrollTarget}
          dropdown={d.dropdown || undefined}
        >
          {d.output}
        </NavLink>
      ))}
      <Hidden up="notebook">
        <NavLink href="/prihlasky">Přihlášky</NavLink>
      </Hidden>
      <Hidden down="desktop">
        <S.IconsWrapper>
          <Link href="https://www.facebook.com/kometaplavani">
            <Image
              src={FacebookInvertIcon}
              width={22}
              height={22}
              alt="facebook"
            />
          </Link>
          <Link href="https://www.instagram.com/kometaplavani">
            <Image
              src={InstagramInvertIcon}
              width={22}
              height={22}
              alt="instagram"
            />
          </Link>
        </S.IconsWrapper>
      </Hidden>
      <Hidden down="notebook">
        <NavLink href="/prihlasky">
          <Button variant="filled" size="small">
            Přihlášky
          </Button>
        </NavLink>
      </Hidden>
    </S.NavLinks>
  );
};

export default NavItems;