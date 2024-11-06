import { EnrollmentDetail, LectureTypes } from "~/domains";

export const courseEnrollmentData: EnrollmentDetail[] = [
  {
    spreadsheetId: "1925580387",
    name: "skolky",
    templateId: "d-59d5da971b4b4f61851ebd6dda8af4c6",
    label: "Školky",
    value: LectureTypes.KINDERGARDEN,
  },
  {
    spreadsheetId: "1899142510",
    name: "skoly",
    templateId: "d-59d5da971b4b4f61851ebd6dda8af4c6",
    label: "Školy",
    value: LectureTypes.SCHOOL,
  },
  {
    spreadsheetId: "508666225",
    name: "zakladni-plavani",
    templateId: "d-874de2c55ad944d890768e75b9b2969b",
    label: "Základní plavání",
    value: LectureTypes.BASIC,
  },
  {
    spreadsheetId: "646592576",
    name: "zdokonalovaci-plavani",
    templateId: "d-874de2c55ad944d890768e75b9b2969b",
    label: "Zdokonalovací plavání",
    value: LectureTypes.ADVANCED,
  },
  {
    spreadsheetId: "1180547156",
    name: "kondicni-plavani",
    templateId: "d-874de2c55ad944d890768e75b9b2969b",
    label: "Kondiční plavání",
    value: LectureTypes.CONDITION,
  },
  {
    spreadsheetId: "84149580",
    name: "plavani-pro-dospele",
    templateId: "d-5b15d722c6664a7e8f8c7c3152310875",
    label: "Plavání pro dospělé", //udává title na stránce /prihlasky/plavani-pro-dospele .. tady to vubec nema byt
    value: LectureTypes.ADULT,
  },
];
