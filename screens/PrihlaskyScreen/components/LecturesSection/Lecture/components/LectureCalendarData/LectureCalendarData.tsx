import { Flex, Text } from "@/styles";
import { LectureAvailability } from "../LectureAvailability";
import { nanoid } from "nanoid";
import {
  DayTimeCapacity,
  GoogleSheetDayTime,
  LectureTime,
  WeekDaysNew,
  convertWeekDaysToAbbr,
} from "@/domains";
import * as S from "./LectureCalendarData.style";

interface LectureCalendarDataProps {
  lectureTimes?: LectureTime[];
  lectureDays?: WeekDaysNew[];
  calendarData?: Record<string, DayTimeCapacity>;
  selectedSemester?: number;
  capacity?: GoogleSheetDayTime;
}

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
        />
      );
    });
  };
  return (
    <Flex gap="1.2rem">
      {lectureDays?.map((day, index) => {
        return (
          <S.LectureCalendarTimesGrid key={`${day}_${uniqueGlobalId}_${index}`}>
            <div>{convertWeekDaysToAbbr(day)}</div> {findLectureTime(day)}
          </S.LectureCalendarTimesGrid>
        );
      })}
      <Text variant="dark">&#42; Volná místa / kapacita</Text>
      <Text variant="dark" bold>
        &#42; Přihlašujte se pouze na termíny, kde je volná kapacita
      </Text>
    </Flex>
  );
};
