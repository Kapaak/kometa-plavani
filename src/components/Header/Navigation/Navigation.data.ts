import { NavLink, ScrollSections } from "~/domains";

export const data: NavLink[] = [
  {
    href: "/",
    scrollTarget: ScrollSections.home,
    output: "Domů",
  },
  {
    href: "/",
    scrollTarget: ScrollSections.about,
    output: "O nás",
  },
  // {
  //   href: "/prihlasky",
  //   output: "Přihlášky",
  //commented out, because it wont be needed on release
  // dropdown: [
  //   {
  //     href: "/prihlasky/skolky",
  //     scrollTarget: ScrollSections.skolky,
  //     output: "školky",
  //   },
  //   {
  //     href: "/prihlasky/skoly",
  //     scrollTarget: ScrollSections.skoly,
  //     output: "školy",
  //   },
  //   {
  //     href: "/prihlasky/kurzy",
  //     scrollTarget: ScrollSections.kurzy,
  //     output: "kurzy",
  //   },
  // ],
  // },
  {
    href: "/",
    scrollTarget: ScrollSections.faq,
    output: "Základní informace",
  },
  {
    href: "/",
    scrollTarget: ScrollSections.documents,
    output: "Dokumenty",
  },
  {
    href: "/",
    scrollTarget: ScrollSections.location,
    output: "Adresa",
  },
  {
    href: "/",
    scrollTarget: ScrollSections.contact,
    output: "Kontakt",
  },
  {
    href: "/blog",
    scrollTarget: ScrollSections.contact,
    output: "Blog",
  },
];
