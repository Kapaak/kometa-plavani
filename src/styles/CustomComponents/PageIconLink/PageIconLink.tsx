import { ReactNode } from "react";

import * as S from "./PageIconLink.style";

interface PageIconLinkProps {
  icon: ReactNode;
  label: string;
  href: string;
}

export function PageIconLink({ icon, label, href }: PageIconLinkProps) {
  return (
    <S.PageIconLink href={href}>
      {icon}
      <S.Label variant="dark" bold>
        {label}
      </S.Label>
    </S.PageIconLink>
  );
}
