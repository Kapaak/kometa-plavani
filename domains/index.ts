import { StaticImageData } from "next/image";

export type PageData = {
  spreadsheetId: string;
  name: Course;
  templateId: string;
  label: string;
};

export type Course =
  | "skoly-skolky"
  | "zdokonalovaci-plavani"
  | "zakladni-plavani";

export type Level = "lower" | "higher";

export enum ScrollSections {
  home = "home",
  about = "about",
  application = "application",
  contact = "contact",
  skolky = "skolky",
  skoly = "skoly",
  kurzy = "kurzy",
  kindergardens = "kindergardens",
  schools = "schools",
  courses = "courses",
  faq = "faq",
  documents = "documents",
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
  url?: string;
  price?: string;
  time?: number;
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
