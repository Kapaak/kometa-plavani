import {
  DayTimeCapacity,
  LectureDaysTimesCapacity,
  LectureTime,
  SanityCourse,
  WeekDaysNew,
} from "@/domains";
import { useMemo } from "react";
import _ from "lodash";

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

  const removeDuplicates = _.uniqBy(filteredAvailableDays.flat(), "id");

  return {
    [key]: {
      lectureTimes: removeDuplicates,
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
          },
          2: {
            lectureTimeId: data.start,
            max: data.capacity,
            aplications: 0,
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
  const lectureDaysTimesCapacity = useMemo(() => {
    let lectureDaysTimesCapacityObj: LectureDaysTimesCapacity = {};
    courses.forEach((course) => {
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
  }, [courses]);

  return {
    courses: [],
    lectureDaysTimesCapacity,
  };
};
