import { useEffect, useState } from "react";

import { StyledComponent } from "styled-components";

import { Content, Fragment } from "~/domains";
import { IText } from "~/styles";

interface ContentRendererProps {
  fragment: Array<Fragment>;
  LinkElement?: StyledComponent<"a", any, IText, any>;
  TextElement?: StyledComponent<"p", any, IText, never>;
  BoldElement?: StyledComponent<"p", any, IText, never>;
}

export const ContentRenderer = ({
  fragment,
  LinkElement,
  TextElement,
  BoldElement,
}: ContentRendererProps) => {
  const [content, setContent] = useState<any>([]);

  const populate = () => {
    const content: JSX.Element[] = [];

    fragment.map((a, i) => {
      switch (a.type) {
        case Content.bold: {
          return (
            BoldElement &&
            content.push(<BoldElement key={i}>{a.output}</BoldElement>)
          );
        }

        case Content.link: {
          const outputWithoutSpaces = a.output.replace(/ /g, "");
          let triggerOption = outputWithoutSpaces.includes("+")
            ? "tel"
            : "mailto";

          let href = a.href || `${triggerOption}:${outputWithoutSpaces}`;

          return (
            LinkElement &&
            content.push(
              <LinkElement key={i} href={href} download={a.downloadable}>
                {a.output}
              </LinkElement>
            )
          );
        }

        case Content.normal:
          return (
            TextElement &&
            content.push(<TextElement key={i}>{a.output}</TextElement>)
          );

        case Content.blank:
          return content.push(<br key={i} />);

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
