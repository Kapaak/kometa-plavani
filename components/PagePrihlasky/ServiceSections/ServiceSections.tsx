//libraries
import { StaticImageData } from "next/image";
//components
import ServiceSection from "./ServiceSection/ServiceSection";
//styles
import * as S from "./ServiceSections.style";

type TData = {
  id: number;
  headline: string;
  fullText: string;
  image: StaticImageData;
  name: string;
};

interface Props {
  data: TData[];
}

const ServiceSections = ({ data }: Props) => {
  const isEven = (id: number) => {
    return id % 2 === 0;
  };
  return (
    <S.Flex gap="4rem">
      {data.map((d) => (
        <ServiceSection
          key={d.id}
          isEven={isEven(d.id)}
          headline={d.headline}
          fullText={d.fullText}
          image={d.image}
          name={d.name}
        />
      ))}
    </S.Flex>
  );
};

export default ServiceSections;
