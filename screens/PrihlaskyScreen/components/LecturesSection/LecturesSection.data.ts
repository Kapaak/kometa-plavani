//images
import KindergardenService from "@/public/images/service-kindergarden.jpg";
import SchoolService from "@/public/images/service-school.jpg";
import CourseService from "@/public/images/service-course.jpg";
//interfaces
import { Service, ScrollSections, WeekDays } from "@/domains";

export const data: Service[] = [
  {
    id: 1,
    headline: "Školky",
    text: ` Cílem naší výuky je adaptovat dítě na vodní prostředí. To konkrétně zahrnuje odstranění strachu z vody, potápění, splývání, rozvoj pocitu vody a skok do vody. Poté se děti učí základy jednotlivých plaveckých způsobů. Naše metodika odpovídá směrnicím MŠMT. Výuka se však přizpůsobuje aktuálním potřebám jednotlivců, což znamená, že děti vždy získají nové dovednosti. Zároveň klademe velký důraz na to, aby děti výuka bavila. Vhodné pro děti od 4 let.
      `,
    image: KindergardenService,
    alt: "dítě v bazénu pod vodou s brýlemi",
    name: "kindergarden",
    url: "skolky",
    price: "2 040 Kč za dítě / pololetí",
    time: 45,
    priceListHref: "/files/CENIK_SKOLY_SKOLKY.pdf",
  },
  {
    id: 2,
    headline: "Školy",
    text: ` Cílem naší výuky je adaptovat dítě na vodní prostředí. To konkrétně zahrnuje odstranění strachu z vody, potápění, splývání, rozvoj pocitu vody a skok do vody. Poté se děti učí základy jednotlivých plaveckých způsobů. Naše metodika odpovídá směrnicím MŠMT. Výuka se však přizpůsobuje aktuálním potřebám jednotlivců, což znamená, že děti vždy získají nové dovednosti. Zároveň klademe velký důraz na to, aby děti výuka bavila. Vhodné pro děti od 4 let.
      `,
    image: KindergardenService,
    alt: "dítě v bazénu pod vodou s brýlemi",
    name: "school",
    url: "skoly",
    price: "2 040 Kč za dítě / pololetí",
    time: 45,
  },
  {
    id: 3,
    headline: "Základní plavání",
    text: `
    Kurzy jsou určené pro děti, které se potřebují naučit plavat nebo se v plavání zdokonalit. Našim cílem je děti adaptovat na vodní prostředí. Navíc náš klub disponuje nově zpracovanou metodikou, díky které se děti naučí plavat rychle a zábavnou formou. Nejdůležitější pro nás je, aby děti měly z plavání radost.
      `,
    image: SchoolService,
    alt: "plavec s hlavou pod vodou a deskou",
    name: "basic",
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
    name: "advanced",
    url: "zdokonalovaci-plavani",
    price: "4 000 - 15 000 Kč",
    time: 55,
    priceListHref: "/files/CENIK_ODPOLEDNI_KURZY.pdf",
  },
  {
    id: 5,
    headline: "Kondiční plavání",
    text: `Kurzy jsou určeny pro děti, co se nebojí plavat ve velkém bazénu, navíc již ovládají základy plavání a v plavání se chtějí zdokonalit. Pokud již plavat umí nabízíme možnost kondičního plavání, kde děti mohou zlepšit svou fyzickou kondici a věnovat se plavání ikdyž zatím neuvažují o kariéře závodního plavce.`,
    image: CourseService,
    alt: "dvě plavkyně na začátku dráhy čekající na start",
    name: "condition",
    url: "kondicni-plavani",
    price: "4 000 - 15 000 Kč",
    time: 55,
  },
];
