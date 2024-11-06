import styled from "styled-components";

import { dimensions } from "~/utils";

export const Headline = styled.h1`
  font-family: var(--font1);
  font-weight: 500;
  color: var(--col2);
  font-size: var(--fheadline);

  @media (${dimensions.desktop}) {
    margin-top: 4rem;
  }
`;

export const SubHeadline = styled.h2`
  font-family: var(--font1);
  font-weight: 500;
  color: var(--col2);
  font-size: 3rem;
  margin-bottom: 2rem;

  @media (${dimensions.desktop}) {
    margin-bottom: 4rem;
  }
`;
