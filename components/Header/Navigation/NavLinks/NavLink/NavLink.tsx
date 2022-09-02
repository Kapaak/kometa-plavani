//libraries
import Link from "next/link";
//styles
import * as S from "./NavLink.style";

interface Props {
  children: React.ReactNode;
  href: string;
}

const NavLink = ({ children, href }: Props) => {
  return (
    <S.NavLink>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </S.NavLink>
  );
};

export default NavLink;
