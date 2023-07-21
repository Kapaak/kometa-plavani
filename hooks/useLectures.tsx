import {
  GoogleSheetRowType,
  Lecture,
  LectureTypes,
  LectureValue,
} from "@/domains";
import { getAllSheets } from "@/libs";
import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { useEffect, useState } from "react";

//teoreticky dostat ze SANITY
const defaultValues: LectureValue = {
  kindergarden: {
    lectureTimes: [
      {
        id: "10",
        from: "10:00",
        to: "11:00",
      },
    ],
    lectureDays: ["pa"],
    lectures: {
      pa: {
        10: {
          lectureTimeId: "10",
          max: 32,
          aplications: 0,
        },
      },
    },
  },
  school: {
    lectureTimes: [
      {
        id: "9",
        from: "9:00",
        to: "10:00",
      },
      {
        id: "10",
        from: "10:00",
        to: "11:00",
      },
    ],
    lectureDays: ["po", "ut", "st", "ct", "pa"], //tohle bych si umel dokazat vytahnout z lectures, kdyz data dostanu ze sanity, to stejny ty data nad
    lectures: {
      po: {
        9: {
          lectureTimeId: "9",
          max: 32,
          aplications: 0,
        },
        10: {
          lectureTimeId: "10",
          max: 32,
          aplications: 0,
        },
      },
      ut: {
        9: {
          lectureTimeId: "9",
          max: 32,
          aplications: 0,
        },
        10: {
          lectureTimeId: "10",
          max: 32,
          aplications: 0,
        },
      },
      st: {
        9: {
          lectureTimeId: "9",
          max: 32,
          aplications: 0,
        },
        10: {
          lectureTimeId: "10",
          max: 32,
          aplications: 0,
        },
      },
      ct: {
        9: {
          lectureTimeId: "9",
          max: 32,
          aplications: 0,
        },
        10: {
          lectureTimeId: "10",
          max: 32,
          aplications: 0,
        },
      },
      pa: {
        9: {
          lectureTimeId: "9",
          max: 32,
          aplications: 0,
        },
        10: {
          lectureTimeId: "10",
          max: 32,
          aplications: 0,
        },
      },
    },
  },
  basic: {
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
    lectureDays: ["po", "ut", "st", "ct", "pa"],
    lectures: {
      po: {
        15: {
          lectureTimeId: "15",
          max: 32,
          aplications: 0,
        },
      },
      ut: {
        15: {
          lectureTimeId: "15",
          max: 32,
          aplications: 0,
        },
        16: {
          lectureTimeId: "16",
          max: 32,
          aplications: 0,
        },
      },
      st: {
        15: {
          lectureTimeId: "15",
          max: 32,
          aplications: 0,
        },
      },
      ct: {
        15: {
          lectureTimeId: "15",
          max: 32,
          aplications: 0,
        },
        17: {
          lectureTimeId: "17",
          max: 32,
          aplications: 0,
        },
      },
      pa: {
        15: {
          lectureTimeId: "15",
          max: 32,
          aplications: 0,
        },
        16: {
          lectureTimeId: "16",
          max: 32,
          aplications: 0,
        },
        17: {
          lectureTimeId: "17",
          max: 32,
          aplications: 0,
        },
      },
    },
  },
  advanced: {
    lectureTimes: [
      {
        id: "15",
        from: "15:00",
        to: "16:00",
      },
    ],
    lectureDays: ["po", "st"],
    lectures: {
      po: {
        15: {
          lectureTimeId: "15",
          max: 32,
          aplications: 0,
        },
      },
      st: {
        15: {
          lectureTimeId: "15",
          max: 32,
          aplications: 0,
        },
      },
    },
  },
  condition: {
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
    lectureDays: ["po", "st", "pa"],
    lectures: {
      po: {
        15: {
          lectureTimeId: "15",
          max: 32,
          aplications: 0,
        },
      },
      st: {
        15: {
          lectureTimeId: "15",
          max: 32,
          aplications: 0,
        },
      },
      pa: {
        16: {
          lectureTimeId: "16",
          max: 32,
          aplications: 0,
        },
        17: {
          lectureTimeId: "17",
          max: 32,
          aplications: 0,
        },
      },
    },
  },
};

const googleSheetKeyValuePairs: Record<number, LectureTypes> = {
  0: LectureTypes.KINDERGARDEN,
  1: LectureTypes.SCHOOL,
  2: LectureTypes.BASIC,
  3: LectureTypes.ADVANCED,
  4: LectureTypes.CONDITION,
};

const getDayAndTimeFromString = (dayTime?: string) => {
  if (!dayTime || dayTime.length === 0) return { day: null, time: null };

  const [day, time] = dayTime.split("_");

  return { day, time };
};

export const useLectures = () => {
  const [googleSheets, setGoogleSheets] = useState<LectureValue>(defaultValues);
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
              (sheet: GoogleSpreadsheetRow) => sheet.value
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
              max: 32,
              aplications:
                incrementValue +
                (updatedDayTimeObject?.[day]?.[Number(time)]?.aplications ?? 0),
            },
          },
        };

        console.log(updatedDayTimeObject, "newTimeObject", day, time, index);
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
