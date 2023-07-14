import { getAllSheets } from "@/libs";
import { useEffect, useState } from "react";

const lectureTimes = [
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
];

const lectureDays = ["Po", "Út", "St", "Čt", "Pá"];

export const useLectures = () => {
  const [googleSheets, setGoogleSheets] = useState([]);

  const transformData = (data: any) => {
    //transform data ze sheet, je to array of row
    //projdu si Den a čas a vytvořim objekt, kde transformuju value po_17 na
    //{lectureTimeId:"17"} a vlozim to pod Po:{}
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
            });

            // console.log("sheetValue", sheetValue);
            // console.log("sheetValuexx", sheetValue[0][0]["Den a čas"]);
            console.log(transformedData, "transformer");

            setGoogleSheets(sheetValue);
            //TODO: transformuj ty data do spravnyho formatu
          })
          .catch((e) => console.log("promise error", e));
    })();
  }, []);

  return {
    googleSheets,
  };
};
