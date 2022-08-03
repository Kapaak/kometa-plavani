import { dimensions } from "@/components/utils/breakpoints";
import styled from "styled-components";

export const Subheadline = styled.h3`
  font-size: var(--fsheadline);
  color: var(--colw);
  font-family: var(--font1);
  font-weight: 500;

  @media (${dimensions.tablet}) {
    margin-bottom: 1rem;
  }
`;
