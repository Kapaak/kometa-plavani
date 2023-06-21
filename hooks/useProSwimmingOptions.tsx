import { RadioOption } from "@/domains";

const lessonOptions = [
  {
    label: "4000 Kč - pololetí, 1 x týdně - cca 17 lekcí ve vybrané skupince",
    value: "4000 Kč",
    lessonsPerWeek: 1,
  },
  {
    label:
      "7700 Kč - celý školní rok, 1 x týdně - cca 34 lekcí ve vybrané skupince",
    value: "7700 Kč",
    lessonsPerWeek: 1,
  },
  {
    label: "7500 Kč - pololetí, 2x týdně - cca 34 lekcí ve vybrané skupince",
    value: "7500 Kč",
    lessonsPerWeek: 2,
  },
  {
    label:
      "14500 Kč - celý školní rok, 2x týdně - cca 68 lekcí ve vybrané skupince",
    value: "14500 Kč",
    lessonsPerWeek: 2,
  },
  {
    label: "9000 Kč - pololetí, 3x týdně - cca 51 lekcí ve vybrané skupince",
    value: "9000 Kč",
    lessonsPerWeek: 3,
  },
  {
    label:
      "15000 Kč - celý školní rok, 3x týdně - cca 102 lekcí ve vybrané skupince",
    value: "15000 Kč",
    lessonsPerWeek: 3,
  },
];

const lowLevelOptions = [
  {
    label: "Pondělí",
    options: [{ label: "15:00 - 16:00", value: "po_15" }],
  },

  {
    label: "Středa",
    options: [{ label: "15:00 - 16:00", value: "st_15" }],
  },
];

const highLevelOptions = [
  {
    label: "Pondělí",
    options: [{ label: "15:00 - 16:00", value: "po_15" }],
  },

  {
    label: "Středa",
    options: [{ label: "15:00 - 16:00", value: "st_15" }],
  },
  {
    label: "Pátek",
    options: [
      { label: "16:00 - 17:00", value: "pa_16" },
      { label: "17:00 - 18:00", value: "pa_17" },
    ],
  },
];

const radioOptions: RadioOption[] = [
  {
    label: "Zdokonalovací plavání",
    value: "zdokonalovací",
    level: "lower",
  },
  { label: "Kondiční plavání", value: "kondiční", level: "higher" },
];

export const useProSwimmingOptions = () => {
  //tady ty options budu dostavat ze sanity
  return {
    lessonOptions,
    radioOptions,
    lowLevelOptions,
    highLevelOptions,
  };
};
