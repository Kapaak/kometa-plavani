import { contentType, fragmentType } from "@/utils/interfaces";

export interface IData {
  headline: string;
  fragment: Array<fragmentType>;
}

export { contentType };
export type { fragmentType };
