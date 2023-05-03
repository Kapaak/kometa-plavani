export type Course = "skolky" | "skoly" | "kurzy";

export enum ScrollSections {
  home = "home",
  about = "about",
  application = "application",
  contact = "contact",
  skolky = "skolky",
  skoly = "skoly",
  kurzy = "kurzy",
  kindergardens = "kindergardens",
  schools = "schools",
  courses = "courses",
}

export enum Content {
  normal = "normal",
  bold = "bold",
  link = "link",
  blank = "blank",
}

export type Fragment = {
  output: string;
  type: Content;
  href?: string;
};

export interface HeadlineFragment {
  headline: string;
  fragment: Array<Fragment>;
}
