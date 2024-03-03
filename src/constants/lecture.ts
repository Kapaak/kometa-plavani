import { LectureDaysTimesCapacity, WeekDays } from "~/domains";

//BACKUP DATA IF SANITY BREAKS
export const DUMMY_LECTURE_DAYS_TIMES_CAPACITY: LectureDaysTimesCapacity = {
  kindergarden: {
    lectureDays: ["pondeli", "patek"],
    lectureTimes: [
      {
        id: 9,
        from: "9:00",
        to: "10:00",
      },
      {
        id: 10,
        from: "10:00",
        to: "11:00",
      },
    ],
    lectures: {
      pondeli: {
        9: {
          1: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
        },
        10: {
          1: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
        },
      },
      patek: {
        9: {
          1: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
        },
        10: {
          1: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
        },
      },
    },
  },
  school: {
    lectureDays: ["pondeli", "utery", "streda", "ctvrtek", "patek"],
    lectureTimes: [
      {
        id: 9,
        from: "9:00",
        to: "10:00",
      },
      {
        id: 10,
        from: "10:00",
        to: "11:00",
      },
    ],
    lectures: {
      pondeli: {
        9: {
          1: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
        },
        10: {
          1: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
        },
      },
      utery: {
        9: {
          1: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
        },
        10: {
          1: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
        },
      },
      streda: {
        9: {
          1: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
        },
        10: {
          1: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
        },
      },
      ctvrtek: {
        9: {
          1: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
        },
        10: {
          1: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
        },
      },
      patek: {
        9: {
          1: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 9,
            max: 30,
            aplications: 0,
          },
        },
        10: {
          1: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 10,
            max: 30,
            aplications: 0,
          },
        },
      },
    },
  },
  basic: {
    lectureDays: ["pondeli", "utery", "streda", "ctvrtek", "patek"],
    lectureTimes: [
      {
        id: 15,
        from: "15:00",
        to: "16:00",
      },
      {
        id: 16,
        from: "16:00",
        to: "17:00",
      },
      {
        id: 17,
        from: "17:00",
        to: "18:00",
      },
    ],
    lectures: {
      pondeli: {
        15: {
          1: {
            lectureTimeId: 15,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 15,
            max: 30,
            aplications: 0,
          },
        },
      },
      utery: {
        15: {
          1: {
            lectureTimeId: 15,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 15,
            max: 30,
            aplications: 0,
          },
        },
        16: {
          1: {
            lectureTimeId: 16,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 16,
            max: 30,
            aplications: 0,
          },
        },
      },
      streda: {
        15: {
          1: {
            lectureTimeId: 15,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 15,
            max: 30,
            aplications: 0,
          },
        },
      },
      ctvrtek: {
        15: {
          1: {
            lectureTimeId: 15,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 15,
            max: 30,
            aplications: 0,
          },
        },
        17: {
          1: {
            lectureTimeId: 17,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 17,
            max: 30,
            aplications: 0,
          },
        },
      },
      patek: {
        16: {
          1: {
            lectureTimeId: 16,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 16,
            max: 30,
            aplications: 0,
          },
        },
        17: {
          1: {
            lectureTimeId: 17,
            max: 30,
            aplications: 0,
          },
          2: {
            lectureTimeId: 17,
            max: 30,
            aplications: 0,
          },
        },
      },
    },
  },
  advanced: {
    lectureDays: ["pondeli", "streda", "patek"],
    lectureTimes: [
      {
        id: 15,
        from: "15:00",
        to: "16:00",
      },
      {
        id: 16,
        from: "16:00",
        to: "17:00",
      },
      {
        id: 17,
        from: "17:00",
        to: "18:00",
      },
    ],
    lectures: {
      pondeli: {
        15: {
          1: {
            lectureTimeId: 15,
            max: 15,
            aplications: 0,
          },
        },
      },
      streda: {
        15: {
          1: {
            lectureTimeId: 15,
            max: 15,
            aplications: 0,
          },
        },
      },
      patek: {
        16: {
          1: {
            lectureTimeId: 16,
            max: 15,
            aplications: 0,
          },
        },
        17: {
          1: {
            lectureTimeId: 17,
            max: 15,
            aplications: 0,
          },
        },
      },
    },
  },
  condition: {
    lectureDays: ["pondeli", "utery", "streda", "ctvrtek", "patek"],
    lectureTimes: [
      {
        id: 15,
        from: "15:00",
        to: "16:00",
      },
      {
        id: 16,
        from: "16:00",
        to: "17:00",
      },
      {
        id: 17,
        from: "17:00",
        to: "18:00",
      },
    ],
    lectures: {
      pondeli: {
        15: {
          1: {
            lectureTimeId: 15,
            max: 45,
            aplications: 0,
          },
        },
        16: {
          1: {
            lectureTimeId: 16,
            max: 15,
            aplications: 0,
          },
        },
        17: {
          1: {
            lectureTimeId: 17,
            max: 15,
            aplications: 0,
          },
        },
      },
      utery: {
        16: {
          1: {
            lectureTimeId: 16,
            max: 15,
            aplications: 0,
          },
        },
        17: {
          1: {
            lectureTimeId: 17,
            max: 15,
            aplications: 0,
          },
        },
      },
      streda: {
        15: {
          1: {
            lectureTimeId: 15,
            max: 45,
            aplications: 0,
          },
        },
      },
      ctvrtek: {
        15: {
          1: {
            lectureTimeId: 15,
            max: 30,
            aplications: 0,
          },
        },
        16: {
          1: {
            lectureTimeId: 16,
            max: 30,
            aplications: 0,
          },
        },
        17: {
          1: {
            lectureTimeId: 17,
            max: 30,
            aplications: 0,
          },
        },
      },
      patek: {
        15: {
          1: {
            lectureTimeId: 15,
            max: 15,
            aplications: 0,
          },
        },
        16: {
          1: {
            lectureTimeId: 16,
            max: 45,
            aplications: 0,
          },
        },
        17: {
          1: {
            lectureTimeId: 17,
            max: 15,
            aplications: 0,
          },
        },
      },
    },
  },
};

//BACKUP DATA IF SANITY BREAKS
export const LECTURE_OPTIONS = {
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
        { label: "17:00 - 18:00", value: "po_17" },
      ],
    },
    {
      label: WeekDays.UT,
      options: [{ label: "16:00 - 17:00", value: "ut_16" }],
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
