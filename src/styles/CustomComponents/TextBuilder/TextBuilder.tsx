import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

import { Text } from "../Text";

import * as S from "./TextBuilder.style";

interface TextBuilderProps {
  value: PortableTextBlock[];
  options?: {
    paragraph: {
      position?: "center" | "left" | "right";
      color?: "light" | "dark" | "normal" | "grey";
    };
  };
}

export const TextBuilder = ({ value, options }: TextBuilderProps) => {
  const { paragraph } = options || {};
  return (
    <PortableText
      value={value}
      components={{
        block: {
          normal: (props) => {
            return (
              <Text
                center={paragraph?.position === "center"}
                variant={paragraph?.color}
              >
                {props.children}
              </Text>
            );
          },
        },
        types: {
          image: (props) => {
            return null;
            //for now not supported due to blog item

            // <NextImage
            //   alt="Obrázek k článku."
            //   src={urlForImage(props.value)?.url()}
            //   width={400}
            //   height={200}
            //   style={{ objectFit: "cover" }}
            // />
          },
        },

        listItem: {
          bullet: (props) => {
            return (
              <S.ListItem>
                <Text variant="dark">{props.children}</Text>
              </S.ListItem>
            );
          },
          number: (props) => {
            return (
              <S.ListItem>
                <Text variant="dark">{props.children}</Text>
              </S.ListItem>
            );
          },
        },
      }}
    />
  );
};
