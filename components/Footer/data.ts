import { IData } from "./Footer.interface";

export const data: Array<IData> = [
  {
    headline: "Kontaktní osoba",
    fragment: [
      {
        output: "Bc. Anna Matušová",
        type: "bold",
      },
      {
        output: "+420 606 354 747",
        type: "link",
      },
      {
        output: "plavaniluzanky@kometabrno.cz",
        type: "link",
      },
      {
        output: "Sportovní 486/4, Brno 602 00",
        type: "normal",
      },
      {
        output: "Po - Pá: 8:00-15:30",
        type: "normal",
      },
    ],
  },
  {
    headline: "Užitečné odkazy",
    fragment: [
      {
        output: "Plavecké kurzy Kometa",
        type: "bold",
      },
      {
        output: "Kraví hora",
        type: "link",
        href: "https://kometaplavani.cz/ucime-se-plavat/kravi-hora/",
      },
      {
        output: "Kohoutovice",
        type: "link",
        href: "https://kometaplavani.cz/plavani-bazenky/bazenky/aquapark-kohoutovice/",
      },
      {
        output: "Bazénky",
        type: "link",
        href: "https://kometaplavani.cz/plavani-bazenky/bazenky/",
      },
    ],
  },
  {
    headline: "Informace",
    fragment: [
      { output: "GDPR", type: "normal" },
      { output: "IČO: 123456", type: "normal" }, //dopln spravne ICO
    ],
  },
];
