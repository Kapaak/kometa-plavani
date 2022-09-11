//components
import ContactItems from "./ContactItems/ContactItems";
import ContactMap from "./ContactMap/ContactMap";
//styles
import { MaxWidth } from "@/styles";
import * as S from "./ContactSection.style";
//data
import { data } from "./data";

const ContactSection = () => {
  return (
    <S.ContactSection name="contact">
      <MaxWidth>
        <S.Flex gap="4rem">
          <ContactItems data={data} />
          <ContactMap />
        </S.Flex>
      </MaxWidth>
    </S.ContactSection>
  );
};

export default ContactSection;
