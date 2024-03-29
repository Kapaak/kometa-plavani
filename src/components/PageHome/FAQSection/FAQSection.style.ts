import styled from "styled-components";

import { SectionElement } from "~/styles";
import { dimensions } from "~/utils";

export const FAQSection = styled(SectionElement)`
  padding: 8rem 0;
  background-color: var(--col3);
`;

export const Headline = styled.h3`
  font-family: var(--font1);
  font-weight: 500;
  letter-spacing: 0.15rem;
  color: var(--col2);
  font-size: 2.5rem;

  @media (${dimensions.desktop}) {
    margin-bottom: 3.5rem;
  }
`;

export const FAQWrapper = styled.div`
  margin: 5rem 0;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 3.3rem;
`;
