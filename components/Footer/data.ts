import { IData } from "./Footer.interface";

export const data: Array<IData> = [
  {
    headline: "Kontakt",
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
    headline: "Vedení klubu",
    fragment: [
      {
        output: "Bc. Jiří Vlček BA",
        type: "bold",
      },
      {
        output: "Vedení klubu",
        type: "normal",
      },
      {
        output: "Mgr. Radek Vostrejž",
        type: "bold",
      },
      {
        output: "Předseda klubu",
        type: "normal",
      },
      {
        output: "Ing. Lenka Dřínovská",
        type: "bold",
      },
      {
        output: "Mistopředseda klubu",
        type: "normal",
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
