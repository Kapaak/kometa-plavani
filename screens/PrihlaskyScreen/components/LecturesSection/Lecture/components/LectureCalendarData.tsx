import { Flex, Text } from "@/styles";
import { LectureAvailability } from "./LectureAvailability";
import { nanoid } from "nanoid";
import { DayAbbr, DayAbbrDiacritics, Lecture, LectureTime } from "@/domains";
import * as S from "../Lecture.style";

interface LectureCalendarDataProps {
  lectureTimes?: LectureTime[];
  lectureDays?: DayAbbr[];
  calendarData?: Record<string, Lecture>;
  selectedSemester?: number;
}

export const LectureCalendarData = ({
  lectureTimes,
  lectureDays,
  calendarData,
  selectedSemester = 1,
}: LectureCalendarDataProps) => {
  const uniqueGlobalId = nanoid();

  const findLectureTime = (day: DayAbbr) => {
    return lectureTimes?.map((lectureTime) => {
      const id = nanoid();
      const lectureData =
        calendarData?.[day]?.[Number(lectureTime.id)]?.[selectedSemester];
      if (!lectureData) return <div key={`no_data_${id}`} />;

      return (
        <LectureAvailability
          key={id}
          applications={lectureData?.aplications || 0}
          max={lectureData?.max}
        />
      );
    });
  };
  return (
    <Flex gap="1.2rem">
      {lectureDays?.map((day, index) => {
        const dayWithDiacritics =
          //@ts-ignore // I am getting type in lowercase but I need it in uppercase - but the transformation toUpperCase() doesnt fix the type err
          DayAbbrDiacritics[day.toUpperCase() as DayAbbr].toUpperCase();
        return (
          <S.LectureCalendarTimesGrid key={`${day}_${uniqueGlobalId}_${index}`}>
            <div>{dayWithDiacritics}</div> {findLectureTime(day)}
          </S.LectureCalendarTimesGrid>
        );
      })}
      <Text variant="dark">&#42; Volná místa / kapacita</Text>
    </Flex>
  );
};
