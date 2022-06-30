export interface IData {
  headline: string;
  fragment: Array<fragmentType>;
}

export type fragmentType = {
  output: string;
  type: string;
};
