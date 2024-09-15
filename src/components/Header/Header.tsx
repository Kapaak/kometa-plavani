import { usePageContext } from "~/contexts";
import { SanityInfoBar } from "~/domains";

import { InformationBar } from "../DiscountLabel";
import Navigation from "./Navigation/Navigation";

import * as S from "./Header.style";

interface HeaderProps {
  infoBar?: SanityInfoBar;
}

const Header = ({ infoBar }: HeaderProps) => {
  const { isNavigationOpen, isShadowActive } = usePageContext();

  return (
    <S.Header withShadow={isShadowActive}>
      {infoBar && (
        <InformationBar title={infoBar?.title} description={infoBar?.text} />
      )}
      <Navigation isActive={isNavigationOpen} />
    </S.Header>
  );
};

export default Header;
