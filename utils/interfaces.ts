export enum scrollTargets {
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

export enum contentType {
  normal = "normal",
  bold = "bold",
  link = "link",
  blank = "blank",
}

export type fragmentType = {
  output: string;
  type: contentType;
  href?: string;
};