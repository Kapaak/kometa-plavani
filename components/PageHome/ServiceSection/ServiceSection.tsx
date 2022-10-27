//styles
import { MaxWidth } from "@/styles";
import * as S from "./ServiceSection.style";
//components
import Service from "./Service/Service";
//data
import { data } from "./ServiceSection.data";

const ServiceSection = () => {
  return (
    <S.ServiceSection>
      <MaxWidth>
        <S.Flex gap="4rem">
          {data.map((d, i) => (
            <Service
              headline={d.headline}
              text={d.text}
              image={d.image}
              scrollTarget={d.scrollTarget}
              key={i}
              alt={d.alt}
            />
          ))}
        </S.Flex>
      </MaxWidth>
    </S.ServiceSection>
  );
};

export default ServiceSection;
