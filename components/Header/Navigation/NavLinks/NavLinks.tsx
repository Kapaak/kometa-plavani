//libraries
import { useSelector } from "react-redux";
//components
import NavLink from "./NavLink/NavLink";
//styles
import * as S from "./NavLinks.style";
//interfaces
import { NavLink as NavLinkType } from "@/domains";
//redux
import { RootState } from "@/redux/store";
import { Button } from "@/components/Shared";

import { Flex, Hidden } from "@/styles";
import Link from "next/link";
import Image from "next/image";
//images
import FacebookInvertIcon from "@/public/icons/facebook-invert.svg";
import InstagramInvertIcon from "@/public/icons/instagram-invert.svg";

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
