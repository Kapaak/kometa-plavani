//components
import ContactItems from "./ContactItems/ContactItems";
//styles
import { Headline, MaxWidth } from "@/styles";
import * as S from "./ContactSection.style";
//data
import { data } from "./data";

const ContactSection = () => {
  return (
    <S.ContactSection name="contact">
      <MaxWidth>
        <Headline>Kontakt</Headline>
        <ContactItems data={data} />
        {/* komponent mapy */}
      </MaxWidth>
    </S.ContactSection>
  );
};

export default ContactSection;
