import { useEffect, useState } from "react";
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

export const useGoogleSheets = () => {
  const [googleSheets, setGoogleSheets] = useState<GoogleSheets>();
  const [rawValues, setRawValues] = useState<Array<any>>([]);

  useEffect(() => {
    (async () => {
      const allSheets = await getAllSheets([
        "1925580387",
        "1899142510",
        "508666225",
        "646592576",
        "1180547156",
      ]);

      allSheets &&
        Promise.allSettled(allSheets)
          .then((resSheets: any) => {
            const sheetValue = resSheets.map(
              (sheet: GoogleSpreadsheetRowResponse) => sheet.value
            );
            setRawValues(sheetValue);
          })
          .catch((e) => console.log("promise error", e));
    })();
  }, []);

  useEffect(() => {
    if (rawValues.length === 0) return;

    rawValues.forEach((sheets: GoogleSheetRowType[], index: number) => {
      const selectedTab = googleSheetKeyValuePairs[index];

      const allEntriesPerSheet = sheets
        ?.map((sheet) => convertGoogleSheetRowData(sheet))
        //flat is needed, because we can have one or more swimming day_time per user
        .flat();

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
  };
};
