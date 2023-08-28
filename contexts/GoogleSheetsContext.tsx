import {
  GoogleSheets,
  LectureDaysTimesCapacity,
  SanityCourse,
} from "@/domains";
import { useGoogleSheets } from "@/hooks";
import { PropsWithChildren, createContext, useContext } from "react";

type GoogleSheetsContext = {
  googleSheets?: GoogleSheets;
};

const GoogleSheetsContext = createContext<GoogleSheetsContext>({
  googleSheets: {},
});

export const GoogleSheetsContextProvider = ({
  children,
}: PropsWithChildren) => {
  const { googleSheets } = useGoogleSheets();

  return (
    <GoogleSheetsContext.Provider value={{ googleSheets }}>
      {children}
    </GoogleSheetsContext.Provider>
  );
};

export function useGoogleSheetsContext() {
  return useContext(GoogleSheetsContext);
}
