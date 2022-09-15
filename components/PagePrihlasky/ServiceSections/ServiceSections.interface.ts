import { scrollTargets } from "@/utils/interfaces";
import { StaticImageData } from "next/image";

export interface IService {
  id: number;
  headline: string;
  fullText: string;
  image: StaticImageData;
  name: scrollTargets;
}

export interface ISection extends Omit<IService, "id"> {
  isEven: boolean;
}

export { scrollTargets };
