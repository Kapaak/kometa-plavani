//components
import NavLinks from "./NavLinks/NavLinks";
//styles
import * as S from "./Navigation.style";

interface Props {
  isActive: boolean;
}

const Navigation = ({ isActive }: Props) => {
  return (
    <S.Navigation isActive={isActive}>
      <S.Flex direction="row" justify="space-between">
        <NavLinks />
      </S.Flex>
    </S.Navigation>
  );
};

export default Navigation;
