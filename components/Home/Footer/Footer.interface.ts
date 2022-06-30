export interface IData {
  headline: string;
  info: Array<infoType>;
}

export type infoType = {
  output: string;
  type: string;
};
