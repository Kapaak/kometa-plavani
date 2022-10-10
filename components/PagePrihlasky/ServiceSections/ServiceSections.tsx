//components
import ServiceSection from "./ServiceSection/ServiceSection";
//styles
import * as S from "./ServiceSections.style";
//data
import { data } from "./ServiceSections.data";
//others
import { isEven } from "@/utils/functions";

const ServiceSections = () => {
  return (
    <S.Flex gap="4rem">
      {data.map((d) => (
        <ServiceSection
          key={d.id}
          isEven={isEven(d.id)}
          headline={d.headline}
          text={d.text}
          image={d.image}
          name={d.name}
        />
      ))}
    </S.Flex>
  );
};

export default ServiceSections;
