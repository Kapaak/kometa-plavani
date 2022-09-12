import { scroller } from "react-scroll";

export const scrollTo = (destination: string) => {
  scroller.scrollTo(destination, { smooth: true, offset: -100 });
};
