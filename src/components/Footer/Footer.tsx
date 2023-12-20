//components
import { data } from "./Footer.data";
import FooterEnding from "./FooterEnding/FooterEnding";
import FooterInitial from "./FooterInital/FooterInitial";
import FooterSections from "./FooterSections/FooterSections";

//styles
import * as S from "./Footer.style";

//data

const Footer = () => {
  return (
    <S.Footer>
      <S.MaxWidth>
        <S.Flex gap="4rem">
          <FooterInitial />
          <FooterSections data={data} />
          <FooterEnding />
        </S.Flex>
      </S.MaxWidth>
    </S.Footer>
  );
};

export default Footer;
