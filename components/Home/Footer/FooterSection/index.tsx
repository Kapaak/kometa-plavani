//styles
import { Text } from "@/styles";
import * as S from "./FooterSection.style";
//interfaces
import { infoType } from "../Footer.interface";

interface Props {
  headline: string;
  textArray: Array<infoType>;
}

const renderText = (array: Array<infoType>) => {
  const returnArray: any = [];

  array.map((a) => {
    switch (a.type) {
      case "bold":
        return returnArray.push(<S.BoldText light>{a.output}</S.BoldText>);

      case "link": {
        const outputWithoutSpaces = a.output.replace(/ /g, "");
        return returnArray.push(
          <S.Link light href={outputWithoutSpaces}>
            {a.output}
          </S.Link>
        );
      }

      case "normal":
        return returnArray.push(<Text light>{a.output}</Text>);

      default:
        return;
    }
  });

  return returnArray;
};

const FooterSection = ({ headline, textArray }: Props) => {
  return (
    <S.FooterSection>
      <S.Headline>{headline}</S.Headline>
      {renderText(textArray)}
    </S.FooterSection>
  );
};

export default FooterSection;

// if (a.type === "bold") {
//   return returnArr.push(<S.BoldText light>{a.output}</S.BoldText>);
// }

// if (a.type === "link") {
//   const outputWithoutSpaces = a.output.replace(/ /g, "");
//   return returnArr.push(
//     <S.Link light href={outputWithoutSpaces}>
//       {a.output}
//     </S.Link>
//   );
// }

// if (a.type === "normal") {
//   return returnArr.push(<Text light>{a.output}</Text>);
// }
