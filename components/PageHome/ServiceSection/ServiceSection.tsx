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
        <S.Services gap="4rem">
          {filteredLectures.map((filteredLecture, index) => (
            <Service
              headline={filteredLecture?.headline}
              text={filteredLecture.text}
              image={filteredLecture.image}
              name={filteredLecture.name}
              key={`${index}_${filteredLecture.name}`}
              alt={filteredLecture.alt}
            />
          ))}
        </S.Services>
      </MaxWidth>
    </S.ServiceSection>
  );
};

export default ServiceSection;
