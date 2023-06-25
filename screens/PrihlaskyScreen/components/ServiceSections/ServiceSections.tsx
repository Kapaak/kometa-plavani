//components
import { ServiceSection } from "./ServiceSection";
//styles
import * as S from "./ServiceSections.style";
//data
import { data } from "./ServiceSections.data";
//others
import { isEven } from "@/utils";

export const ServiceSections = () => {
  return (
    <S.Flex gap="4rem">
      {data.map((d) => (
        <ServiceSection
          key={d.id}
          isEven={isEven(d.id)}
          headline={d.headline}
          text={d.text}
          image={d.image}
          alt={d.alt}
          name={d.name}
          url={d?.url}
          price={d?.price}
          time={d?.time}
          priceListHref={d?.priceListHref}
        />
      ))}
    </S.Flex>
  );
};
