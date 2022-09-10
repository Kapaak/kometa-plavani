//libraries
import { useEffect, useState } from "react";
import { StyledComponent } from "styled-components";
//interfaces
import { fragmentType } from "../Footer/Footer.interface";
import { IText } from "@/styles";

interface Props {
  fragment: Array<fragmentType>;
  LinkElement?: StyledComponent<"a", any, IText, any>;
  TextElement?: StyledComponent<"p", any, IText, never>;
  BoldElement?: StyledComponent<"p", any, IText, never>;
}

const ContentRenderer = ({
  fragment,
  LinkElement,
  TextElement,
  BoldElement,
}: Props) => {
  const [content, setContent] = useState<any>([]);

  const populate = () => {
    const content: JSX.Element[] = [];

    fragment.map((a, i) => {
      switch (a.type) {
        case "bold": {
          return (
            BoldElement &&
            content.push(
              <BoldElement key={i} variant="light">
                {a.output}
              </BoldElement>
            )
          );
        }

        case "link": {
          const outputWithoutSpaces = a.output.replace(/ /g, "");
          let triggerOption = outputWithoutSpaces.includes("+")
            ? "tel"
            : "mailto";

          return (
            LinkElement &&
            content.push(
              <LinkElement
                key={i}
                href={`${triggerOption}:${outputWithoutSpaces}`}
              >
                {a.output}
              </LinkElement>
            )
          );
        }

        case "normal":
          return (
            TextElement &&
            content.push(<TextElement key={i}>{a.output}</TextElement>)
          );

        default:
          return;
      }
    });

    return content;
  };

  useEffect(() => {
    setContent(populate());
  }, []);

  return content;
};

export default ContentRenderer;
