import { appendSpreadsheet } from "libs/google";
import { scroller } from "react-scroll";
import dayjs from "dayjs";
import { GlobalSpreadsheetData, SchoolSpreadsheetData } from "@/domains";

export const scrollTo = (destination: string) => {
  scroller.scrollTo(destination, { smooth: true, offset: -100 });
};

export const isEven = (num: number) => {
  return num % 2 === 0;
};

export const delay = (callback: () => void, delayInMs?: number) =>
  new Promise<void>((resolve) =>
    setTimeout(() => {
      callback();
      resolve();
    }, delayInMs ?? 500)
  );

export const createOption = (label: string, value: string) => {
  return { label, value };
};

export const uploadSchoolSpreadsheet = async (
  spreadsheetId: string,
  spreadsheetData: SchoolSpreadsheetData
) => {
  return await appendSpreadsheet(
    {
      "Název školy": spreadsheetData?.schoolName,
      Adresa: spreadsheetData?.address,
      "IČ nebo DIČ": spreadsheetData?.identifier,
      "Kontaktní osoba": spreadsheetData?.contactPerson,
      "Telefon kontaktní osoby": spreadsheetData?.contactPersonPhone,
      "Email kontaktní osoby": spreadsheetData?.contactPersonEmail,
      "Cenová kategorie": spreadsheetData?.lessonsPrice,
      "Počet dětí": spreadsheetData?.childrenCount,
      Úroveň: spreadsheetData?.level,
      "Den a čas": spreadsheetData?.lessonsDayTime,
      Pololetí: spreadsheetData?.midTerm,
      Poznámky: spreadsheetData?.notes,
    },
    spreadsheetId
  );
};

export const uploadGlobalSpreadsheet = async (
  spreadsheetId: string,
  globalSpreadsheet: GlobalSpreadsheetData
) => {
  const currentDateTime = dayjs().format("DD-MM-YYYY hh:mm");

  return await appendSpreadsheet(
    {
      "Časová značka": currentDateTime,
      Jméno: globalSpreadsheet?.firstName,
      Příjmení: globalSpreadsheet?.lastName,
      Pohlaví: globalSpreadsheet?.gender,
      "Rodné číslo": globalSpreadsheet?.personalIdNum,
      "Datum narození": globalSpreadsheet?.dateOfBirth,
      Telefon: globalSpreadsheet?.phone,
      Email: globalSpreadsheet?.email,
      "Adresa a číslo popisné": globalSpreadsheet?.address,
      Město: globalSpreadsheet?.city,
      PSČ: globalSpreadsheet?.postCode,
      Alergie: globalSpreadsheet?.alergy,
      "Cenová kategorie": globalSpreadsheet?.lessonsPrice,
      "Zdravotní potíže": globalSpreadsheet?.healthIssues,
      Úroveň: globalSpreadsheet?.level,
      "Den a čas": globalSpreadsheet?.lessonsDayTime,
    },
    spreadsheetId
  );
};
