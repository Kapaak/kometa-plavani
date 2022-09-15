interface IDropdown {
  href: string;
  scrollTarget: scrollTargets;
  output: string;
}

export interface INavLink extends IDropdown {
  dropdown?: Array<IDropdown>;
}

export enum scrollTargets {
  home = "home",
  about = "about",
  application = "application",
  contact = "contact",
  skolky = "skolky",
  skoly = "skoly",
  kurzy = "kurzy",
}

export const data: Array<INavLink> = [
  {
    href: "/",
    scrollTarget: scrollTargets.home,
    output: "Domů",
  },
  {
    href: "/",
    scrollTarget: scrollTargets.about,
    output: "O nás",
  },
  {
    href: "/prihlasky",
    scrollTarget: scrollTargets.application,
    output: "Přihlášky",
    dropdown: [
      {
        href: "/prihlasky/skolky",
        scrollTarget: scrollTargets.skolky,
        output: "školky",
      },
      {
        href: "/prihlasky/skoly",
        scrollTarget: scrollTargets.skoly,
        output: "školy",
      },
      {
        href: "/prihlasky/kurzy",
        scrollTarget: scrollTargets.kurzy,
        output: "kurzy",
      },
    ],
  },
  {
    href: "/",
    scrollTarget: scrollTargets.contact,
    output: "Kontakt",
  },
];
