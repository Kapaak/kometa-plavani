//styles
import { Flex, MaxWidth } from "@/styles";
import * as S from "./ServiceSection.style";
//components
import Service from "./Service";
//texts
import { data } from "./data";

const ServiceSection = () => {
  return (
    <S.ServiceSection>
      <MaxWidth>
        <Flex gap="var(--gap)">
          {data.map((d, i) => (
            <Service
              fullText={d.fullText}
              headline={d.headline}
              smallText={d.smallText}
              image={d.image}
              key={i}
            />
          ))}
        </Flex>
      </MaxWidth>
    </S.ServiceSection>
  );
};

export default ServiceSection;
