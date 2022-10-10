//images or svgs
import KindergardenService from "@/public/images/service-kindergarden.jpg";
import SchoolService from "@/public/images/service-school.jpg";
import CourseService from "@/public/images/service-course.jpg";
import { IService } from "./ServiceSection.interface";
import { scrollTargets } from "./ServiceSection.interface";

export const data: IService[] = [
  {
    headline: "Školky",
    text: "Cílem výuky je u dítěte odbourat strach z vody a naučit ho základním plaveckým dovednostem.",
    image: KindergardenService,
    scrollTarget: scrollTargets.kindergardens,
  },
  {
    headline: "Školy",
    text: "Cílem je plavce naučit základům plavání. Děti budou plavat ve skupinách dle svých plaveckých dovedností.",
    image: SchoolService,
    scrollTarget: scrollTargets.schools,
  },
  {
    headline: "Kurzy",
    text: "Učíme plavat děti od 4 do 17 let. Máme nejrozšířenější možnosti pokračování ať už se jedná o závodní plavání, kondiční plavání, vodní polo nebo synchronizované plavání.",
    image: CourseService,
    scrollTarget: scrollTargets.courses,
  },
];
