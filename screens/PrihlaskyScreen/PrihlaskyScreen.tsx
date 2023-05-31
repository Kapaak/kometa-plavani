import { ServiceSections } from "./components";
import { Headline, MaxWidth, SectionElement } from "@/styles";

export const PrihlaskyScreen = () => {
  return (
    <MaxWidth>
      <SectionElement name="application">
        <Headline headlineType="h1">Přihlášky</Headline>
        <ServiceSections />
      </SectionElement>
    </MaxWidth>
  );
};
