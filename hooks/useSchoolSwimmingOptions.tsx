import { RadioOption } from "@/domains";

const lessonOptions = [
  {
    label:
      "2040 Kč - pololetí, 1x týdně - cca 17 lekcí ve vybrané skupince / na 1 žáka",
    value: "2040 Kč",
    lessonsPerWeek: 1,
  },
];

const highLevelOptions = [
  {
    label: "Pondělí",
    options: [
      { label: "9:00 - 10:00", value: "po_9" },
      { label: "10:00 - 11:00", value: "po_10" },
    ],
  },
  {
    label: "Úterý",
    options: [
      { label: "9:00 - 10:00", value: "ut_9" },
      { label: "10:00 - 11:00", value: "ut_10" },
    ],
  },
  {
    label: "Středa",
    options: [
      { label: "9:00 - 10:00", value: "st_9" },
      { label: "10:00 - 11:00", value: "st_10" },
    ],
  },
  {
    label: "Čtvrtek",
    options: [
      { label: "9:00 - 10:00", value: "ct_9" },
      { label: "10:00 - 11:00", value: "ct_10" },
    ],
  },
  {
    label: "Pátek",
    options: [
      { label: "9:00 - 10:00", value: "pa_9" },
      { label: "10:00 - 11:00", value: "pa_10" },
    ],
  },
];

const lowLevelOptions = [
  {
    label: "Pátek",
    options: [{ label: "10:00 - 11:00", value: "pa_10" }],
  },
];

const radioOptions: RadioOption[] = [
  { label: "Školka", value: "školka", level: "lower" },
  { label: "Škola", value: "škola", level: "higher" },
];

export const useSchoolSwimmingOptions = () => {
  //tady ty options budu dostavat ze sanity
  return {
    lessonOptions,
    radioOptions,
    lowLevelOptions,
    highLevelOptions,
  };
};
