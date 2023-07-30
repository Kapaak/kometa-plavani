//styles
import { MaxWidth } from "@/styles";
import * as S from "./ServiceSection.style";
//components
import Service from "./Service/Service";
//data
import { useFilterLectures } from "@/hooks";
import { useRouter } from "next/router";
import { getPageRouteTranslation } from "@/utils";

const ServiceSection = () => {
  const { route } = useRouter();

  const { filteredLectures } = useFilterLectures(
    getPageRouteTranslation(route)
  );

  if (!filteredLectures) return null;

  return (
    <S.ServiceSection name="service">
      <MaxWidth>
        <S.Flex gap="4rem">
          {filteredLectures.map((d, i) => (
            <Service
              headline={d.headline}
              text={d.text}
              image={d.image}
              name={d.name}
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
