import {
  DayAbbr,
  Lecture,
  LectureTime,
  LectureTypes,
  LectureValue,
} from "@/domains";
import { useLectures } from "@/hooks";
import { createContext, PropsWithChildren, useContext } from "react";

const LecturesContext = createContext<{
  googleSheets: LectureValue;
  getLectureSheetsByType: (type?: LectureTypes) => {
    lectureTimes: LectureTime[];
    lectureDays: DayAbbr[];
    lectures: Record<string, Lecture>;
  };
}>({
  googleSheets: {
    advanced: { lectureTimes: [], lectureDays: [], lectures: {} },
    basic: { lectureTimes: [], lectureDays: [], lectures: {} },
    condition: { lectureTimes: [], lectureDays: [], lectures: {} },
    school: { lectureTimes: [], lectureDays: [], lectures: {} },
    kindergarden: { lectureTimes: [], lectureDays: [], lectures: {} },
  },
  getLectureSheetsByType: () => ({
    lectureTimes: [],
    lectureDays: [],
    lectures: {},
  }),
});

export const LecturesContextProvider = ({ children }: PropsWithChildren) => {
  const { googleSheets } = useLectures();

  const getLectureSheetsByType = (type?: LectureTypes) => {
    if (!type)
      return {
        lectureTimes: [],
        lectureDays: [],
        lectures: {},
      };

    return googleSheets[type];
  };

  return (
    <LecturesContext.Provider value={{ googleSheets, getLectureSheetsByType }}>
      {children}
    </LecturesContext.Provider>
  );
};

export function useLecturesContext() {
  return useContext(LecturesContext);
}
