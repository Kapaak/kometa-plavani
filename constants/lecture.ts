import { LectureValue, WeekDays } from "@/domains";

//kazda hodnota ve dni je zdvojena, protoze 0 je 1. pololetí a 1 je 2. pololetí
export const LECTURE_DATA: LectureValue = {
  kindergarden: {
    lectureTimes: [
      {
        id: "9",
        from: "9:00",
        to: "10:00",
      },
      {
        id: "10",
        from: "10:00",
        to: "11:00",
      },
    ],
    lectureDays: ["po", "pa"],
    lectures: {
      po: {
        9: [
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
        ],
        10: [
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
        ],
      },
      pa: {
        9: [
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
        ],
        10: [
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
        ],
      },
    },
  },
  school: {
    lectureTimes: [
      {
        id: "9",
        from: "9:00",
        to: "10:00",
      },
      {
        id: "10",
        from: "10:00",
        to: "11:00",
      },
    ],
    lectureDays: ["po", "ut", "st", "ct", "pa"], //tohle bych si umel dokazat vytahnout z lectures, kdyz data dostanu ze sanity, to stejny ty data nad
    lectures: {
      po: {
        //array z toho duvodu, ze v prvnim indexu je 1. semestr a v druhem 2. semestr
        //defaultne u vsech ostatnich budu vzdy pouzivat [0], abych mohl met vsude stejnej format
        9: [
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
        ],
        10: [
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
        ],
      },
      ut: {
        9: [
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
        ],
        10: [
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
        ],
      },
      st: {
        9: [
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
        ],
        10: [
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
        ],
      },
      ct: {
        9: [
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
        ],
        10: [
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
        ],
      },
      pa: {
        9: [
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "9",
            max: 30,
            aplications: 0,
          },
        ],
        10: [
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "10",
            max: 30,
            aplications: 0,
          },
        ],
      },
    },
  },
  basic: {
    lectureTimes: [
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
    ],
    lectureDays: ["po", "ut", "st", "ct", "pa"],
    lectures: {
      po: {
        15: [
          {
            lectureTimeId: "15",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "15",
            max: 30,
            aplications: 0,
          },
        ],
      },
      ut: {
        15: [
          {
            lectureTimeId: "15",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "15",
            max: 30,
            aplications: 0,
          },
        ],
        16: [
          {
            lectureTimeId: "16",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "16",
            max: 30,
            aplications: 0,
          },
        ],
      },
      st: {
        15: [
          {
            lectureTimeId: "15",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "15",
            max: 30,
            aplications: 0,
          },
        ],
      },
      ct: {
        15: [
          {
            lectureTimeId: "15",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "15",
            max: 30,
            aplications: 0,
          },
        ],
        17: [
          {
            lectureTimeId: "17",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "17",
            max: 30,
            aplications: 0,
          },
        ],
      },
      pa: {
        16: [
          {
            lectureTimeId: "16",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "16",
            max: 30,
            aplications: 0,
          },
        ],
        17: [
          {
            lectureTimeId: "17",
            max: 30,
            aplications: 0,
          },
          {
            lectureTimeId: "17",
            max: 30,
            aplications: 0,
          },
        ],
      },
    },
  },
  advanced: {
    lectureTimes: [
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
    ],
    lectureDays: ["po", "st", "pa"],
    lectures: {
      po: {
        15: [
          {
            lectureTimeId: "15",
            max: 15,
            aplications: 0,
          },
        ],
      },
      st: {
        15: [
          {
            lectureTimeId: "15",
            max: 15,
            aplications: 0,
          },
        ],
      },
      pa: {
        16: [
          {
            lectureTimeId: "16",
            max: 15,
            aplications: 0,
          },
        ],
        17: [
          {
            lectureTimeId: "17",
            max: 15,
            aplications: 0,
          },
        ],
      },
    },
  },
  condition: {
    lectureTimes: [
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
    ],
    lectureDays: ["po", "ut", "st", "ct", "pa"],
    lectures: {
      po: {
        15: [
          {
            lectureTimeId: "15",
            max: 45,
            aplications: 0,
          },
        ],
        16: [
          {
            lectureTimeId: "16",
            max: 15,
            aplications: 0,
          },
        ],
        17: [
          {
            lectureTimeId: "17",
            max: 15,
            aplications: 0,
          },
        ],
      },
      ut: {
        16: [
          {
            lectureTimeId: "16",
            max: 15,
            aplications: 0,
          },
        ],
        17: [
          {
            lectureTimeId: "17",
            max: 15,
            aplications: 0,
          },
        ],
      },
      st: {
        15: [
          {
            lectureTimeId: "15",
            max: 45,
            aplications: 0,
          },
        ],
      },
      ct: {
        15: [
          {
            lectureTimeId: "15",
            max: 30,
            aplications: 0,
          },
        ],
        16: [
          {
            lectureTimeId: "16",
            max: 30,
            aplications: 0,
          },
        ],
        17: [
          {
            lectureTimeId: "17",
            max: 30,
            aplications: 0,
          },
        ],
      },
      pa: {
        15: [
          {
            lectureTimeId: "15",
            max: 15,
            aplications: 0,
          },
        ],
        16: [
          {
            lectureTimeId: "16",
            max: 45,
            aplications: 0,
          },
        ],
        17: [
          {
            lectureTimeId: "17",
            max: 15,
            aplications: 0,
          },
        ],
      },
    },
  },
};

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
      label: WeekDays.PO,
      options: [
        { label: "9:00 - 10:00", value: "po_9" },
        { label: "10:00 - 11:00", value: "po_10" },
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
    {
      label: WeekDays.PA,
      options: [
        { label: "16:00 - 17:00", value: "pa_16" },
        { label: "17:00 - 18:00", value: "pa_17" },
      ],
    },
  ],
  condition: [
    {
      label: WeekDays.PO,
      options: [
        { label: "15:00 - 16:00", value: "po_15" },
        { label: "16:00 - 17:00", value: "po_16" },
        { label: "17:00 - 18:00", value: "po_17" },
      ],
    },
    {
      label: WeekDays.UT,
      options: [
        { label: "16:00 - 17:00", value: "ut_16" },
        { label: "17:00 - 18:00", value: "ut_17" },
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
        { label: "16:00 - 17:00", value: "ct_16" },
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
};
