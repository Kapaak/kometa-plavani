//components
import ServiceSections from "./ServiceSections/ServiceSections";
//styles
import { MaxWidth, SectionElement } from "@/styles";

const Prihlasky = () => {
  return (
    <main>
      <MaxWidth>
        <SectionElement name="application">
          <ServiceSections />
        </SectionElement>
      </MaxWidth>
    </main>
  );
};

export default Prihlasky;
