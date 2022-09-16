import { scroller } from "react-scroll";

export const scrollTo = (destination: string) => {
  scroller.scrollTo(destination, { smooth: true, offset: -100 });
};

export const isEven = (num: number) => {
  return num % 2 === 0;
};
