//interfaces
import { StaticImageData } from "next/image";
import { scrollTargets } from "@/utils/interfaces";

export interface IService {
  headline: string;
  text: string;
  image: StaticImageData;
  alt: string;
  scrollTarget: scrollTargets;
}

export { scrollTargets };
