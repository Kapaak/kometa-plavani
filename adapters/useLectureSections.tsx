//images
import KindergardenService from "@/public/images/service-kindergarden.jpg";
import SchoolService from "@/public/images/service-school.jpg";
import CourseService from "@/public/images/service-course.jpg";
import BasicService from "@/public/images/service-basic.jpg";
import ConditionService from "@/public/images/service-condition.jpg";
//interfaces
import { Service, ScrollSections, LectureTypes } from "@/domains";

export const lectures: Service[] = [
  {
    id: 1,
    headline: "Plavání pro školky",
    text: ` Cílem naší výuky je adaptovat dítě na vodní prostředí. To konkrétně zahrnuje odstranění strachu z vody, potápění, splývání, rozvoj pocitu vody a skok do vody. Poté se děti učí základy jednotlivých plaveckých způsobů. Naše metodika odpovídá směrnicím MŠMT. Výuka se však přizpůsobuje aktuálním potřebám jednotlivců, což znamená, že děti vždy získají nové dovednosti. Zároveň klademe velký důraz na to, aby děti výuka bavila. Vhodné pro děti od 4 let.
      `,
    image: KindergardenService,
    alt: "dítě v bazénu pod vodou s brýlemi",
    name: ScrollSections.APPLICATIONS_KINDERGARDEN,
    lectureType: LectureTypes.KINDERGARDEN,
    url: "skolky",
    price: "2 040 Kč za dítě / pololetí",
    time: 45,
    priceListHref: "/files/CENIK_SKOLY_SKOLKY.pdf",
  },
  {
    id: 2,
    headline: "Plavání pro školy",
    text: ` Cílem naší výuky je adaptovat dítě na vodní prostředí. To konkrétně zahrnuje odstranění strachu z vody, potápění, splývání, rozvoj pocitu vody a skok do vody. Poté se děti učí základy jednotlivých plaveckých způsobů. Naše metodika odpovídá směrnicím MŠMT. Výuka se však přizpůsobuje aktuálním potřebám jednotlivců, což znamená, že děti vždy získají nové dovednosti. Zároveň klademe velký důraz na to, aby děti výuka bavila. Vhodné pro děti od 4 let.
      `,
    image: SchoolService,
    alt: "dítě v bazénu pod vodou s brýlemi",
    name: ScrollSections.APPLICATIONS_SCHOOL,
    lectureType: LectureTypes.SCHOOL,
    url: "skoly",
    price: "2 040 Kč za dítě / pololetí",
    time: 45,
  },
  {
    id: 3,
    headline: "Kurzy pro základní plavání",
    text: `
    Kurzy jsou určené pro děti, které se potřebují naučit plavat nebo se v plavání zdokonalit. Našim cílem je děti adaptovat na vodní prostředí. Navíc náš klub disponuje nově zpracovanou metodikou, díky které se děti naučí plavat rychle a zábavnou formou. Nejdůležitější pro nás je, aby děti měly z plavání radost.
      `,
    image: BasicService,
    alt: "plavec s hlavou pod vodou a deskou",
    name: ScrollSections.APPLICATIONS_BASIC,
    lectureType: LectureTypes.BASIC,
    url: "zakladni-plavani",
    price: "4 000 - 15 000 Kč",
    time: 55,
    priceListHref: "/files/CENIK_ODPOLEDNI_KURZY.pdf",
  },
  {
    id: 4,
    headline: "Zdokonalovací plavání",
    text: `Kurzy jsou určeny pro děti, co se nebojí plavat ve velkém bazénu, navíc již ovládají základy plavání a v plavání se chtějí zdokonalit. Pokud již plavat umí nabízíme možnost kondičního plavání, kde děti mohou zlepšit svou fyzickou kondici a věnovat se plavání ikdyž zatím neuvažují o kariéře závodního plavce.`,
    image: CourseService,
    alt: "dvě plavkyně na začátku dráhy čekající na start",
    name: ScrollSections.APPLICATIONS_ADVANCED,
    lectureType: LectureTypes.ADVANCED,
    url: "zdokonalovaci-plavani",
    price: "4 000 - 15 000 Kč",
    time: 55,
    priceListHref: "/files/CENIK_ODPOLEDNI_KURZY.pdf",
  },
  {
    id: 5,
    headline: "Kondiční plavání",
    text: `Kurzy jsou určeny pro děti, co se nebojí plavat ve velkém bazénu, navíc již ovládají základy plavání a v plavání se chtějí zdokonalit. Pokud již plavat umí nabízíme možnost kondičního plavání, kde děti mohou zlepšit svou fyzickou kondici a věnovat se plavání ikdyž zatím neuvažují o kariéře závodního plavce.`,
    image: ConditionService,
    alt: "dvě plavkyně na začátku dráhy čekající na start",
    name: ScrollSections.APPLICATIONS_CONDITION,
    lectureType: LectureTypes.CONDITION,
    url: "kondicni-plavani",
    price: "4 000 - 15 000 Kč",
    time: 55,
  },
];

export const useLectureSections = () => {
  return {
    lectures,
  };
};
