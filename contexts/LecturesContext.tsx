import { useLectures } from "@/hooks";
import { createContext, PropsWithChildren, useContext } from "react";

// import { useLectures } from '../hooks';

const LecturesContext = createContext<{
  // ReturnType<typeof useLectures> & { analysisId: number }
  googleSheets: any;
}>({
  googleSheets: [],
  // ReturnType<typeof useLectures> & { analysisId: number }
  // analysisId: -1,
  // analysis: null,
  // mainPerson: null,
  // updateAnalysis: void 0,
  // isError: false,
  // isLoading: false,
});

export const LecturesContextProvider = ({ children }: PropsWithChildren) => {
  const { googleSheets } = useLectures();

  return (
    <LecturesContext.Provider value={{ googleSheets }}>
      {children}
    </LecturesContext.Provider>
  );
};

export function useLecturesContext() {
  return useContext(LecturesContext);
}
