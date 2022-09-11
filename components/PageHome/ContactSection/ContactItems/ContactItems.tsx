//components
import ContactItem from "./ContactItem/ContactItem";
//styles
import { Flex, Headline } from "@/styles";

interface Props {
  data: any;
}

const ContactItems = ({ data }: Props) => {
  return (
    <Flex gap="2rem">
      <Headline>Kontakt</Headline>

      <Flex gap="2rem">
        {data.map((d: any, i: number) => (
          <ContactItem
            key={i}
            headline={d.headline}
            icon={d.icon}
            fragment={d.fragment}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ContactItems;
