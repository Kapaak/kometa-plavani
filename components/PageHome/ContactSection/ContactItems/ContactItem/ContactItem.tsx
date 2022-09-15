//libraries
import Image from "next/image";
//componenets
import ContentRenderer from "@/utils/ContentRenderer";
//styles
import * as S from "./ContactItem.style";
import { Flex } from "@/styles";

interface Props {
  headline: string;
  fragment: any;
  icon: any;
}

const ContactItem = ({ headline, fragment, icon }: Props) => {
  return (
    <Flex direction="row" gap="2rem" align="center">
      <Image src={icon} />
      <Flex gap=".5rem">
        <S.Headline>{headline}</S.Headline>
        <ContentRenderer
          fragment={fragment}
          LinkElement={S.LinkElement}
          TextElement={S.TextElement}
        />
      </Flex>
    </Flex>
  );
};

export default ContactItem;
