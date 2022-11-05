//components
import ServiceSections from "./ServiceSections/ServiceSections";
//styles
import { Headline, MaxWidth, SectionElement } from "@/styles";

const Prihlasky = () => {
  return (
    <main>
      <MaxWidth>
        <SectionElement name="application">
          <Headline headlineType="h1">Přihlášky</Headline>
          <ServiceSections />
        </SectionElement>
      </MaxWidth>
    </main>
  );
};

export default Prihlasky;
