//components
import { ContentRenderer } from "@/shared";
//styles
import * as S from "./FooterSection.style";
//interfaces
import { Fragment } from "@/domains";

interface Props {
  headline: string;
  fragment: Array<Fragment>;
}

const FooterSection = ({ headline, fragment }: Props) => {
  return (
    <S.FooterSection>
      <S.Headline variant="light">{headline}</S.Headline>
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
