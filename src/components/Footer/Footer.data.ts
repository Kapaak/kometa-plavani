import { Content, HeadlineFragment } from "~/domains";

export const data: HeadlineFragment[] = [
  {
    headline: "Kontaktní osoba",
    fragment: [
      {
        output: "Bc. Anna Matušová",
        type: Content.bold,
      },
      {
        output: "+420 773 708 287",
        type: Content.link,
      },
      {
        output: "plavaniluzanky@kometaplavani.cz",
        type: Content.link,
      },
      {
        output: "Sportovní 486/4, Brno 602 00",
        type: Content.normal,
      },
      {
        output: "Po - Pá: 8:00-15:30",
        type: Content.normal,
      },
    ],
  },
  {
    headline: "Užitečné odkazy",
    fragment: [
      {
        output: "Plavecké kurzy Kometa",
        type: Content.bold,
      },
      {
        output: "Kraví hora",
        type: Content.link,
        href: "https://www.plavanikometa.cz/kravi-hora/",
      },
      {
        output: "Kohoutovice",
        type: Content.link,
        href: "https://www.plavanikometa.cz/aquapark-kohoutovice/",
      },
      {
        output: "Bazénky",
        type: Content.link,
        href: "https://kometaplavani.cz/plavani-bazenky/bazenky/",
      },
      {
        output: "",
        type: Content.blank,
      },
      {
        output: "Tábory a letní akce",
        type: Content.bold,
      },
      {
        output: "Kraví hora",
        type: Content.link,
        href: "https://www.plavanikometa.cz/tabor-kravi-hora/",
      },
      {
        output: "Pisárky",
        type: Content.link,
        href: "https://www.plavanikometa.cz/tabor-pisarky/",
      },
      {
        output: "Lužánky",
        type: Content.link,
        href: "https://www.primestak-brno.cz/",
      },
    ],
  },
  {
    headline: "Informace",
    fragment: [
      { output: "GDPR", type: Content.normal },
      { output: "IČO: 44992432", type: Content.normal },
    ],
  },
];
