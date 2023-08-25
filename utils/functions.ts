import { PageRouteTranslation } from "@/domains";
import { scroller } from "react-scroll";
import * as Icons from "@phosphor-icons/react";

export type IconType = Icons.Icon;

export type KeyofIcons = keyof typeof Icons;

export const DynamicPhosphorIcon = ({ name }: { name: keyof typeof Icons }) =>
  Icons[name];

export const scrollTo = (destination: string) => {
  scroller.scrollTo(destination, { smooth: true, offset: -100 });
};

export const isEven = (num: number) => {
  return num % 2 === 0;
};

export const delay = (callback: () => void, delayInMs?: number) =>
  new Promise<void>((resolve) =>
    setTimeout(() => {
      callback();
      resolve();
    }, delayInMs ?? 500)
  );

export const createOption = (label: string, value: string) => {
  return { label, value };
};

export const getDayAndTimeFromString = (dayTime?: string) => {
  if (!dayTime || dayTime.length === 0) return { day: null, time: null };

  const [day, time] = dayTime.split("_");

  return { day, time };
};

export const getSemesterNumberFromString = (
  semester?: string
): number | null => {
  if (!semester || semester.length === 0) return null;

  const [semesterNumber] = semester.split(" ");

  return Number(semesterNumber);
};

export const getPageRouteTranslation = (pageRoute: string) => {
  switch (pageRoute) {
    case "/":
      return PageRouteTranslation.HOME;
    case "/prihlasky":
      return PageRouteTranslation.APPLICATIONS;
  }
};
