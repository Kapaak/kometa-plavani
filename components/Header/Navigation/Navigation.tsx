//components
import NavLinks from "./NavLinks/NavLinks";
//styles
import * as S from "./Navigation.style";
//data
import { data } from "./Navigation.data";

interface Props {
  isActive: boolean;
}

const Navigation = ({ isActive }: Props) => {
  return (
    <S.Navigation isActive={isActive}>
      <S.Flex direction="row" justify="end">
        <NavLinks data={data} />
      </S.Flex>
    </S.Navigation>
  );
};

export default Navigation;
