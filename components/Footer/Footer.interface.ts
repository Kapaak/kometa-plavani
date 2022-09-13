import { contentType } from "./data";

export interface IData {
  headline: string;
  fragment: Array<fragmentType>;
}

export type fragmentType = {
  output: string;
  type: contentType;
  href?: string;
};
