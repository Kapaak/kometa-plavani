//components
import ContentRenderer from "@/components/utils/ContentRenderer";
//styles
import * as S from "./FooterSection.style";
//interfaces
import { fragmentType } from "../../Footer.interface";

interface Props {
  headline: string;
  fragment: Array<fragmentType>;
}

const FooterSection = ({ headline, fragment }: Props) => {
  return (
    <S.FooterSection>
      <S.Headline>{headline}</S.Headline>
      <ContentRenderer
        fragment={fragment}
        BoldElement={S.BoldText}
        TextElement={S.TextElement}
        LinkElement={S.LinkElement}
      />
    </S.FooterSection>
  );
};

export default FooterSection;
