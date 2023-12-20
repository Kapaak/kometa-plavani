import { FilterLectureOptions, LectureTypes } from "~/domains";
import { useLectureSections } from "~/adapters";
import { useCallback, useMemo, useState } from "react";

const filterOptions = [
  {
    id: "1",
    value: FilterLectureOptions.ALL,
    label: "Vše",
  },
  {
    id: "2",
    value: FilterLectureOptions.SCHOOL_KINDERGARDEN,
    label: "Školy a školky",
  },
  {
    id: "3",
    value: FilterLectureOptions.COURSE,
    label: "Odpolední kurzy",
  },
];

export const useFilterLectures = (page?: string) => {
  const [selectedValue, setSelectedValue] = useState(FilterLectureOptions.ALL);
  const { lectures } = useLectureSections();

  const handleSelectedValueChange = useCallback((val: FilterLectureOptions) => {
    setSelectedValue(val);
  }, []);

  const filteredLectures = useMemo(
    () =>
      page &&
      lectures[page].filter((lecture) => {
        switch (selectedValue) {
          case FilterLectureOptions.ALL: {
            return true;
          }
          case FilterLectureOptions.SCHOOL_KINDERGARDEN: {
            if (
              lecture?.lectureType === LectureTypes.SCHOOL ||
              lecture?.lectureType === LectureTypes.KINDERGARDEN
            ) {
              return true;
            }
            return false;
          }
          case FilterLectureOptions.COURSE: {
            if (
              lecture?.lectureType === LectureTypes.ADVANCED ||
              lecture?.lectureType === LectureTypes.BASIC ||
              lecture?.lectureType === LectureTypes.CONDITION ||
              lecture?.lectureType === LectureTypes.ADULT
            ) {
              return true;
            }
            return false;
          }
          default: {
            return false;
          }
        }
      }),
    [lectures, page, selectedValue]
  );

  return {
    filteredLectures,
    selectedValue,
    onSelectedValueChange: handleSelectedValueChange,
    filterOptions,
  };
};
