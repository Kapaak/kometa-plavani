//images
import LocationIcon from "@/public/icons/location.svg";
import { ContactItem } from "./ContactSectionItem";
import { EnvelopeOpen, Phone } from "@phosphor-icons/react";

export const data: ContactItem[] = [
  {
    title: "Telefon",
    icon: Phone,
    description: "+420 773 708 287",
  },
  {
    title: "E-mail",
    icon: EnvelopeOpen,
    description: "plavaniluzanky@kometaplavani.cz",
  },
];
