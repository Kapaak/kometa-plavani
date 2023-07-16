import { LectureTime } from "@/domains";
import * as S from "../Lecture.style";

interface LectureCalendarTimesProps {
  lectureTimes?: LectureTime[];
}

export const LectureCalendarTimes = ({
  lectureTimes,
}: LectureCalendarTimesProps) => {
  return (
    <S.LectureGrid>
      <div />
      {lectureTimes?.map((time) => (
        <div key={time?.from}>
          {time?.from} - {time?.to}
        </div>
      ))}
    </S.LectureGrid>
  );
};
