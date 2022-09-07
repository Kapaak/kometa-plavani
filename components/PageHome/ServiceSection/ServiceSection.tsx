//styles
import { MaxWidth } from "@/styles";
import * as S from "./ServiceSection.style";
//components
import Service from "./Service/Service";
//texts
import { data } from "./data";

const ServiceSection = () => {
  return (
    <S.ServiceSection>
      <MaxWidth>
        <S.Flex gap="var(--gap)">
          {data.map((d, i) => (
            <Service
              fullText={d.fullText}
              headline={d.headline}
              smallText={d.smallText}
              image={d.image}
              scrollTarget={d.scrollTarget}
              key={i}
            />
          ))}
        </S.Flex>
      </MaxWidth>
    </S.ServiceSection>
  );
};

export default ServiceSection;
