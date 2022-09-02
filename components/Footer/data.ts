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
        output: "annamatusova@kometa.com",
        type: "link",
      },
      {
        output: "Bauerova 321/5, Brno 613 00",
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
  {
    headline: "Sledujte nás",
    fragment: [
      {
        output: "",
        outputArr: [
          { imageSrc: "/icons/youtube.svg", link: "https://www.youtube.com/" },
          {
            imageSrc: "/icons/instagram.svg",
            link: "https://www.instagram.com/",
          },
          {
            imageSrc: "/icons/facebook.svg",
            link: "https://www.facebook.com/",
          },
        ],

        type: "icon",
      },
    ],
  },
];
