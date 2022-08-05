//styles
import { Flex, Text } from "@/styles";
import * as S from "./FooterSection.style";
//interfaces
import { fragmentType } from "../Footer.interface";
import Link from "next/link";
import Image from "next/image";

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
          <S.BoldText key={i} light>
            {a.output}
          </S.BoldText>
        );

      case "link": {
        const outputWithoutSpaces = a.output.replace(/ /g, "");
        return content.push(
          <S.Link key={i} light href={outputWithoutSpaces}>
            {a.output}
          </S.Link>
        );
      }

      case "normal":
        return content.push(
          <Text key={i} light>
            {a.output}
          </Text>
        );

      case "icon": {
        return content.push(
          <Flex direction="row" gap="1rem">
            {a.outputArr &&
              a.outputArr.map((outItem, i) => (
                <Link href={outItem.link} key={i}>
                  <a>
                    <Image src={outItem.imageSrc} width={30} height={30} />
                  </a>
                </Link>
              ))}
          </Flex>
        );
      }

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
