//components
import FooterSection from "./FooterSection/FooterSection";
import FooterLogos from "./FooterLogos/FooterLogos";
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
          <>
            <FooterLogos />
            {data.map((d: IData, i) => {
              return (
                <FooterSection
                  key={i}
                  headline={d.headline}
                  fragment={d.fragment}
                />
              );
            })}
            <S.Creator>© 2022 Pavel Zapletal</S.Creator>
          </>
        </Flex>
      </MaxWidth>
    </S.Footer>
  );
};

export default Footer;
