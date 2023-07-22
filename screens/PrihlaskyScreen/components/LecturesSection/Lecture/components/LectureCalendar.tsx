import * as S from "../Lecture.style";
import { LectureSemester } from "./LectureSemester";
import { LectureCalendarTimes } from "./LectureCalendarTimes";
import { LectureCalendarData } from "./LectureCalendarData";
import { DayAbbr, Lecture, LectureTime } from "@/domains";

interface LectureCalendarProps {
  times?: LectureTime[];
  days?: DayAbbr[];
  data?: Record<string, Lecture>;
  showSemesterSwitcher?: boolean;
}

export const LectureCalendar = ({
  times,
  days,
  data,
  showSemesterSwitcher = false,
}: LectureCalendarProps) => {
  return (
    <S.LectureCalendar>
      {showSemesterSwitcher && <LectureSemester />}
      <LectureCalendarTimes lectureTimes={times} />
      <LectureCalendarData
        lectureTimes={times}
        lectureDays={days}
        calendarData={data}
      />
    </S.LectureCalendar>
  );
};
