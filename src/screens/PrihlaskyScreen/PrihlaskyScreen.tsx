import { Headline, MaxWidth, SectionElement } from "~/styles";

import { LecturesSection } from "./components";

export const PrihlaskyScreen = () => {
  return (
    <MaxWidth>
      <SectionElement name="application">
        <Headline headlineType="h1">Dostupné lekce</Headline>
        <LecturesSection />
      </SectionElement>
    </MaxWidth>
  );
};
