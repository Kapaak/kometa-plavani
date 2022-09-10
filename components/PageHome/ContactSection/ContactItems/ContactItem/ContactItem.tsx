//componenets
import ContentRenderer from "@/components/utils/ContentRenderer";
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
      <div>icon</div>
      <div>
        <S.Headline>{headline}</S.Headline>
        <ContentRenderer
          fragment={fragment}
          LinkElement={S.LinkElement}
          TextElement={S.TextElement}
        />
      </div>
    </Flex>
  );
};

export default ContactItem;
