import { LectureOptions, WeekDays } from "@/domains";

export const LECTURE_OPTIONS: LectureOptions = {
  //nevim jestli bude fungovat, v tom aktualnim mam misto lectures options
  //stacilo by prejmenovat, ale to lectures tu dava vetsi smysl
  //pouziva se u SELECT komponentu
  kindergarden: [
    {
      label: WeekDays.PA,
      lectures: [{ label: "10:00 - 11:00", value: "pa_10" }], //toto je kvuli Select component
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
      lectures: [
        { label: "9:00 - 10:00", value: "po_9" },
        { label: "10:00 - 11:00", value: "po_10" },
      ],
    },
    {
      label: WeekDays.UT,
      lectures: [
        { label: "9:00 - 10:00", value: "ut_9" },
        { label: "10:00 - 11:00", value: "ut_10" },
      ],
    },
    {
      label: WeekDays.ST,
      lectures: [
        { label: "9:00 - 10:00", value: "st_9" },
        { label: "10:00 - 11:00", value: "st_10" },
      ],
    },
    {
      label: WeekDays.CT,
      lectures: [
        { label: "9:00 - 10:00", value: "ct_9" },
        { label: "10:00 - 11:00", value: "ct_10" },
      ],
    },
    {
      label: WeekDays.PA,
      lectures: [
        { label: "9:00 - 10:00", value: "pa_9" },
        { label: "10:00 - 11:00", value: "pa_10" },
      ],
    },
  ],
  basic: [
    {
      label: WeekDays.PO,
      lectures: [{ label: "15:00 - 16:00", value: "po_15" }],
    },
    {
      label: WeekDays.UT,
      lectures: [
        { label: "15:00 - 16:00", value: "ut_15" },
        { label: "16:00 - 17:00", value: "ut_16" },
      ],
    },
    {
      label: WeekDays.ST,
      lectures: [{ label: "15:00 - 16:00", value: "st_15" }],
    },
    {
      label: WeekDays.CT,
      lectures: [
        { label: "15:00 - 16:00", value: "ct_15" },
        { label: "17:00 - 18:00", value: "ct_17" },
      ],
    },
    {
      label: WeekDays.PA,
      lectures: [
        { label: "15:00 - 16:00", value: "pa_15" },
        { label: "16:00 - 17:00", value: "pa_16" },
        { label: "17:00 - 18:00", value: "pa_17" },
      ],
    },
  ],
  advanced: [
    {
      label: WeekDays.PO,
      lectures: [{ label: "15:00 - 16:00", value: "po_15" }],
    },

    {
      label: WeekDays.ST,
      lectures: [{ label: "15:00 - 16:00", value: "st_15" }],
    },
  ],
  condition: [
    {
      label: WeekDays.PO,
      lectures: [{ label: "15:00 - 16:00", value: "po_15" }],
    },

    {
      label: WeekDays.ST,
      lectures: [{ label: "15:00 - 16:00", value: "st_15" }],
    },
    {
      label: WeekDays.PA,
      lectures: [
        { label: "16:00 - 17:00", value: "pa_16" },
        { label: "17:00 - 18:00", value: "pa_17" },
      ],
    },
  ],
};
