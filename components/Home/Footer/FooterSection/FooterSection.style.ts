import { Subheadline, Text } from "@/styles";
import styled, { css } from "styled-components";

export const FooterSection = styled.section``;

const lineHeight = () => css`
  line-height: 2;
`;

export const Link = styled(Text).attrs({
  as: "a",
})<{ href: string }>`
  display: block;
  text-decoration: none;

  ${lineHeight()}
`;

export const BoldText = styled(Text)`
  font-weight: 500;
  ${lineHeight()}
`;

export const Headline = styled(Subheadline)`
  margin-bottom: 2rem;
`;
