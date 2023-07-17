import { GoogleSheetRowType, LectureTypes, LectureValue } from "@/domains";
import { getAllSheets } from "@/libs";
import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { useCallback, useEffect, useState } from "react";

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

const getDayAndTimeFromString = (dayTime?: string) => {
  if (!dayTime || dayTime.length === 0) return { day: null, time: null };

  const [day, time] = dayTime.split("_");

  return { day, time };
};

const transformData = (
  googleSheetRows: GoogleSheetRowType[],
  lectureType: LectureTypes
) => {
  const dataForLecture = { ...defaultValues[lectureType] };

  //projdu vsechny ulozene radky v google sheets
  //a pro kazdy ulozeny po_19 napr pridam do Pondeli 19 hodin +1
  googleSheetRows.map((googleSheetRow) => {
    const { day, time } = getDayAndTimeFromString(googleSheetRow["Den a čas"]);

    if (!day || !time) return;

    const incrementValue = Number(googleSheetRow["Počet dětí"]) || 1;

    dataForLecture?.lectures[day]?.map((lecture) => {
      if (Number(lecture?.lectureTimeId) === Number(time)) {
        lecture.aplications = (lecture.aplications ?? 0) + incrementValue;
      }

      return lecture;
    });
  });
  console.log(dataForLecture, "data");

  return dataForLecture;
};

export const useLectures = () => {
  const [googleSheets, setGoogleSheets] = useState<LectureValue>(defaultValues);

  useEffect(() => {
    (async () => {
      // const allSheets = await getAllSheets(["0", "1955007726", "1941806095"]);
      const allSheets = await getAllSheets([
        "1925580387",
        // "1899142510",
        // "508666225",
        // "646592576",
        // "1180547156",
      ]);

      const googleSheetKeyValuePairs: Record<number, LectureTypes> = {
        0: LectureTypes.KINDERGARDEN,
        1: LectureTypes.SCHOOL,
        2: LectureTypes.BASIC,
        3: LectureTypes.ADVANCED,
        4: LectureTypes.CONDITION,
      };

      allSheets &&
        Promise.allSettled(allSheets)
          .then((resSheets: any) => {
            const sheetValue = resSheets.map(
              (sheet: GoogleSpreadsheetRow) => sheet.value
            );
            //tady mozna nejdriv celej objekt opravit a pak az to nakonci pridat do setGoogleSheets
            sheetValue.forEach(
              (sheets: GoogleSheetRowType[], index: number) => {
                const transformed = transformData(
                  sheets,
                  googleSheetKeyValuePairs[index]
                );

                console.log(transformed, "transka");

                // setGoogleSheets((prev) => ({
                //   ...prev,
                //   [googleSheetKeyValuePairs[index]]: transformed,
                // }));
              }
            );
          })
          .catch((e) => console.log("promise error", e));
    })();
  }, []);

  return {
    googleSheets,
  };
};
