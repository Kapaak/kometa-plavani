import dayjs from "dayjs";

import { GlobalSpreadsheetData, SchoolSpreadsheetData } from "~/domains";
import { appendSpreadsheet } from "~/libs";

import { calculatePriceAfterDiscount } from "./calculations";

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
      "Cenová kategorie": calculatePriceAfterDiscount(
        spreadsheetData?.lessonsPrice ?? 0,
        spreadsheetData.discount ?? 0
      ),
      "Počet dětí": spreadsheetData?.childrenCount,
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
      "Cenová kategorie": calculatePriceAfterDiscount(
        globalSpreadsheet?.lessonsPrice ?? 0,
        globalSpreadsheet.discount ?? 0
      ),
      "Zdravotní potíže": globalSpreadsheet?.healthIssues,
      "Den a čas": globalSpreadsheet?.lessonsDayTime,
      Poznámky: globalSpreadsheet?.notes,
    },
    spreadsheetId
  );
};
