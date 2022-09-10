import { Text } from "@/styles";
import styled from "styled-components";

// custom made type, that will act as if it was an <a> tag
export const LinkElement = styled(Text).attrs({
  as: "a",
  variant: "dark",
})``;

// custom made type, that will possess variant:"dark"
export const TextElement = styled(Text).attrs({ variant: "dark" })``;

export const Headline = styled(Text).attrs({
  as: "h3",
  variant: "dark",
})`
  text-transform: uppercase;
  font-weight: 600;
`;
