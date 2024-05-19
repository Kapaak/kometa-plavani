import { nanoid } from "nanoid";

import {
  DayTimeCapacity,
  GoogleSheetDayTime,
  LectureTime,
  WeekDaysNew,
  convertWeekDaysToAbbrDiacritics,
} from "~/domains";
import { Flex } from "~/styles";

import { LectureAvailability } from "../LectureAvailability";

import * as S from "./LectureCalendarData.style";

interface LectureCalendarDataProps {
  lectureTimes?: LectureTime[];
  lectureDays?: WeekDaysNew[];
  calendarData?: Record<string, DayTimeCapacity>;
  selectedSemester?: number;
  capacity?: Record<string, GoogleSheetDayTime>;
}

//TODO: Convert to table?
export const LectureCalendarData = ({
  lectureTimes,
  lectureDays,
  calendarData,
  selectedSemester = 1,
  capacity,
}: LectureCalendarDataProps) => {
  const uniqueGlobalId = nanoid();

  const findLectureTime = (day: WeekDaysNew) => {
    return lectureTimes?.map((lectureTime) => {
      const id = nanoid();
      const lectureData =
        calendarData?.[day]?.[Number(lectureTime.id)]?.[selectedSemester];

      const realCapacity =
        capacity?.[day]?.[Number(lectureTime.id)]?.[selectedSemester];

      if (!lectureData) return <div key={`no_data_${id}`} />;

      return (
        <LectureAvailability
          key={id}
          applications={realCapacity?.aplications || 0}
          max={lectureData?.max ?? 0}
          discount={lectureData?.discount ?? 0}
          skillLevelId={lectureData?.skillLevelId ?? 0}
        />
      );
    });
  };
  return (
    <Flex gap="1.2rem">
      {lectureDays?.map((day, index) => {
        return (
          <S.LectureCalendarTimesGrid key={`${day}_${uniqueGlobalId}_${index}`}>
            <div>{convertWeekDaysToAbbrDiacritics(day)}</div>{" "}
            {findLectureTime(day)}
          </S.LectureCalendarTimesGrid>
        );
      })}
    </Flex>
  );
};
