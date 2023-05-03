import { Fragment } from "@/domains";
import { StaticImageData } from "next/image";

export interface IContact {
  headline: string;
  icon: StaticImageData;
  fragment: Array<Fragment>;
}

export { Content } from "@/domains";
