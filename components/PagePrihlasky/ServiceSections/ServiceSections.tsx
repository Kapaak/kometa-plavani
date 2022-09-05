import { StaticImageData } from "next/image";
import ServiceSection from "./ServiceSection/ServiceSection";

type TData = {
  id: number;
  headline: string;
  fullText: string;
  image: StaticImageData;
};

interface Props {
  data: TData[];
}

const ServiceSections = ({ data }: Props) => {
  return (
    <div>
      {data.map((d) => (
        <ServiceSection
          key={d!.id}
          headline={d.headline}
          fullText={d.fullText}
          image={d.image}
        />
      ))}
    </div>
  );
};

export default ServiceSections;
