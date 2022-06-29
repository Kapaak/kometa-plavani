//styles
import { Flex, MaxWidth } from "@/styles";
import * as S from "./ServiceSection.style";
//components
import Service from "./Service";
//texts
import { texts } from "./texts";

const ServiceSection = () => {
  return (
    <S.ServiceSection>
      <MaxWidth>
        <Flex gap="var(--gap)">
          {texts.map((text, i) => (
            <Service
              fullText={text.fullText}
              headline={text.headline}
              smallText={text.smallText}
              image={text.image}
              key={i}
            />
          ))}
        </Flex>
      </MaxWidth>
    </S.ServiceSection>
  );
};

export default ServiceSection;
