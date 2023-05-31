//images
import LocationIcon from "@/public/icons/location.svg";
import UserIcon from "@/public/icons/user.svg";
import EmailIcon from "@/public/icons/email.svg";
import PhoneIcon from "@/public/icons/phone.svg";
//interfaces
import { Content, Contact } from "@/domains";

export const data: Contact[] = [
  {
    headline: "adresa",
    icon: LocationIcon,
    fragment: [
      {
        output: "Sportovní 486/4, Brno 602 00",
        type: Content.normal,
      },
    ],
  },
  {
    headline: "kontaktní osoba",
    icon: UserIcon,
    fragment: [
      {
        output: "Bc. Anna Matušová",
        type: Content.normal,
      },
    ],
  },
  {
    headline: "telefon",
    icon: PhoneIcon,
    fragment: [
      {
        output: "+420 773 708 287",
        type: Content.link,
      },
    ],
  },
  {
    headline: "e-mail",
    icon: EmailIcon,
    fragment: [
      {
        output: "plavaniluzanky@kometabrno.cz",
        type: Content.link,
      },
    ],
  },
];
