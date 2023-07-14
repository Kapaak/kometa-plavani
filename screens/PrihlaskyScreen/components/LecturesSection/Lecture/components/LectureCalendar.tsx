import * as S from "../Lecture.style";
import { LectureSemester } from "./LectureSemester";
import { LectureCalendarTimes } from "./LectureCalendarTimes";
import { LectureCalendarData } from "./LectureCalendarData";

//TODO: kdybych chtel podle pololeti, tak bych mel 1:{...data} a 2:{...data} a podle stavu bych prochazel data?.[stav]?....
//TODO: objekt Skoly a skolky , atd...
const DUMMY_DATA = {
  lectureTimes: [
    {
      id: "15",
      from: "15:00",
      to: "16:00",
    },
    {
      id: "16",
      from: "16:00",
      to: "17:00",
    },
    {
      id: "17",
      from: "17:00",
      to: "18:00",
    },
  ],
  lectureDays: ["Po", "Út", "St", "Čt", "Pá"],
  lectures: {
    Po: [
      {
        lectureTimeId: "15",
        available: 20,
        max: 32,
        //mb davat semester:1,2 namisto toho, aby to byl objekt
      },
      {
        lectureTimeId: "16",
        available: 20,
        max: 32,
      },
      {
        lectureTimeId: "17",
        available: 10,
        max: 22,
      },
    ],
    Út: [
      {
        lectureTimeId: "15",
        available: 20,
        max: 32,
      },
      {
        lectureTimeId: "16",
        available: 20,
        max: 32,
      },
    ],
    St: [
      {
        lectureTimeId: "15",
        available: 20,
        max: 32,
      },

      {
        lectureTimeId: "17",
        available: 20,
        max: 32,
      },
    ],
    Čt: [
      {
        lectureTimeId: "15",
        available: 20,
        max: 32,
      },
    ],
    Pá: [
      {
        lectureTimeId: "15",
        available: 20,
        max: 32,
      },
    ],
  },
};

export const LectureCalendar = () => {
  //TODO ziskat data z hooku pro specificky element
  return (
    <S.LectureCalendar>
      <LectureSemester />
      <LectureCalendarTimes lectureTimes={DUMMY_DATA.lectureTimes} />
      <LectureCalendarData
        lectureTimes={DUMMY_DATA.lectureTimes}
        lectureDays={DUMMY_DATA?.lectureDays} //protoze ty hardcoded data jsou string, ale ma to byt typ DayAbbr
        calendarData={DUMMY_DATA?.lectures}
      />
    </S.LectureCalendar>
  );
};
