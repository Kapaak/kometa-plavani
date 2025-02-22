import AdultLecture from "~/public/images/service-adult.jpg";
import AdvancedLecture from "~/public/images/service-advanced.png";
import BasicLecture from "~/public/images/service-basic.png";
import ConditionLecture from "~/public/images/service-condition.jpg";
import KindergardenLecture from "~/public/images/service-kindergarden.png";
import SchoolLecture from "~/public/images/service-school.png";

import { LectureTypes, ScrollSections, Service } from "~/domains";

const semesterRange = {
  first: ["září 2024 - leden 2025", "únor 2025 - červen 2025"],
  second: ["únor 2025 - červen 2025", "září 2025 - leden 2026"],
};

//pri uprave semesterLabel je potreba upravit i const [selectedSemester, setSelectedSemester] = useState<1 | 2>(1); z 1 na 2 a naopak
const activeSemesterRange = semesterRange.first;

export const lectures: Record<string, Service[]> = {
  homePage: [
    {
      id: 1,
      headline: "Základní plavání",
      text: "Kurzy jsou určené pro děti, které se potřebují naučit plavat.",
      image: BasicLecture,
      alt: "Děti v bazénu pod vodou s brýlemi",
      name: ScrollSections.APPLICATIONS_BASIC,
      tag: "děti od 4 let",
      price: "Od 4000 Kč",
    },
    {
      id: 2,
      headline: "Zdokonalovací plavání",
      text: "Kurzy jsou určené pro děti, které se v plavání chtějí zdokonalit.",
      image: AdvancedLecture,
      alt: "Dítě na plavecké lekci",
      name: ScrollSections.APPLICATIONS_ADVANCED,
      tag: "děti",
      price: "Od 4000 Kč",
    },

    {
      id: 3,
      headline: "Kondiční plavání",
      text: "Vhodné pro děti, co se nebojí plavat ve velkém bazénu, navíc již ovládají základy plavání.",
      image: ConditionLecture,
      alt: "Plavkyně uprostřed dráhy na plavecké lekci pro děti",
      name: ScrollSections.APPLICATIONS_CONDITION,
      tag: "děti",
      price: "Od 4000 Kč",
    },
    {
      id: 6,
      headline: "Plavání pro dospělé",
      text: "Určeno všem nadšencům, kterým bylo již 18 let a chtějí si zlepšit své plavecké dovednosti.",
      image: AdultLecture,
      alt: "Dospělý plavec u konce dráhy na plavecké lekci pro dospělé",
      name: ScrollSections.APPLICATIONS_ADULT,
      tag: "dospělí",
      price: "Od 4500 Kč",
    },
    {
      id: 4,
      headline: "Školky",
      text: "Cílem naší výuky je adaptovat dítě na vodní prostředí.",
      image: KindergardenLecture,
      alt: "Plavkyně ve vodě na bazénu Lužánky, která se nadechuje",
      name: ScrollSections.APPLICATIONS_KINDERGARDEN,
      tag: "organizace mšmt",
      price: "Od 2040 Kč",
    },
    {
      id: 5,
      headline: "Školy",
      text: "Cílem je naučit plavce základům plavání.",
      image: SchoolLecture,
      alt: "Plavec s plaveckými brýlemi v mělké vodě na bazénu Lužánky",
      name: ScrollSections.APPLICATIONS_SCHOOL,
      tag: "organizace mšmt",
      price: "Od 2040 Kč",
    },
  ],
  applicationsPage: [
    {
      id: 3,
      text: `
      Kurzy jsou určené pro děti, které se potřebují naučit plavat. Našim cílem je děti adaptovat na vodní prostředí. Navíc náš klub disponuje nově zpracovanou metodikou, díky které se děti naučí plavat rychle a zábavnou formou. Nejdůležitější pro nás je, aby děti měly z plavání radost.
        `,
      image: BasicLecture,
      alt: "Kurzy jsou určené pro děti, které se potřebují naučit plavat.",
      name: ScrollSections.APPLICATIONS_BASIC,
      lectureType: LectureTypes.BASIC,
      //pri uprave semesterLabel je potreba upravit i const [selectedSemester, setSelectedSemester] = useState<1 | 2>(1); z 1 na 2 a naopak
      semesterLabels: activeSemesterRange,
      url: "zakladni-plavani",
    },
    {
      id: 4,
      text: `
      Kurzy jsou určené pro děti, které se v plavání chtějí zdokonalit. Náš klub disponuje nově zpracovanou metodikou, díky které se děti učí plavat rychle a zábavnou formou. Nejdůležitější pro nás je, aby děti měly z plavání radost. Mezi děti zdokonalovacího plavání patří ty, které umí kraul i znak a uplavou alespoň 100 metrů.
      `,
      image: AdvancedLecture,
      alt: "Dítě na plavecké lekci",
      name: ScrollSections.APPLICATIONS_ADVANCED,
      lectureType: LectureTypes.ADVANCED,
      semesterLabels: activeSemesterRange,
      url: "zdokonalovaci-plavani",
    },
    {
      id: 5,
      text: `
      Kurzy jsou určeny pro děti, co se nebojí plavat ve velkém bazénu, navíc již ovládají základy plavání a v plavání se chtějí zdokonalit. Pokud již plavat umí nabízíme možnost kondičního plavání, kde děti mohou zlepšit svou fyzickou kondici a věnovat se plavání ikdyž zatím neuvažují o kariéře závodního plavce. Mezi děti kondičního plavání patří ty, které umí kraul, znak i prsa a uplavou alespoň 200 metrů.
      `,
      image: ConditionLecture,
      alt: "Plavkyně uprostřed dráhy na plavecké lekci pro děti",
      name: ScrollSections.APPLICATIONS_CONDITION,
      lectureType: LectureTypes.CONDITION,
      semesterLabels: activeSemesterRange,
      url: "kondicni-plavani",
    },
    {
      id: 6,
      text: `
      Určeno všem nadšencům, kterým bylo již 18 let a chtějí si zlepšit své plavecké dovednosti. Kurzy jsou vhodné pro úplné začátečníky i pokročilé.
Plavání je sport, díky kterému naberete tělesnou kondici, pomůže Vám zbavit se různých zdravotních problémů, ať už jde o bolest zad, kloubů nebo o problémy s dýcháním.
      `,
      image: AdultLecture,
      alt: "Dospělý plavec u konce dráhy na plavecké lekci pro dospělé",
      name: ScrollSections.APPLICATIONS_ADULT,
      lectureType: LectureTypes.ADULT,
      semesterLabels: activeSemesterRange,
      url: "plavani-pro-dospele",
    },
    {
      id: 1,
      text: `
      Cílem naší výuky u dětí předškolního věku je adaptovat na vodní prostředí. To konkrétně zahrnuje odstranění strachu z vody, potápění, splývání, rozvoj pocitu vody a skok do vody. Poté se děti učí základy jednotlivých plaveckých způsobů.
  Navíc náš klub disponuje nově zpracovanou metodikou, díky které se děti naučí plavat rychle a zábavnou formou. Nejdůležitější pro nás je, aby děti měly z plavání radost..
  Výuka probíhá jednou týdně v bazénu, který má 30°C až 32°C.
        `,
      image: KindergardenLecture,
      name: ScrollSections.APPLICATIONS_KINDERGARDEN,
      lectureType: LectureTypes.KINDERGARDEN,
      semesterLabels: activeSemesterRange,
      alt: "Plavkyně ve vodě na bazénu Lužánky, která se nadechuje",
      url: "skolky",
    },
    {
      id: 2,
      text: `
      Cílem je naučit plavce základům plavání. Děti jsou na začátku rozděleny do týmů podle plaveckých dovedností pro jejich nejrychlejší rozvoj. V první části kurzu chceme rozšířit jejich plavecké dovednosti a naučit děti plavecké způsoby kraul a znak. V druhé části se zaměřujeme na náročnější styly prsa a motýl. Naše metodika odpovídá směrnicím MŠMT. Výuka se však přizpůsobuje aktuálním potřebám jednotlivců, což znamená, že děti vždy získají nové dovednosti.
        `,
      image: SchoolLecture,
      name: ScrollSections.APPLICATIONS_SCHOOL,
      lectureType: LectureTypes.SCHOOL,
      semesterLabels: activeSemesterRange,
      alt: "Děti v bazénu pod vodou s brýlemi",
      url: "skoly",
    },
  ],
};

export const useLectureSections = () => {
  return {
    lectures,
  };
};
