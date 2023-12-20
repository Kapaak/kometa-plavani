//styles
import * as S from "./Header.style";
//components
import Navigation from "./Navigation/Navigation";
import { DiscountLabel } from "../DiscountLabel";
import { SanityInfoBar } from "~/domains";
import { usePageContext } from "~/contexts";

interface HeaderProps {
  infoBar?: SanityInfoBar;
}

const Header = ({ infoBar }: HeaderProps) => {
  const { isNavigationOpen, isShadowActive } = usePageContext();

  return (
    <S.Header withShadow={isShadowActive}>
      {infoBar && (
        <DiscountLabel title={infoBar?.title} description={infoBar?.text} />
      )}
      <Navigation isActive={isNavigationOpen} />
    </S.Header>
  );
};

export default Header;
