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
      {filteredLectures.map((filteredLecture) => (
        <Lecture
          key={filteredLecture.id}
          text={filteredLecture.text}
          image={filteredLecture.image}
          alt={filteredLecture.alt}
          name={filteredLecture.name}
          url={filteredLecture?.url}
          lectureType={filteredLecture.lectureType}
        />
      ))}
    </S.Flex>
  );
};
