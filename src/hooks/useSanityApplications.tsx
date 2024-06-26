import { useMemo } from "react";

import _ from "lodash";

import {
  DayTimeCapacity,
  LectureDaysTimesCapacity,
  LectureTime,
  SanityCourse,
  WeekDaysNew,
} from "~/domains";

const DAYS: WeekDaysNew[] = ["pondeli", "utery", "streda", "ctvrtek", "patek"];

const convertCourseToLectureDays = (course: SanityCourse, key: string) => {
  const availableDays = DAYS.map((day) => {
    const dayData = course[day];

    if (dayData) return day;

    return "";
  });

  const filteredAvailableDays = availableDays?.filter((day) => day);

  return {
    [key]: {
      lectureDays: filteredAvailableDays,
    },
  };
};

const convertCourseToLectureTimes = (course: SanityCourse, key: string) => {
  const availableDays: LectureTime[] = DAYS.map((day) => {
    const dayData = course[day];

    if (dayData)
      return dayData.map((data) => {
        if (data?.start) {
          return {
            id: data.start,
            from: `${data.start}:00`,
            to: `${data.start + 1}:00`,
          };
        }
      });

    return {};
  });

  const filteredAvailableDays = availableDays?.filter((day) => !_.isEmpty(day));

  const availableDaysWithoutDuplicates = _.uniqBy(
    filteredAvailableDays.flat(),
    "id"
  );

  const sortedAvailableDays = _.sortBy(
    availableDaysWithoutDuplicates,
    (o) => o?.id
  );

  return {
    [key]: {
      lectureTimes: sortedAvailableDays,
    },
  };
};

const convertCourseToLectureCapacity = (course: SanityCourse, key: string) => {
  let lectureDaysTimesCapacity: Record<string, DayTimeCapacity> = {};

  DAYS.forEach((day) => {
    let dayTimeCapacity: DayTimeCapacity = {};
    const dayData = course[day];

    dayData?.forEach((data) => {
      dayTimeCapacity = {
        ...dayTimeCapacity,
        //the object is duplicate here because as of now we have the same object for 1.pololeti and 2.pololeti
        [data.start]: {
          1: {
            lectureTimeId: data.start,
            max: data.capacity,
            aplications: 0,
            discount: data.discount ?? 0,
            skillLevelId: data?.skillLevel,
          },
          2: {
            lectureTimeId: data.start,
            max: data.capacity,
            aplications: 0,
            discount: data.discount ?? 0,
            skillLevelId: data?.skillLevel,
          },
        },
      };
    });

    lectureDaysTimesCapacity = {
      ...lectureDaysTimesCapacity,
      [day]: dayTimeCapacity,
    };
  });

  //remove day objects where they are empty
  const filteredDays = _.omitBy(lectureDaysTimesCapacity, _.isEmpty);

  return {
    [key]: {
      lectures: filteredDays,
    },
  };
};

export const useSanityApplications = (courses: SanityCourse[]) => {
  const coursesInformation = useMemo(() => {
    return _.keyBy(
      courses.map((course) => {
        const { duration, price, title, value, age } = course;

        return {
          duration,
          price,
          title,
          value,
          age,
          file: course?.file?.asset?.url,
        };
      }),
      "value"
    );
  }, [courses]);

  const lectureDaysTimesCapacity = useMemo(() => {
    let lectureDaysTimesCapacityObj: LectureDaysTimesCapacity = {};
    courses?.forEach((course) => {
      const lectureDays = convertCourseToLectureDays(course, course.value);
      const lectureTimes = convertCourseToLectureTimes(course, course.value);
      const lectureCapacity = convertCourseToLectureCapacity(
        course,
        course.value
      );

      const merged = _.mergeWith(lectureDays, lectureTimes, lectureCapacity);

      lectureDaysTimesCapacityObj = {
        ...lectureDaysTimesCapacityObj,
        ...merged,
      };
    });

    return lectureDaysTimesCapacityObj;
    // if something goes wrong use this manual setup
    // return DUMMY_LECTURE_DAYS_TIMES_CAPACITY;
  }, [courses]);

  return {
    lectureDaysTimesCapacity,
    coursesInformation,
  };
};
