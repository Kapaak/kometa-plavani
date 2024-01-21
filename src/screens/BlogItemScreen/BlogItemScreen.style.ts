import NextLink from "next/link";

import styled from "styled-components";

import { Text, VerticalStack } from "~/styles";
import { dimensions } from "~/utils";

export const BlogItemContainer = styled(VerticalStack).attrs({
  as: "article",
})`
  margin-bottom: 4rem;

  @media (${dimensions.notebook}) {
    margin-bottom: 10rem;
  }
`;

export const Title = styled(Text).attrs({
  as: "h1",
})`
  color: var(--col2);
  font-family: var(--font1);
  font-size: 4rem;
  letter-spacing: 0.2rem;
  font-weight: 400;
`;

export const BlogItemImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 24rem;
  height: 24rem;
`;

export const PreviousPageLink = styled(NextLink)`
  margin-top: 2rem;

  @media (${dimensions.notebook}) {
    margin-top: 10rem;
  }
`;
