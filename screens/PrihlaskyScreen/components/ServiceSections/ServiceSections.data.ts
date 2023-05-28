//images
import KindergardenService from "@/public/images/service-kindergarden.jpg";
import SchoolService from "@/public/images/service-school.jpg";
import CourseService from "@/public/images/service-course.jpg";
//interfaces
import { Service, ScrollSections } from "@/domains";

export const data: Service[] = [
  {
    id: 1,
    headline: "Školky",
    text: ` Cílem naší výuky u dětí předškolního věku je adaptovat na vodní prostředí. To konkrétně zahrnuje odstranění strachu z vody, potápění, splývání, rozvoj pocitu vody a skok do vody. Poté se děti učí základy jednotlivých plaveckých způsobů.
    Navíc náš klub disponuje nově zpracovanou metodikou, díky které se děti naučí plavat rychle a zábavnou formou. Nejdůležitější pro nás je, aby děti měly z plavání radost.
    Výuka probíhá jednou týdně v bazénu, který má 30°C až 32°C . Délka lekce je 60 minut, ve kterých  se děti nejprve rozcvičí, poté následuje výuková jednotka a na závěr se děti protáhnou. Po dokončení kurzu děti obdrží vysvědčení. Doporučený počet lekcí je 20.
      `,
    image: KindergardenService,
    alt: "dítě v bazénu pod vodou s brýlemi",
    name: ScrollSections.kindergardens,
    url: "skolky",
  },
  {
    id: 2,
    headline: "Školy",
    text: `
    Na začátku děti rozdělíme do týmu, abychom zajistili jejich nejrychlejší rozvoj. 
Cílem je plavce naučit základům plavání. Děti budou plavat ve skupinách dle svých plaveckých dovedností. Našim úkolem je tyto dovednosti rozšířit a děti naučit plavecké způsoby kraul a znak. Ve druhé části kurzu se zařazujeme motoricky náročnější prsa a motýl. Počet lekcí není omezen. Naše metodika je v souladu s MŠMT koncipovaná na 20 hodin pro adaptaci na vodní prostředí dalších 20 hodin je věnováno výuce jednotlivých plaveckých způsobů. Každá výuková jednotka, ale probíhá dle aktuálních potřeb jednotlivců. Proto Vám můžeme zajistit, že si všechny děti odnesou vždy něco nového.
Děti mohou své nově nabyté dovednosti rozvíjet v našich navazujících kurzech.
Výuka probíhá jednou týdně v bazénu, dle výkonnosti jednotlivců. Délka lekce je 60 minut, ve kterých  se děti nejprve rozcvičí poté následuje výuková jednotka a na závěr se děti protáhnou. Po dokončení kurzu děti obdrží vysvědčení. 
      `,
    image: SchoolService,
    alt: "plavec s hlavou pod vodou a deskou",
    name: ScrollSections.schools,
    url: "skoly",
  },
  {
    id: 3,
    headline: "Kurzy",
    text: `Děti jsou rozdělovány do týmu dle jejich dovedností. Každá výuková jednotka se  
    probíhá dle aktuálních potřeb jednotlivců. Maximální počet dětí v jedné hodině je 55, počet lekcí není omezen. Součástí ceny je vždy pronájem bazénu, profesionální trenéři a kvalitní pomůcky, které pomohou zefektivnit výuku plavání.`,
    image: CourseService,
    alt: "dvě plavkyně na začátku dráhy čekající na start",
    name: ScrollSections.courses,
    url: "kurzy",
  },
];
