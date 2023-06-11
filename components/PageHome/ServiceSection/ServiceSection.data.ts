//images or svgs
import KindergardenService from "@/public/images/service-kindergarden.jpg";
import SchoolService from "@/public/images/service-school.jpg";
import CourseService from "@/public/images/service-course.jpg";
import { Service, ScrollSections } from "@/domains";

export const data: Service[] = [
  {
    id: 1,
    headline: "Školy a školky",
    text: "Cílem naší výuky je adaptovat dítě na vodní prostředí.",
    image: KindergardenService,
    alt: "dítě v bazénu pod vodou s brýlemi",
    name: ScrollSections.kindergardens,
  },
  {
    id: 2,
    headline: "Základní plavání",
    text: "Kurzy jsou určené pro děti, které se potřebují naučit plavat.",
    image: SchoolService,
    alt: "plavec s hlavou pod vodou a deskou",
    name: ScrollSections.schools,
  },
  {
    id: 3,
    headline: "Zdokonalovací a kondiční plavání",
    text: "Vhodné přo děti, co se nebojí plavat ve velkém bazénu, navíc již ovládají základy plavání.",
    image: CourseService,
    alt: "dvě plavkyně na začátku dráhy",
    name: ScrollSections.courses,
  },
];
