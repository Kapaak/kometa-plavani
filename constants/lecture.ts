import { LectureOptions, WeekDays } from "@/domains";

export const LECTURE_PAYMENT_OPTIONS = {
  kindergarden: [
    {
      label:
        "2040 Kč - pololetí, 1x týdně - cca 17 lekcí ve vybrané skupince / na 1 žáka",
      value: "2040 Kč",
      lessonsPerWeek: 1,
    },
  ],
  school: [
    {
      label:
        "2040 Kč - pololetí, 1x týdně - cca 17 lekcí ve vybrané skupince / na 1 žáka",
      value: "2040 Kč",
      lessonsPerWeek: 1,
    },
  ],
  basic: [
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
  ],
  advanced: [
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
  ],
  condition: [
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
  ],
};

export const LECTURE_OPTIONS = {
  //nevim jestli bude fungovat, v tom aktualnim mam misto lecture options
  //stacilo by prejmenovat, ale to lecture tu dava vetsi smysl
  //pouziva se u SELECT komponentu
  kindergarden: [
    {
      label: WeekDays.PA,
      options: [{ label: "10:00 - 11:00", value: "pa_10" }], //toto je kvuli Select component
      // lectureTimes: [
      //   {
      //     id: "10",
      //     from: "10:00",
      //     to: "11:00",
      //   },
      // ],
    },
  ],
  school: [
    {
      label: WeekDays.PO,
      options: [
        { label: "9:00 - 10:00", value: "po_9" },
        { label: "10:00 - 11:00", value: "po_10" },
      ],
    },
    {
      label: WeekDays.UT,
      options: [
        { label: "9:00 - 10:00", value: "ut_9" },
        { label: "10:00 - 11:00", value: "ut_10" },
      ],
    },
    {
      label: WeekDays.ST,
      options: [
        { label: "9:00 - 10:00", value: "st_9" },
        { label: "10:00 - 11:00", value: "st_10" },
      ],
    },
    {
      label: WeekDays.CT,
      options: [
        { label: "9:00 - 10:00", value: "ct_9" },
        { label: "10:00 - 11:00", value: "ct_10" },
      ],
    },
    {
      label: WeekDays.PA,
      options: [
        { label: "9:00 - 10:00", value: "pa_9" },
        { label: "10:00 - 11:00", value: "pa_10" },
      ],
    },
  ],
  basic: [
    {
      label: WeekDays.PO,
      options: [{ label: "15:00 - 16:00", value: "po_15" }],
    },
    {
      label: WeekDays.UT,
      options: [
        { label: "15:00 - 16:00", value: "ut_15" },
        { label: "16:00 - 17:00", value: "ut_16" },
      ],
    },
    {
      label: WeekDays.ST,
      options: [{ label: "15:00 - 16:00", value: "st_15" }],
    },
    {
      label: WeekDays.CT,
      options: [
        { label: "15:00 - 16:00", value: "ct_15" },
        { label: "17:00 - 18:00", value: "ct_17" },
      ],
    },
    {
      label: WeekDays.PA,
      options: [
        { label: "15:00 - 16:00", value: "pa_15" },
        { label: "16:00 - 17:00", value: "pa_16" },
        { label: "17:00 - 18:00", value: "pa_17" },
      ],
    },
  ],
  advanced: [
    {
      label: WeekDays.PO,
      options: [{ label: "15:00 - 16:00", value: "po_15" }],
    },

    {
      label: WeekDays.ST,
      options: [{ label: "15:00 - 16:00", value: "st_15" }],
    },
  ],
  condition: [
    {
      label: WeekDays.PO,
      options: [{ label: "15:00 - 16:00", value: "po_15" }],
    },

    {
      label: WeekDays.ST,
      options: [{ label: "15:00 - 16:00", value: "st_15" }],
    },
    {
      label: WeekDays.PA,
      options: [
        { label: "16:00 - 17:00", value: "pa_16" },
        { label: "17:00 - 18:00", value: "pa_17" },
      ],
    },
  ],
};
