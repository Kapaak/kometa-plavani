import {
  EnvelopeOpen,
  Wallet,
  Coin,
  FirstAid,
  Backpack,
  ForkKnife,
  Users,
  SmileyXEyes,
  Lifebuoy,
  CalendarBlank,
  Archive,
  Scroll,
} from "phosphor-react";

export const data = [
  {
    id: "1",
    headline: "Časté dotazy",
    items: [
      {
        id: "00",
        title: "Co si s sebou na lekci vzít",
        description:
          "Plavky, ručník, plavecké brýle. Dále doporučujeme plaveckou čepici, pantofle a mýdlo.",
        icon: Scroll,
      },
      {
        id: "22",
        title: "Absence a náhrady",
        description:
          "Dítě není potřeba z hodiny omlouvat, z tohoto důvodu nejsme schopni garantovat náhrady všem. Vždy je potřeba domluva s vedoucí trenérem.",
        icon: Wallet,
      },

      {
        id: "44",
        title: "Podmínky pro přijetí do kurzu",
        description:
          "Bližší informace naleznete v sekci DOKUMENTY. Primárně je třeba, aby dítě bylo schopno uposlechnout pokynům trenéra a ovládalo základní hygienické návyky.",
        icon: FirstAid,
      },
      {
        id: "55",
        title: "Pro koho jsou kurzy vhodné",
        description:
          "U jednotlivých kurzů naleznete bližší informace. Obecně lze říct, že kurzy primárně slouží pro děti od 4 do 15 let, které se chtějí naučit nebo zdokonalit v plavání.",
        icon: FirstAid,
      },
      {
        id: "66",
        title: "Co je součástí ceny",
        description:
          " Součástí ceny je vždy pronájem bazénu, profesionální trenéři a kvalitní pomůcky, které pomohou zefektivnit výuku plavání.          ",
        icon: FirstAid,
      },
    ],
  },
  {
    id: "2",
    headline: "Platba",
    items: [
      {
        id: "33",
        title: "Faktura pro zaměstnavatele",
        description: `V případě, že požadujete vystavení faktury, budeme od vás potřebovat tyto údaje:
        1.         fakturační údaje firmy
        2.         jméno žadatele (zaměstnanec) – jeho osobní údaje požadované firmou
        3.         jméno dítěte
        4.         datum narození
        5.         kurz do kterého se hlásí (spec. symbol)
        6.         datum začátku a konce kurzu
        7.         cena kurzu
        8.         telefon na žadatele
        9.         e-mail, na který se bude faktura posílat`,
        icon: Coin,
      },
      {
        id: "55",
        title: "Platba",
        description:
          "Kurz je třeba zaplatit nejpozději před první navštívenou lekcí. Platbu proveďte na účet 8822184001, banka 5500, variabilní symbol 01. Do zprávy pro příjemce je nutné napsat jméno dítěte. Za každé dítě je nutné poslat peníze jednotlivě.",
        icon: FirstAid,
      },
    ],
  },
  {
    id: "3",
    headline: "Ostatní",
    items: [
      {
        id: "11",
        title: "Prázdniny a státní svátky",
        description: ` 
          Naše kurzy kopírují školní prázdniny a státní svátky, proto v těchto termínech neplaveme. Jedná se o tyto datumy:
           
          28.9. Den české státnosti
           
          Podzimní prázdniny 26. 10–27. 102023.
           
          17.11. Den boje za svobodu a demokracii
           
          Vánoční prázdniny 23.12. - 2.1 2024  
           
          Pololetní prázdniny 2.2. 2024.
           
          Jarní prázdniny 5. 2. – 11. 2. 2024
           
          Velikonoční prázdniny 28.3. - 1.4.2024
           
          1.5. Svátek práce
           
          8.5. Den vítězství
          `,
        icon: EnvelopeOpen,
      },
    ],
  },
];
