import { useRouter } from "next/router";

import { useFilterLectures } from "~/hooks";
import { MaxWidth, Space } from "~/styles";
import { getPageRouteTranslation } from "~/utils";

import { IndividualCourse, Service } from "./components";

import * as S from "./ServiceSection.style";

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
              tag={filteredLecture.tag}
              price={filteredLecture.price ?? ""}
            />
          ))}
        </S.Services>
        <Space />
        <IndividualCourse />
      </MaxWidth>
    </S.ServiceSection>
  );
};

export default ServiceSection;
