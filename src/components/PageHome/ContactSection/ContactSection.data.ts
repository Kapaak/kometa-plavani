import { ContactItem } from "./ContactSectionItem";
import { EnvelopeOpen, Phone } from "@phosphor-icons/react";

export const data: ContactItem[] = [
  {
    title: "Telefon",
    icon: Phone,
    value: "+420 773 708 287",
    description:
      "Mezi 14:00-18:00 se mi bohužel nedovoláte, jsem na bazéně, kde nemám signál. Napište mi prosím SMS zprávu nebo e-mail. Děkuji za pochopení.",
  },
  {
    title: "E-mail",
    icon: EnvelopeOpen,
    value: "plavaniluzanky@kometaplavani.cz",
  },
];
