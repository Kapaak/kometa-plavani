import { PropsWithChildren, createContext, useContext } from "react";

import { GoogleSheets } from "~/domains";
import { useGoogleSheets } from "~/hooks";

type GoogleSheetsContext = {
  googleSheets?: GoogleSheets;
  isLoading?: boolean;
  isError?: boolean;
};

const GoogleSheetsContext = createContext<GoogleSheetsContext>({
  googleSheets: {},
});

export const GoogleSheetsContextProvider = ({
  children,
}: PropsWithChildren) => {
  const { googleSheets, isLoading, isError } = useGoogleSheets();

  return (
    <GoogleSheetsContext.Provider value={{ googleSheets, isLoading, isError }}>
      {children}
    </GoogleSheetsContext.Provider>
  );
};

export function useGoogleSheetsContext() {
  return useContext(GoogleSheetsContext);
}
