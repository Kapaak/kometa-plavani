import { fragmentType } from "@/utils/interfaces";
import { StaticImageData } from "next/image";

export interface IContact {
  headline: string;
  icon: StaticImageData;
  fragment: Array<fragmentType>;
}

export { contentType } from "@/utils/interfaces";
