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
import { Hidden } from "@/styles";
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";

import { Flex, Hidden } from "@/styles";
import Link from "next/link";
import Image from "next/image";
//images
import FacebookInvertIcon from "@/public/icons/facebook-invert.svg";
import InstagramInvertIcon from "@/public/icons/instagram-invert.svg";

interface Props {
  data: NavLinkType[];
}

const NavItems = ({ data }: Props) => {
  const isActive = useSelector(
    (state: RootState) => state.navigation.isNavActive
  );

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
        <Flex
          direction="row"
          align="center"
          gap="3rem"
          style={{ marginTop: ".7rem" }}
        >
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
        </Flex>
      </Hidden>
      <Hidden up="notebook">
        <NavLink href="/prihlasky">Přihlášky</NavLink>
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
