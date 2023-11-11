import { useEffect, useReducer, useState } from "react";
import {
  GoogleSheetRowType,
  GoogleSheets,
  GoogleSpreadsheetRowResponse,
  googleSheetKeyValuePairs,
} from "@/domains";
import { getAllSheets } from "@/libs";
import {
  calculateGoogleSheetRowApplications,
  convertGoogleSheetRowData,
} from "@/utils";

type LoadingState = {
  isLoading: boolean;
  isError: boolean;
};

export const useGoogleSheets = () => {
  const [googleSheets, setGoogleSheets] = useState<GoogleSheets>();
  const [rawValues, setRawValues] = useState<Array<any>>([]);

  const [state, dispatch] = useReducer(
    (state: LoadingState, newState: Partial<LoadingState>) => ({
      ...state,
      ...newState,
    }),
    {
      isLoading: true,
      isError: false,
    }
  );

  useEffect(() => {
    (async () => {
      const allSheets = await getAllSheets([
        "1925580387",
        "1899142510",
        "508666225",
        "646592576",
        "1180547156",
        "84149580",
      ]);

      if (!allSheets) {
        return dispatch({ isError: true, isLoading: false });
      }

      allSheets &&
        Promise.allSettled(allSheets)
          .then((resSheets: any) => {
            const sheetValue = resSheets.map(
              (sheet: GoogleSpreadsheetRowResponse) => sheet.value
            );
            setRawValues(sheetValue);
          })
          .catch(() => dispatch({ isError: true }))
          .finally(() => dispatch({ isLoading: false }));
    })();
  }, []);

  useEffect(() => {
    if (rawValues.length === 0) return;

    rawValues.forEach((sheets: GoogleSheetRowType[], index: number) => {
      const selectedTab = googleSheetKeyValuePairs[index];

      const allEntriesPerSheet = sheets
        ?.map((sheet) => convertGoogleSheetRowData(sheet))
        //flat is needed, because we can have one or more swimming day_time per user
        .flat()
        ?.filter((sheets) => sheets);

      const calculated =
        calculateGoogleSheetRowApplications(allEntriesPerSheet);

      setGoogleSheets((prev) => ({
        ...prev,
        [selectedTab]: {
          ...prev?.[googleSheetKeyValuePairs[index]],
          lectures: {
            ...prev?.[googleSheetKeyValuePairs[index]]?.lectures,
            ...calculated,
          },
        },
      }));
    });
  }, [rawValues]);

  return {
    googleSheets,
    isLoading: state.isLoading,
    isError: state.isError,
  };
};
