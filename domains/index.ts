import { StaticImageData } from "next/image";
import { BaseSyntheticEvent } from "react";
import { GoogleSpreadsheetRow } from "google-spreadsheet";

export type PageData = {
  spreadsheetId: string;
  name: Course;
  templateId: string;
  label: string;
};

export type GoogleSpreadsheetRowResponse = GoogleSpreadsheetRow;

export type SwimmingPage = {
  onSubmit: (e: BaseSyntheticEvent) => void;
  isLoading: boolean;
  selectOptions?: LectureOption[];
  maxNumberOfLessons: number;
};

export type RadioOption = {
  label: string;
  value: string;
  lessonsPerWeek?: number; //tohle je blbost a je to tim, ze do ControlledRadio nedavam nejakej <T> typ
  level?: Level;
};

export type Course =
  | "skoly"
  | "skolky"
  | "zdokonalovaci-plavani"
  | "kondicni-plavani"
  | "zakladni-plavani";

export type Level = "lower" | "higher";

export enum ScrollSections {
  home = "home",
  about = "about",
  contact = "contact",
  faq = "faq",
  documents = "documents",
  APPLICATIONS_KINDERGARDEN = "applications-kindergarden",
  APPLICATIONS_SCHOOL = "applications-school",
  APPLICATIONS_BASIC = "applications-basic",
  APPLICATIONS_ADVANCED = "applications-advanced",
  APPLICATIONS_CONDITION = "applications-condition",
}

export enum Content {
  normal = "normal",
  bold = "bold",
  link = "link",
  blank = "blank",
}

export type Fragment = {
  output: string;
  type: Content;
  href?: string;
};

export type HeadlineFragment = {
  headline: string;
  fragment: Array<Fragment>;
};

export type Option = {
  label: string;
  value: string;
};

export enum WeekDays {
  PO = "Pondělí",
  UT = "Úterý",
  ST = "Středa",
  CT = "Čtvrtek",
  PA = "Pátek",
}

export enum LectureTypes {
  KINDERGARDEN = "kindergarden",
  SCHOOL = "school",
  BASIC = "basic",
  ADVANCED = "advanced",
  CONDITION = "condition",
}

export type Lecture = Record<
  number,
  {
    lectureTimeId: string;
    aplications?: number;
    max: number;
  }
>;

export type LectureValue = Record<
  LectureTypes,
  {
    lectureTimes: LectureTime[];
    lectureDays: DayAbbr[];
    lectures: Record<string, Lecture>;
  }
>;

export type LectureOptionValue = {
  label: string;
  value: string;
};

export type LectureOption = {
  label: WeekDays;
  options: LectureOptionValue[];
};

export type LectureOptions = {
  kindergarden?: LectureOption[];
  school?: LectureOption[];
  basic?: LectureOption[];
  advanced?: LectureOption[];
  condition?: LectureOption[];
};

export type Sponsor = {
  image: StaticImageData;
  href: string;
  name: string;
};

export type Service = {
  id: number;
  headline: string;
  text: string;
  image: StaticImageData;
  alt: string;
  name: ScrollSections;
  lectureType?: LectureTypes;
  url?: string;
  price?: string;
  time?: number;
  priceListHref?: string;
};

export type Dropdown = {
  href: string;
  scrollTarget?: ScrollSections;
  output: string;
};

export type NavLink = Dropdown & {
  dropdown?: Dropdown[];
};

export interface Contact {
  headline: string;
  icon: StaticImageData;
  fragment: Array<Fragment>;
}

export type GlobalSpreadsheetData = {
  firstName?: string;
  lastName?: string;
  gender?: string;
  personalIdNum?: string;
  dateOfBirth?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  postCode?: string;
  alergy?: string;
  lessonsPrice?: string;
  healthIssues?: string;
  level?: string;
  lessonsDayTime?: string;
};

export type SchoolSpreadsheetData = {
  schoolName?: string;
  address?: string;
  identifier?: string;
  contactPerson?: string;
  contactPersonPhone?: string;
  contactPersonEmail?: string;
  lessonsPrice?: string;
  childrenCount?: string;
  level?: string;
  lessonsDayTime?: string;
  midTerm?: string;
  notes?: string;
};

export type LectureTime = {
  id: string;
  from: string;
  to: string;
};

export type DayAbbr = "po" | "ut" | "st" | "ct" | "pa";
// export enum DayAbbrDiacritics = "Po" | "Út" | "St" | "Čt" | "Pá";
export enum DayAbbrDiacritics {
  PO = "PO",
  UT = "Út",
  ST = "St",
  CT = "Čt",
  PA = "Pá",
}

export type GoogleSheetRowType = {
  "Adresa a číslo popisné"?: string;
  Adresa?: string;
  Alergie?: string;
  "Cenová kategorie": string;
  "Datum narození"?: string;
  "Den a čas"?: string;
  Email?: string;
  "Email kontaktní osoby"?: string;
  "IČ nebo DIČ"?: string;
  Jméno?: string;
  "Kontaktní osoba"?: string;
  Město?: string;
  "Název školy"?: string;
  Pohlaví?: string;
  Pololetí?: string;
  Poznámky?: string;
  "Počet dětí"?: number;
  PSČ?: string;
  Příjmení?: string;
  "Rodné číslo"?: string;
  Telefon?: string;
  "Telefon kontaktní osoby"?: string;
  "Zdravotní potíže"?: string;
  Úroveň: string;
  "Časová značka"?: string;
};

export const googleSheetKeyValuePairs: Record<number, LectureTypes> = {
  0: LectureTypes.KINDERGARDEN,
  1: LectureTypes.SCHOOL,
  2: LectureTypes.BASIC,
  3: LectureTypes.ADVANCED,
  4: LectureTypes.CONDITION,
};
