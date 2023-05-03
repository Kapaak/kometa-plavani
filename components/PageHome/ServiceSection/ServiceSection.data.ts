//images or svgs
import KindergardenService from "@/public/images/service-kindergarden.jpg";
import SchoolService from "@/public/images/service-school.jpg";
import CourseService from "@/public/images/service-course.jpg";
import { Service, ScrollSections } from "@/domains";

export const data: Service[] = [
  {
    id: 1,
    headline: "Školky",
    text: "Cílem výuky je u dítěte odbourat strach z vody a naučit ho základním plaveckým dovednostem.",
    image: KindergardenService,
    alt: "dítě v bazénu pod vodou s brýlemi",
    name: ScrollSections.kindergardens,
  },
  {
    id: 2,
    headline: "Školy",
    text: "Cílem je plavce naučit základům plavání. ",
    image: SchoolService,
    alt: "plavec s hlavou pod vodou a deskou",
    name: ScrollSections.schools,
  },
  {
    id: 3,
    headline: "Kurzy",
    text: "Učíme plavat děti od 4 do 10 let.",
    image: CourseService,
    alt: "dvě plavkyně na začátku dráhy",
    name: ScrollSections.courses,
  },
];
