import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
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
import { useGoogleSheet, useSanityApplication } from "~/hooks";

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
  course,
  lectureType,
  googleSheetId,
}: PropsWithChildren<{
  googleSheetId: string;
  course: SanityCourse;
  lectureType: LectureTypes;
}>) => {
  const { lectureDaysTimesCapacity: lectureDaysTimesCapacity2 } =
    useSanityApplication(course);

  const { googleSheet, isError, isLoading } = useGoogleSheet({
    googleSheetId,
    lectureType,
  });

  const lectures: CompleteLecture = _.mergeWith(
    lectureDaysTimesCapacity2,
    googleSheet
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
    [lectures, lectureType, googleSheet]
  );
  return (
    <CourseDetailContext.Provider
      value={{
        getAvailableLectureOptions,
        isLoading,
        isError,
        lecturePricingOptions: course?.lectureFrequencyPricingOptions,
      }}
    >
      {children}
    </CourseDetailContext.Provider>
  );
};

export function useCourseDetailContext() {
  return useContext(CourseDetailContext);
}
