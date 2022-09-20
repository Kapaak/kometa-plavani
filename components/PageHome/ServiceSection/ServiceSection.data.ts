//images or svgs
import KindergardenService from "@/public/images/service-kindergarden.jpg";
import SchoolService from "@/public/images/service-school.jpg";
import CourseService from "@/public/images/service-course.jpg";
import { IService } from "./ServiceSection.interface";
import { scrollTargets } from "./ServiceSection.interface";

export const data: IService[] = [
  {
    headline: "Školky",
    smallText:
      "Cílem je neplavce zbavit strachu, položit na vodu s hlavou pod vodou na bříšku a zakopat.",
    fullText:
      "Cílem je neplavce zbavit strachu, položit na vodu s hlavou pod vodou na bříšku a zakopat.",
    image: KindergardenService,
    scrollTarget: scrollTargets.kindergardens,
  },
  {
    headline: "Školy",
    smallText:
      "Cílem je plavce naučit základům plavání. Děti již trochu plavat umí. Našim úkolem je naučit kraul a znak.",
    fullText:
      "Cílem je plavce naučit základům plavání. Děti již trochu plavat umí. Našim úkolem je naučit kraul a znak.",
    image: SchoolService,
    scrollTarget: scrollTargets.schools,
  },
  {
    headline: "Kurzy",
    smallText:
      "Děti se zde mohou učit plavat již od  5 do 17 let a potom přejít do závodního plavání nebo kondičního plavání.",
    fullText:
      "Děti se zde mohou učit plavat již od  5 do 17 let a potom přejít do závodního plavání.",
    image: CourseService,
    scrollTarget: scrollTargets.courses,
  },
];