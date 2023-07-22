import { useEffect, useState } from "react";
import {
  GoogleSheetRowType,
  GoogleSpreadsheetRowResponse,
  Lecture,
  LectureValue,
  googleSheetKeyValuePairs,
} from "@/domains";
import { getAllSheets } from "@/libs";
import { LECTURE_DATA } from "@/constants";
import { getDayAndTimeFromString } from "@/utils";

export const useLectures = () => {
  const [googleSheets, setGoogleSheets] = useState<LectureValue>(LECTURE_DATA);
  const [rawValues, setRawValues] = useState<Array<any>>([]);

  useEffect(() => {
    (async () => {
      // const allSheets = await getAllSheets(["0", "1955007726", "1941806095"]);
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
      let updatedDayTimeObject: Record<string, Lecture> = {};

      sheets.forEach((sheet) => {
        const { day, time } = getDayAndTimeFromString(sheet["Den a čas"]);

        if (!day || !time) return;

        const incrementValue = Number(sheet["Počet dětí"]) || 1;

        updatedDayTimeObject = {
          ...updatedDayTimeObject,
          [day]: {
            [Number(time)]: {
              lectureTimeId: time,
              max: 30,
              aplications:
                incrementValue +
                (updatedDayTimeObject?.[day]?.[Number(time)]?.aplications ?? 0),
            },
          },
        };
      });

      setGoogleSheets((prev) => ({
        ...prev,
        [googleSheetKeyValuePairs[index]]: {
          ...prev[googleSheetKeyValuePairs[index]],
          lectures: {
            ...prev[googleSheetKeyValuePairs[index]].lectures,
            ...updatedDayTimeObject,
          },
        },
      }));
    });
  }, [rawValues]);

  return {
    googleSheets,
  };
};
