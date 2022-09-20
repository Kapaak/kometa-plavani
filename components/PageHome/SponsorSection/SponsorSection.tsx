//styles
import * as S from "./SponsorSection.style";
import Sponsor from "./Sponsor/Sponsor";
//data
import { data } from "./SponsorSection.data";

const SponsorSection = () => {
  return (
    <S.SponsorSection name="sponsor">
      <S.Flex direction="row" align="center" gap="2rem">
        {data.map((d, i) => (
          <Sponsor image={d.image} href={d.href} key={i} />
        ))}
      </S.Flex>
    </S.SponsorSection>
  );
};

export default SponsorSection;
