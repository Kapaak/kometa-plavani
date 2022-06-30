//components
import FooterSection from "./FooterSection";
//styles
import { Flex, MaxWidth } from "@/styles";
import * as S from "./Footer.style";
//data
import { data } from "./data";

const Footer = () => {
  return (
    <S.Footer>
      <MaxWidth>
        <Flex gap="4rem">
          {data.map((d: any, i) => {
            return (
              <FooterSection key={i} headline={d.headline} textArray={d.info} />
            );
          })}
        </Flex>
      </MaxWidth>
    </S.Footer>
  );
};

export default Footer;
