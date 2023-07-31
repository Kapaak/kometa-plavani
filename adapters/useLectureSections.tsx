//images
import KindergardenLecture from "@/public/images/service-kindergarden.jpg";
import SchoolLecture from "@/public/images/service-school.jpg";
import AdvancedLecture from "@/public/images/service-advanced.jpg";
import BasicLecture from "@/public/images/service-basic.jpg";
import ConditionLecture from "@/public/images/service-condition.jpg";
//interfaces
import { Service, ScrollSections, LectureTypes } from "@/domains";

export const lectures: Record<string, Service[]> = {
  homePage: [
    {
      id: 1,
      headline: "Školy a školky",
      text: "Cílem naší výuky je adaptovat dítě na vodní prostředí.",
      image: SchoolLecture,
      alt: "dítě v bazénu pod vodou s brýlemi",
      name: ScrollSections.APPLICATIONS_KINDERGARDEN,
    },
    {
      id: 2,
      headline: "Základní plavání",
      text: "Kurzy jsou určené pro děti, které se potřebují naučit plavat.",
      image: AdvancedLecture,
      alt: "plavec s hlavou pod vodou a deskou",
      name: ScrollSections.APPLICATIONS_SCHOOL,
    },
    {
      id: 3,
      headline: "Zdokonalovací a kondiční plavání",
      text: "Vhodné přo děti, co se nebojí plavat ve velkém bazénu, navíc již ovládají základy plavání.",
      image: ConditionLecture,
      alt: "dvě plavkyně na začátku dráhy",
      name: ScrollSections.APPLICATIONS_ADVANCED,
    },
  ],
  applicationsPage: [
    {
      id: 1,
      headline: "Plavání pro školky",
      text: `
      Cílem naší výuky u dětí předškolního věku je adaptovat na vodní prostředí. To konkrétně zahrnuje odstranění strachu z vody, potápění, splývání, rozvoj pocitu vody a skok do vody. Poté se děti učí základy jednotlivých plaveckých způsobů.
  Navíc náš klub disponuje nově zpracovanou metodikou, díky které se děti naučí plavat rychle a zábavnou formou. Nejdůležitější pro nás je, aby děti měly z plavání radost..
  Výuka probíhá jednou týdně v bazénu, který má 30°C až 32°C.
  
        `,
      image: KindergardenLecture,
      alt: "dítě v bazénu pod vodou s brýlemi",
      name: ScrollSections.APPLICATIONS_KINDERGARDEN,
      lectureType: LectureTypes.KINDERGARDEN,
      url: "skolky",
      price: "2 040 Kč za dítě / pololetí",
      time: 45,
      pricingDocument: "/files/CENIK_SKOLY_SKOLKY.pdf",
    },
    {
      id: 2,
      headline: "Plavání pro školy",
      text: `
      Cílem je naučit plavce základům plavání. Děti jsou na začátku rozděleny do týmů podle plaveckých dovedností pro jejich nejrychlejší rozvoj. V první části kurzu chceme rozšířit jejich plavecké dovednosti a naučit děti plavecké způsoby kraul a znak. V druhé části se zaměřujeme na náročnější styly prsa a motýl. Naše metodika odpovídá směrnicím MŠMT. Výuka se však přizpůsobuje aktuálním potřebám jednotlivců, což znamená, že děti vždy získají nové dovednosti.
        `,
      image: SchoolLecture,
      alt: "dítě v bazénu pod vodou s brýlemi",
      name: ScrollSections.APPLICATIONS_SCHOOL,
      lectureType: LectureTypes.SCHOOL,
      url: "skoly",
      price: "2 040 Kč za dítě / pololetí",
      time: 45,
      pricingDocument: "/files/CENIK_SKOLY_SKOLKY.pdf",
    },
    {
      id: 3,
      headline: "Kurzy pro základní plavání",
      text: `
      Kurzy jsou určené pro děti, které se potřebují naučit plavat. Našim cílem je děti adaptovat na vodní prostředí. Navíc náš klub disponuje nově zpracovanou metodikou, díky které se děti naučí plavat rychle a zábavnou formou. Nejdůležitější pro nás je, aby děti měly z plavání radost.
        `,
      image: BasicLecture,
      alt: "plavec sLecture pod vodou a deskou",
      name: ScrollSections.APPLICATIONS_BASIC,
      lectureType: LectureTypes.BASIC,
      url: "zakladni-plavani",
      price: "4 000 - 15 000 Kč",
      time: 55,
      pricingDocument: "/files/CENIK_KURZY.pdf",
    },
    {
      id: 4,
      headline: "Zdokonalovací plavání",
      text: `
      Kurzy jsou určené pro děti, které se v plavání chtějí zdokonalit. Náš klub disponuje nově zpracovanou metodikou, díky které se děti učí plavat rychle a zábavnou formou. Nejdůležitější pro nás je, aby děti měly z plavání radost. Mezi děti zdokonalovacího plavání patří ty, které umí kraul i znak a uplavou alespoň 100 metrů.
      `,
      image: AdvancedLecture,
      alt: "dvě plavkyně na začátku dráhy čekající na start",
      name: ScrollSections.APPLICATIONS_ADVANCED,
      lectureType: LectureTypes.ADVANCED,
      url: "zdokonalovaci-plavani",
      price: "4 000 - 15 000 Kč",
      time: 55,
      pricingDocument: "/files/CENIK_KURZY.pdf",
    },
    {
      id: 5,
      headline: "Kondiční plavání",
      text: `
      Kurzy jsou určeny pro děti, co se nebojí plavat ve velkém bazénu, navíc již ovládají základy plavání a v plavání se chtějí zdokonalit. Pokud již plavat umí nabízíme možnost kondičního plavání, kde děti mohou zlepšit svou fyzickou kondici a věnovat se plavání ikdyž zatím neuvažují o kariéře závodního plavce. Mezi děti kondičního plavání patří ty, které umí kraul, znak i prsa a uplavou alespoň 200 metrů.
      `,
      image: ConditionLecture,
      alt: "dvě plavkyně na začátku dráhy čekající na start",
      name: ScrollSections.APPLICATIONS_CONDITION,
      lectureType: LectureTypes.CONDITION,
      url: "kondicni-plavani",
      price: "4 000 - 15 000 Kč",
      time: 55,
      pricingDocument: "/files/CENIK_KURZY.pdf",
    },
  ],
};

export const useLectureSections = () => {
  return {
    lectures,
  };
};
