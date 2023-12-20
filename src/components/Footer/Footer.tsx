import { data } from "./Footer.data";
import * as S from "./Footer.style";
import FooterEnding from "./FooterEnding/FooterEnding";
import FooterInitial from "./FooterInital/FooterInitial";
import FooterSections from "./FooterSections/FooterSections";

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
