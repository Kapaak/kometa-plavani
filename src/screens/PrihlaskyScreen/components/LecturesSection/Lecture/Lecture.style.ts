import Image from "next/image";
import NextLink from "next/link";

import styled from "styled-components";

import { Flex as SFlex, SectionElement } from "~/styles";
import { dimensions } from "~/utils";

export const Img = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const DesktopImageContainer = styled.div`
  display: none;
  position: relative;
  border-radius: 0 var(--small-border-rad) var(--small-border-rad) 0;
  overflow: hidden;

  @media (${dimensions.desktop}) {
    display: block;
  }
`;

export const Flex = styled(SFlex)`
  align-items: flex-start;
  flex: 1 1 50%;
`;

export const LectureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (${dimensions.tabletX}) {
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (${dimensions.desktop}) {
    grid-template-columns: 1fr 1fr 35rem;
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
