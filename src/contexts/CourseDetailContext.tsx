import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";

import _ from "lodash";

import {
  GoogleSheets,
  LectureDaysTimesCapacity,
  LectureTypes,
  SanityCourse,
  SanityLectureFrequencyPricing,
  WeekDaysNew,
  convertAbbrToWeekDaysDiacritics,
  convertWeekDaysToAbbr,
} from "~/domains";
import { useGoogleSheets, useSanityApplications } from "~/hooks";

type CompleteLecture = LectureDaysTimesCapacity & GoogleSheets;

const CourseDetailContext = createContext<{
  lectures?: CompleteLecture;
  getAvailableLectureOptions: (
    semester?: 1 | 2,
    applicationsOffset?: number
  ) => { label: string; options: { label: string; value: string }[] }[];
  lecturePricingOptions?: SanityLectureFrequencyPricing[];
  isLoading: boolean;
  isError: boolean;
}>({
  lectures: {},
  getAvailableLectureOptions: () => [],
  lecturePricingOptions: [],
  isLoading: false,
  isError: false,
});

export const CourseDetailContextProvider = ({
  children,
  courses,
  lectureType,
}: PropsWithChildren<{
  courses: SanityCourse[];
  lectureType: LectureTypes;
}>) => {
  const { lectureDaysTimesCapacity } = useSanityApplications(courses);

  const { googleSheets, isError, isLoading } = useGoogleSheets();

  //TODO: brat data jen pro specifickej google-sheet a ne pro vsechny, to by hodne usetrilo
  const lectures: CompleteLecture = _.mergeWith(
    lectureDaysTimesCapacity,
    googleSheets
  );

  const lecturePricingOptions = useMemo(
    () =>
      courses?.find((course) => course?.value === lectureType)
        ?.lectureFrequencyPricingOptions,
    [courses, lectureType]
  );

  const getAvailableLectureOptions = useCallback(
    (semester = 1, createdApplications = 0) => {
      return _.values(
        _.mapValues(lectures?.[lectureType]?.lectures, (lecture, day) => {
          const options: { label: string; value: string; discount: number }[] =
            [];
          let label = "";

          _.forEach(lecture, (lectureTime, timeKey) => {
            const convertedDay = convertWeekDaysToAbbr(day as WeekDaysNew);

            const { [semester]: semesterData } = lectureTime;
            if (!semesterData?.max) return false;

            const selectedTime = lectures?.[lectureType]?.lectureTimes?.find(
              (time) => time.id === Number(timeKey)
            );

            label = convertAbbrToWeekDaysDiacritics(convertedDay);

            if (
              semesterData.aplications + createdApplications <=
              semesterData.max
            ) {
              options.push({
                label: `${selectedTime?.from} - ${selectedTime?.to}`,
                value: `${convertedDay}_${semesterData.lectureTimeId}`,
                discount: semesterData?.discount ?? 0,
              });
            }
          });

          return { label, options };
        })
      );
    },
    //TODO: kdyz bylo bez googleSheets, tak sanity fungovalo, pak ale prestalo fungovat restrikce na plny terminy
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lectures, lectureType, googleSheets]
  );
  return (
    <CourseDetailContext.Provider
      value={{
        getAvailableLectureOptions,
        isLoading,
        isError,
        lecturePricingOptions,
      }}
    >
      {children}
    </CourseDetailContext.Provider>
  );
};

export function useCourseDetailContext() {
  return useContext(CourseDetailContext);
}
