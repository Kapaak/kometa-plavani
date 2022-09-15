//interfaces
import { StaticImageData } from "next/image";
import { scrollTargets } from "@/utils/interfaces";

export interface IService {
  headline: string;
  smallText: string;
  fullText: string;
  image: StaticImageData;
  scrollTarget: scrollTargets;
}

export { scrollTargets };
