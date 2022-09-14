import { contentType } from "../utils/ContentRenderer";

export interface IData {
  headline: string;
  fragment: Array<fragmentType>;
}

export type fragmentType = {
  output: string;
  type: contentType;
  href?: string;
};
