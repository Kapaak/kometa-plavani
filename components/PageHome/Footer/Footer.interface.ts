export interface IData {
  headline: string;
  fragment: Array<fragmentType>;
}

type outputArr = {
  imageSrc: string;
  link: string;
};

type Tree<T> = T | Array<Tree<T>>;

export type fragmentType = {
  output: string;
  type: string;
  outputArr?: outputArr[];
};
