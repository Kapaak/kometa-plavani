import { LecturesSection } from "./components";
import { Headline, MaxWidth, SectionElement } from "~/styles";

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
