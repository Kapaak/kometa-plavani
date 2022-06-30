//components
import FooterSection from "./FooterSection";
//styles
import { Flex, MaxWidth } from "@/styles";
import * as S from "./Footer.style";
//data
import { data } from "./data";
//interfaces
import { IData } from "./Footer.interface";

const Footer = () => {
  return (
    <S.Footer>
      <MaxWidth>
        <Flex gap="4rem">
          {data.map((d: IData, i) => {
            return (
              <FooterSection
                key={i}
                headline={d.headline}
                fragment={d.fragment}
              />
            );
          })}
        </Flex>
      </MaxWidth>
    </S.Footer>
  );
};

export default Footer;
