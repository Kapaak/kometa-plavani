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
  WeekDaysNew,
  convertAbbrToWeekDaysDiacritics,
  convertWeekDaysToAbbr,
} from "~/domains";
import { useGoogleSheets, useSanityApplications } from "~/hooks";

type CompleteLecture = LectureDaysTimesCapacity & GoogleSheets;

const LecturesContext = createContext<{
  lectures?: CompleteLecture;
  getAvailableLectureOptions: (
    lectureType: LectureTypes,
    semester?: 1 | 2,
    applicationsOffset?: number
  ) => { label: string; options: { label: string; value: string }[] }[];
  isLoading: boolean;
  isError: boolean;
}>({
  lectures: {},
  getAvailableLectureOptions: () => [],
  isLoading: false,
  isError: false,
});

export const LecturesContextProvider = ({
  children,
  courses,
}: PropsWithChildren<{ courses: SanityCourse[] }>) => {
  const { lectureDaysTimesCapacity } = useSanityApplications(courses);

  const { googleSheets, isError, isLoading } = useGoogleSheets();

  const lectures: CompleteLecture = _.mergeWith(
    lectureDaysTimesCapacity,
    googleSheets
  );

  const getAvailableLectureOptions = useCallback(
    (lectureType: string, semester = 1, applicationsOffset = 0) => {
      return _.values(
        _.mapValues(lectures?.[lectureType]?.lectures, (lecture, day) => {
          const options: { label: string; value: string }[] = [];
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
              semesterData.aplications + applicationsOffset <=
              semesterData.max
            ) {
              options.push({
                label: `${selectedTime?.from} - ${selectedTime?.to}`,
                value: `${convertedDay}_${semesterData.lectureTimeId}`,
              });
            }
          });

          return { label, options };
        })
      );
    },
    // eslint-disable-next-line react-~/hooksexhaustive-deps
    [lectures, googleSheets]
  );
  return (
    <LecturesContext.Provider
      value={{
        lectures,
        getAvailableLectureOptions,
        isLoading,
        isError,
      }}
    >
      {children}
    </LecturesContext.Provider>
  );
};

export function useLecturesContext() {
  return useContext(LecturesContext);
}
