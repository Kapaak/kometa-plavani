import { useState } from "react";
import * as S from "../Lecture.style";
import { LectureSemester } from "./LectureSemester";
import { LectureCalendarTimes } from "./LectureCalendarTimes";
import { LectureCalendarData } from "./LectureCalendarData";
import {
  DayTimeCapacity,
  GoogleSheetDayTime,
  LectureTime,
  WeekDaysNew,
} from "@/domains";

interface LectureCalendarProps {
  times?: LectureTime[];
  days?: WeekDaysNew[];
  data?: Record<string, DayTimeCapacity>;
  showSemesterSwitcher?: boolean;
  capacity?: GoogleSheetDayTime;
}

export const LectureCalendar = ({
  times,
  days,
  data,
  showSemesterSwitcher = false,
  capacity,
}: LectureCalendarProps) => {
  const [selectedSemester, setSelectedSemester] = useState<1 | 2>(1);

  return (
    <S.LectureCalendar>
      {showSemesterSwitcher && (
        <LectureSemester
          selectedSemester={selectedSemester}
          onPrev={() => setSelectedSemester(1)}
          onNext={() => setSelectedSemester(2)}
        />
      )}
      <LectureCalendarTimes lectureTimes={times} />
      <LectureCalendarData
        selectedSemester={showSemesterSwitcher ? selectedSemester : 1}
        lectureTimes={times}
        lectureDays={days}
        calendarData={data}
        capacity={capacity}
      />
    </S.LectureCalendar>
  );
};
