import { LectureTime } from "@/domains";
import * as S from "../Lecture.style";

interface LectureCalendarTimesProps {
  lectureTimes?: LectureTime[];
}

export const LectureCalendarTimes = ({
  lectureTimes,
}: LectureCalendarTimesProps) => {
  return (
    <S.LectureCalendarTimesGrid padding="0 0 1.5rem 0">
      <div />
      {lectureTimes?.map((time) => (
        <div key={time?.from}>
          {time?.from} - {time?.to}
        </div>
      ))}
    </S.LectureCalendarTimesGrid>
  );
};
