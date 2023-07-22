import { useState } from "react";
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
  const [selectedSemester, setSelectedSemester] = useState<0 | 1>(0);

  return (
    <S.LectureCalendar>
      {showSemesterSwitcher && (
        <LectureSemester
          selectedSemester={selectedSemester}
          onPrev={() => setSelectedSemester(0)}
          onNext={() => setSelectedSemester(1)}
        />
      )}
      <LectureCalendarTimes lectureTimes={times} />
      <LectureCalendarData
        selectedSemester={showSemesterSwitcher ? selectedSemester : 0}
        lectureTimes={times}
        lectureDays={days}
        calendarData={data}
      />
    </S.LectureCalendar>
  );
};
