import { scrollTargets } from "@/utils/interfaces";
import { StaticImageData } from "next/image";

export interface IService {
  id: number;
  headline: string;
  text: string;
  image: StaticImageData;
  name: scrollTargets;
  alt: string;
  url: string;
}

export interface ISection extends Omit<IService, "id"> {
  isEven: boolean;
}

export { scrollTargets };
