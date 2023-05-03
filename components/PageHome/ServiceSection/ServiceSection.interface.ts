//interfaces
import { StaticImageData } from "next/image";
import { ScrollSections } from "@/domains";

export interface IService {
  headline: string;
  text: string;
  image: StaticImageData;
  alt: string;
  scrollTarget: ScrollSections;
}

export { ScrollSections };
