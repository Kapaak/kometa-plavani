//libraries
import Marquee from "react-fast-marquee";

//styles
import Sponsor from "./Sponsor/Sponsor";
//data
import { data } from "./SponsorSection.data";

import * as S from "./SponsorSection.style";

const SponsorSection = () => {
  return (
    <S.SponsorSection name="sponsor">
      <Marquee pauseOnHover gradientColor={[248, 248, 248]}>
        <S.Flex direction="row" align="center" gap="5rem">
          {data.map((d, i) => (
            <Sponsor image={d.image} href={d.href} name={d.name} key={i} />
          ))}
        </S.Flex>
      </Marquee>
    </S.SponsorSection>
  );
};

export default SponsorSection;
