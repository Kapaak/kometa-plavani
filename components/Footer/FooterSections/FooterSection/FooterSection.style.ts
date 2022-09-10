import { Subheadline, Text } from "@/styles";
import styled, { css } from "styled-components";

export const FooterSection = styled.section``;

const lineHeight = () => css`
  line-height: 2;
`;

export const LinkElement = styled(Text).attrs({
  as: "a",
  variant: "light",
})<{ href: string }>`
  display: block;
  text-decoration: none;

  ${lineHeight()}
`;

export const TextElement = styled(Text).attrs({
  variant: "light",
})``;

export const BoldText = styled(Text).attrs({ variant: "light" })`
  font-weight: 500;
  ${lineHeight()}
`;

export const Headline = styled(Subheadline)`
  margin-bottom: 2rem;
  color: var(--col1);
`;
