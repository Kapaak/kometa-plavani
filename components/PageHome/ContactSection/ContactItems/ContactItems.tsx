//components
import ContactItem from "./ContactItem/ContactItem";
//styles
import { Flex } from "@/styles";

interface Props {
  data: any;
}

const ContactItems = ({ data }: Props) => {
  return (
    <Flex>
      {data.map((d: any, i: number) => (
        <ContactItem
          key={i}
          headline={d.headline}
          icon={d.icon}
          fragment={d.fragment}
        />
      ))}
    </Flex>
  );
};

export default ContactItems;
