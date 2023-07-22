import { scroller } from "react-scroll";

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
