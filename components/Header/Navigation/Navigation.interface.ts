import { ScrollSections } from "@/domains";

export interface IDropdown {
  href: string;
  scrollTarget?: ScrollSections;
  output: string;
}

export interface INavLink extends IDropdown {
  dropdown?: Array<IDropdown>;
}

export { ScrollSections };
