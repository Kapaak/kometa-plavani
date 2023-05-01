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
    alt: "dítě v bazénu pod vodou s brýlemi",
    scrollTarget: scrollTargets.kindergardens,
  },
  {
    headline: "Školy",
    text: "Cílem je plavce naučit základům plavání. ",
    image: SchoolService,
    alt: "plavec s hlavou pod vodou a deskou",
    scrollTarget: scrollTargets.schools,
  },
  {
    headline: "Kurzy",
    text: "Učíme plavat děti od 4 do 10 let.",
    image: CourseService,
    alt: "dvě plavkyně na začátku dráhy",
    scrollTarget: scrollTargets.courses,
  },
];
