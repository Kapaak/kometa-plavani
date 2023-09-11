//components
import { Lecture } from "./Lecture";
//styles
import * as S from "./LecturesSection.style";
//data
import { Filter } from "@/shared";
import { useFilterLectures } from "@/hooks";
import { FilterLectureOptions } from "@/domains";
import { useRouter } from "next/router";
import { getPageRouteTranslation } from "@/utils";

export const LecturesSection = () => {
  const { route } = useRouter();

  const {
    filteredLectures,
    selectedValue,
    filterOptions,
    onSelectedValueChange,
  } = useFilterLectures(getPageRouteTranslation(route));

  if (!filteredLectures) return null;

  return (
    <S.Flex gap="4rem">
      <Filter<FilterLectureOptions>
        title="Filtr"
        filterOptions={filterOptions}
        selectedValue={selectedValue}
        onChange={(val) => onSelectedValueChange(val)}
      />
      {filteredLectures.map((d) => (
        <Lecture
          key={d.id}
          headline={d.headline}
          text={d.text}
          image={d.image}
          alt={d.alt}
          name={d.name}
          url={d?.url}
          price={d?.price}
          time={d?.time}
          lectureType={d.lectureType}
          pricingDocument={d?.pricingDocument}
        />
      ))}
    </S.Flex>
  );
};
