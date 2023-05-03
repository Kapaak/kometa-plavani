import { ScrollSections } from "@/domains";
import { StaticImageData } from "next/image";

export interface IService {
  id: number;
  headline: string;
  text: string;
  image: StaticImageData;
  name: ScrollSections;
  alt: string;
  url: string;
}

export interface ISection extends Omit<IService, "id"> {
  isEven: boolean;
}

export { ScrollSections };
