import {
  DayAbbr,
  Lecture,
  LectureTime,
  LectureTypes,
  LectureValue,
} from "@/domains";
import { getAllSheets } from "@/libs";
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
      pa: [
        {
          lectureTimeId: "10",
          max: 32,
          available: 32,
        },
      ],
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
      po: [
        {
          lectureTimeId: "9",
          max: 32,
        },
        {
          lectureTimeId: "10",
          max: 32,
        },
      ],
      ut: [
        {
          lectureTimeId: "9",
          max: 32,
        },
        {
          lectureTimeId: "10",
          max: 32,
        },
      ],
      st: [
        {
          lectureTimeId: "9",
          max: 32,
        },
        {
          lectureTimeId: "10",
          max: 32,
        },
      ],
      ct: [
        {
          lectureTimeId: "9",
          max: 32,
        },
        {
          lectureTimeId: "10",
          max: 32,
        },
      ],
      pa: [
        {
          lectureTimeId: "9",
          max: 32,
        },
        {
          lectureTimeId: "10",
          max: 32,
        },
      ],
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
      po: [
        {
          lectureTimeId: "15",
          max: 32,
        },
      ],
      ut: [
        {
          lectureTimeId: "15",
          max: 32,
        },
        {
          lectureTimeId: "16",
          max: 32,
        },
      ],
      st: [
        {
          lectureTimeId: "15",
          max: 32,
        },
      ],
      ct: [
        {
          lectureTimeId: "15",
          max: 32,
        },
        {
          lectureTimeId: "17",
          max: 32,
        },
      ],
      pa: [
        {
          lectureTimeId: "15",
          max: 32,
        },
        {
          lectureTimeId: "16",
          max: 32,
        },
        {
          lectureTimeId: "17",
          max: 32,
        },
      ],
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
      po: [
        {
          lectureTimeId: "15",
          max: 32,
        },
      ],
      st: [
        {
          lectureTimeId: "15",
          max: 32,
        },
      ],
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
      po: [
        {
          lectureTimeId: "15",
          max: 32,
        },
      ],
      st: [
        {
          lectureTimeId: "15",
          max: 32,
        },
      ],
      pa: [
        {
          lectureTimeId: "16",
          max: 32,
        },
        {
          lectureTimeId: "17",
          max: 32,
        },
      ],
    },
  },
};

export const useLectures = () => {
  const [googleSheets, setGoogleSheets] = useState<LectureValue>(defaultValues);

  const transformData = (data: any[]) => {
    //transform data ze sheet, je to array of row
    //projdu si Den a čas a vytvořim objekt, kde transformuju value po_17 na
    //{lectureTimeId:"17"} a vlozim to pod Po:{}
    const newData = {};
    data.map((d) => {
      const dayAndTime = d["Den a čas"].split("_");
      const day = dayAndTime[0];
      const time = dayAndTime[1];

      const actualNumberOfApplications =
        newData?.[day]?.[time]?.applications || 0;
      const incrementValue = Number(d["Počet dětí"]) || 1;

      newData[day] = {
        ...newData[day],
        [time]: {
          applications: actualNumberOfApplications + incrementValue,
        },
      };
    });
    console.log(
      "🚀 ~ file: useLectures.tsx:32 ~ transformData ~ newData:",
      newData
    );

    //zatim dostavam objekt pro specificky typ lekce s applications = pocet prihlasek k danymu dni

    //tamto je mozna zbytecne slozity
    //ja potrebuju info jen o tom, do jakyho dne to patri
    //a do jakyho casu to patri a tam pridat zaznam +1, jenze u skol a skolek to bude + x (pocet deti v tom radku)
  };

  useEffect(() => {
    (async () => {
      const sheets = await getAllSheets(["0", "1955007726", "1941806095"]);

      const googleSheetKeyValuePairs: Record<number, string> = {
        0: "kindergarden",
        1: "school",
        2: "basic",
        3: "advanced",
        4: "condition",
      };

      sheets &&
        Promise.allSettled(sheets)
          .then((resSheets: any) => {
            const sheetValue = resSheets.map((sheet: any) => sheet.value);

            let transformedData = {};

            sheetValue.forEach((sheet: any, index: number) => {
              const sheetName = googleSheetKeyValuePairs[index];

              transformedData = { ...transformedData, [sheetName]: sheet };
              console.log(
                "🚀 ~ file: useLectures.tsx:39 ~ sheetValue.forEach ~ sheet:",
                sheet
              );
              transformData(sheet);
            });

            // console.log("sheetValue", sheetValue);
            // console.log("sheetValuexx", sheetValue[0][0]["Den a čas"]);
            console.log(transformedData, "transformer");

            // setGoogleSheets(sheetValue);
            //TODO: transformuj ty data do spravnyho formatu
          })
          .catch((e) => console.log("promise error", e));
    })();
  }, []);

  return {
    googleSheets,
  };
};
