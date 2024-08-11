import NextLink from "next/link";

import styled from "styled-components";

import { Flex as SFlex, SectionElement } from "~/styles";
import { dimensions } from "~/utils";

export const Flex = styled(SFlex)`
  align-items: flex-start;
  flex: 1 1 50%;
`;

export const LectureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (${dimensions.notebook}) {
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
`;

export const LectureSection = styled(SectionElement)`
  border-radius: var(--small-border-rad);

  @media (${dimensions.tablet}) {
    background-color: rgba(220, 233, 250, 0.25);
  }
`;

export const PaddingWrapper = styled.div<{ padding?: string }>`
  padding: 2rem 0;

  @media (${dimensions.tablet}) {
    padding: 3.2rem;
  }

  @media (${dimensions.desktop}) {
    padding: ${({ padding }) => padding || "0"};
  }
`;

export const Link = styled(NextLink).withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})<{ disabled?: boolean }>`
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;
