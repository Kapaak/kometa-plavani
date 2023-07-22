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
import { getDayAndTimeFromString, getSemesterNumberFromString } from "@/utils";

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
      let updatedDayTimeObject: Record<string, Lecture> = {
        ...LECTURE_DATA?.[googleSheetKeyValuePairs[index]]?.lectures,
      };

      sheets.forEach((sheet) => {
        const { day, time } = getDayAndTimeFromString(sheet["Den a čas"]);

        if (!day || !time) return;
        //vraci mi to hodnoty 1 a 2, ale ja potrebuji 0 a 1 do arraye
        //mimo skoly a skolky to nic nevrati a proto dam 1, abych ji -1 dostal na 0
        let semesterNumber =
          getSemesterNumberFromString(sheet["Pololetí"]) ?? 1;
        semesterNumber -= 1;

        // nebyt tohodle, tak bych pri spreadu ztratil data z defaultniho objektu
        //ale to uz je i v tom hornim updatedayTime, ale z nejakyho duvodu nefunguje ten array v newTimeArray s tim
        const initialLecturesArray: Record<string, Lecture> = {
          ...LECTURE_DATA?.[googleSheetKeyValuePairs[index]]?.lectures,
        };

        const incrementValue = Number(sheet["Počet dětí"]) || 1;

        const newTimeArray = initialLecturesArray[day]?.[Number(time)]?.map(
          (timeData: any, index: number) =>
            index === semesterNumber
              ? {
                  lectureTimeId: time,
                  max: 30,
                  aplications:
                    incrementValue +
                    (updatedDayTimeObject?.[day]?.[Number(time)]?.[
                      semesterNumber
                    ]?.aplications ?? 0),
                }
              : timeData
        );

        updatedDayTimeObject = {
          ...updatedDayTimeObject,
          [day]: {
            ...updatedDayTimeObject[day],
            [Number(time)]: {
              ...updatedDayTimeObject[day]?.[Number(time)],
              ...newTimeArray,
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
