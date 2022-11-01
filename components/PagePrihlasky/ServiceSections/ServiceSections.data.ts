//images
import KindergardenService from "@/public/images/service-kindergarden.jpg";
import SchoolService from "@/public/images/service-school.jpg";
import CourseService from "@/public/images/service-course.jpg";
//interfaces
import { IService } from "./ServiceSections.interface";
import { scrollTargets } from "./ServiceSections.interface";

export const data: IService[] = [
  {
    id: 1,
    headline: "Školky",
    text: `Cílem výuky je u dítěte odbourat strach z vody a naučit ho základním plaveckým dovednostem jako jsou splývání, kopání na břiše a zádech, potápění se a skákání do vody. Nejdůležitějším pro nás je, aby děti měly z plavání radost a výuka je bavila. 
      Po absolvování kurzu by dítě mělo být schopno v případě nečekaného pádu do vody zadržet dech a chvíli se udržet na hladině. Toto jim může zachránit život.
      Výuka probíhá 1x týdně po Vámi zvolenou dobu (10, 15, 20 týdnů). Jedna lekce trvá 45 min. Výuku dětem usnadní a zpříjemní nové pomůcky a spousta hraček. Každé dítě dostane po absolvování kurzu Mokré vysvědčení.
      `,
    image: KindergardenService,
    alt: "dítě v bazénu pod vodou s brýlemi",
    name: scrollTargets.kindergardens,
  },
  {
    id: 2,
    headline: "Školy",
    text: `Cílem je plavce naučit základům plavání. Děti budou plavat ve skupinách dle svých plaveckých dovedností. Našim úkolem je tyto dovednosti rozšířit a děti naučit plavecké způsoby kraul a znak. Koncem školního roku se zařazují motoricky náročnější prsa a motýl. Děti mohou své nově nabité dovednosti rozvíjet v našich navazujících kurzech. Výuka probíhá 1x týdně po Vámi zvolenou dobu (10, 15, 20 týdnů). Jedna lekce trvá 45 min. Výuku dětem usnadní a zpříjemní nové pomůcky. Každé dítě dostane po absolvování kurzu Mokré vysvědčení.
      `,
    image: SchoolService,
    alt: "plavec s hlavou pod vodou a deskou",
    name: scrollTargets.schools,
  },
  {
    id: 3,
    headline: "Kurzy",
    text: "Učíme plavat děti od 4 do 17 let. Máme nejrozšířenější možnosti pokračování ať už se jedná o závodní plavání, kondiční plavání, vodní polo nebo synchronizované plavání. Děti budou plavat ve skupinách dle svých plaveckých dovedností. Našim úkolem je tyto dovednosti rozšířit hravou formou pod vedením zkušených trenérů.",
    image: CourseService,
    alt: "dvě plavkyně na začátku dráhy čekající na start",
    name: scrollTargets.courses,
  },
];
