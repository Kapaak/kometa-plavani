import { DayAbbr, LectureTime } from "@/domains";
import { useLectures } from "@/hooks";
import { createContext, PropsWithChildren, useContext } from "react";

const LecturesContext = createContext<{
  googleSheets: any;
  getLectureSheetsByType: (
    type: "kindergarden" | "school" | "basic" | "advanced" | "condition"
  ) => {
    lectureTimes: LectureTime[];
    lectureDays: DayAbbr[];
  };
}>({
  googleSheets: {},
  getLectureSheetsByType: () => ({ lectureTimes: [], lectureDays: [] }),
});

export const LecturesContextProvider = ({ children }: PropsWithChildren) => {
  const { googleSheets } = useLectures();

  const getLectureSheetsByType = (
    type: "kindergarden" | "school" | "basic" | "advanced" | "condition"
  ) => {
    return googleSheets[type];
  };

  return (
    //mrci to, protoze chce lectureDays:string[]
    <LecturesContext.Provider value={{ googleSheets, getLectureSheetsByType }}>
      {children}
    </LecturesContext.Provider>
  );
};

export function useLecturesContext() {
  return useContext(LecturesContext);
}
