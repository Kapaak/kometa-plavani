import { useState } from "react";

import { X } from "@phosphor-icons/react";
import Loader from "react-spinners/HashLoader";

import {
  DayTimeCapacity,
  GoogleSheetDayTime,
  LectureTime,
  WeekDaysNew,
} from "~/domains";
import { Danger, Hidden, Space, Text } from "~/styles";

import { LectureCalendarData } from "../LectureCalendarData";
import { LectureCalendarTimes } from "../LectureCalendarTimes";
import { LectureSemester } from "../LectureSemester";

import * as S from "./LectureCalendar.style";

interface LectureCalendarProps {
  times?: LectureTime[];
  days?: WeekDaysNew[];
  data?: Record<string, DayTimeCapacity>;
  showSemesterSwitcher?: boolean;
  capacity?: Record<string, GoogleSheetDayTime>;
  isLoading?: boolean;
  isError?: boolean;
  semesterLabels?: string[];
}

export const LectureCalendar = ({
  times,
  days,
  data,
  showSemesterSwitcher = false,
  semesterLabels,
  capacity,
  isLoading,
  isError,
}: LectureCalendarProps) => {
  const [selectedSemester, setSelectedSemester] = useState<1 | 2>(1);
  return (
    <S.LectureCalendar>
      {!isLoading && isError && (
        <S.ActionMessage justify="center" align="center">
          <X size={40} color="var(--colr)" weight="bold" />
          <Space />
          <Danger>Došlo k chybě, zkuste stránku načíst znova</Danger>
        </S.ActionMessage>
      )}
      {isLoading && (
        <S.ActionMessage>
          <Loader
            size={60}
            color="var(--col2)"
            cssOverride={{
              display: "block",
              margin: "0 auto",
            }}
          />
          <Space />
          <Text bold center>
            Načítám data o obsazenosti
          </Text>
        </S.ActionMessage>
      )}

      <Hidden isHidden={isLoading || isError}>
        <LectureSemester
          selectedSemester={selectedSemester}
          semesterLabels={semesterLabels}
          {...(showSemesterSwitcher && {
            onPrev: () => setSelectedSemester(1),
            onNext: () => setSelectedSemester(2),
          })}
        />
        <LectureCalendarTimes lectureTimes={times} />
        {!isLoading && Boolean(times?.length) && (
          <LectureCalendarData
            selectedSemester={showSemesterSwitcher ? selectedSemester : 1}
            lectureTimes={times}
            lectureDays={days}
            calendarData={data}
            capacity={capacity}
          />
        )}
      </Hidden>
    </S.LectureCalendar>
  );
};
