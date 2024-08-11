import { LectureTime } from "~/domains";

import * as S from "./LectureCalendarTimes.style";

interface LectureCalendarTimesProps {
  lectureTimes?: LectureTime[];
}

export const LectureCalendarTimes = ({
  lectureTimes,
}: LectureCalendarTimesProps) => {
  return (
    <S.LectureCalendarTimes
      padding="0 0 1.5rem 0"
      columns={lectureTimes?.length}
    >
      <div />
      {lectureTimes?.map((time) => (
        <div key={time?.from}>
          {time?.from} - {time?.to}
        </div>
      ))}
    </S.LectureCalendarTimes>
  );
};
