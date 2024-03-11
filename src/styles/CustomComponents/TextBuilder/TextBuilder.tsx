import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

import { SanityImage } from "~/domains";
import { urlForImage } from "~/utils";

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
          //the difference between image and customImage is that customImage supports alt tag
          customImage: (props) => {
            const value: SanityImage = props.value;
            return (
              <S.ImageContainer
                aspectRatio={String(
                  value?.asset?.metadata?.dimensions?.aspectRatio
                )}
              >
                <S.TextBuilderImage
                  alt={value.alt}
                  sizes="(max-width: 1023px) 90vw, 60vw"
                  src={urlForImage(props.value).url()}
                  fill
                />
              </S.ImageContainer>
            );
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
