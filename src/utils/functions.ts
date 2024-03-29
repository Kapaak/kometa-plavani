import { scroller } from "react-scroll";

import {
  DayAbbr,
  GoogleSheetDayTime,
  PageRouteTranslation,
  convertAbbrToWeekDays,
} from "~/domains";

import { semesterNumberFromString } from "./transform";

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

export const getDayAndTimeFromString = (dayTime?: string) => {
  if (!dayTime || dayTime.length === 0) return { day: null, time: null };

  const [day, time] = dayTime.split("_");

  return { day: convertAbbrToWeekDays(day as DayAbbr), time };
};

export const getPageRouteTranslation = (pageRoute: string) => {
  switch (pageRoute) {
    case "/":
      return PageRouteTranslation.HOME;
    case "/prihlasky":
      return PageRouteTranslation.APPLICATIONS;
  }
};

export const convertGoogleSheetRowData = (sheet: any) => {
  //every entry in the sheet can have multiple days of swimming
  const multipleDays = sheet["Den a čas"]?.split(",");

  return multipleDays?.map((dayAndTime: string) => {
    const { day, time } = getDayAndTimeFromString(dayAndTime);

    if (!day || !time) return;

    const semesterNumber = semesterNumberFromString(sheet["Pololetí"]) ?? 1;
    const aplications = Number(sheet["Počet dětí"]) || 1;

    return {
      day: day,
      time: Number(time),
      semesterNumber,
      aplications,
    };
  });
};

export const calculateGoogleSheetRowApplications = (
  googleSheets: {
    day: string;
    time: number;
    semesterNumber: number;
    aplications: number;
  }[]
) => {
  let calculatedAplications: Record<string, GoogleSheetDayTime> = {};

  googleSheets?.forEach((sheet) => {
    //Pokud hazi error Cannot read properties of undefined (reading 'day'), tak mame v googleSheets datech prazdnej radek
    const obj = {
      [sheet.day]: {
        ...calculatedAplications?.[sheet.day],
        [sheet.time]: {
          ...calculatedAplications?.[sheet.day]?.[sheet.time],
          [sheet.semesterNumber]: {
            aplications:
              sheet.aplications +
              (calculatedAplications?.[sheet.day]?.[sheet.time]?.[
                sheet.semesterNumber
              ]?.aplications ?? 0),
          },
        },
      },
    };

    calculatedAplications = {
      ...calculatedAplications,
      ...obj,
    };
  });

  return calculatedAplications;
};
