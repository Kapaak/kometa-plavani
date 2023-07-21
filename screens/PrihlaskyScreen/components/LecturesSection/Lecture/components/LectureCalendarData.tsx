import { Flex } from "@/styles";
import { LectureAvailability } from "./LectureAvailability";
import { nanoid } from "nanoid";
import { DayAbbr, Lecture, LectureTime } from "@/domains";

interface LectureCalendarDataProps {
  lectureTimes?: LectureTime[];
  lectureDays?: DayAbbr[];
  calendarData?: Record<string, Lecture>;
}

export const LectureCalendarData = ({
  lectureTimes,
  lectureDays,
  calendarData,
}: LectureCalendarDataProps) => {
  const uniqueGlobalId = nanoid();

  const findLectureTime = (day: DayAbbr) => {
    return lectureTimes?.map((lectureTime) => {
      const id = nanoid();
      const lectureData = calendarData?.[day]?.[Number(lectureTime.id)];
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
    <Flex gap="1rem">
      {lectureDays?.map((day, index) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2rem 10rem 10rem 10rem",
            gap: "1rem",
          }}
          key={`${day}_${uniqueGlobalId}_${index}`}
        >
          <div>{day}:</div> {findLectureTime(day)}
        </div>
      ))}
    </Flex>
  );
};
