//styles
import { Text } from "@/styles";
import * as S from "./FooterSection.style";
//interfaces
import { fragmentType } from "../../Footer.interface";

interface Props {
  headline: string;
  fragment: Array<fragmentType>;
}

const contentRenderer = (array: Array<fragmentType>) => {
  const content: any = [];

  array.map((a, i) => {
    switch (a.type) {
      case "bold":
        return content.push(
          <S.BoldText key={i} variant="light">
            {a.output}
          </S.BoldText>
        );

      case "link": {
        const outputWithoutSpaces = a.output.replace(/ /g, "");
        let triggerOption = outputWithoutSpaces.includes("+")
          ? "tel"
          : "mailto";

        return content.push(
          <S.Link
            key={i}
            variant="light"
            href={`${triggerOption}:${outputWithoutSpaces}`}
          >
            {a.output}
          </S.Link>
        );
      }

      case "normal":
        return content.push(
          <Text key={i} variant="light">
            {a.output}
          </Text>
        );

      default:
        return;
    }
  });

  return content;
};

const FooterSection = ({ headline, fragment }: Props) => {
  return (
    <S.FooterSection>
      <S.Headline>{headline}</S.Headline>
      {contentRenderer(fragment)}
    </S.FooterSection>
  );
};

export default FooterSection;
