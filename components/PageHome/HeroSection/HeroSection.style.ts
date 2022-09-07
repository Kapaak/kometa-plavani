import { dimensions } from "@/components/utils/breakpoints";
import { Flex, Text, MaxWidth as SMaxWidth, SectionElement } from "@/styles";
import styled from "styled-components";

export const HeroSection = styled(SectionElement)`
  @media (${dimensions.desktop}) {
    padding: 4rem;
  }
`;

export const MaxWidth = styled(SMaxWidth)`
  @media (${dimensions.desktop}) {
    max-width: 100%;
    padding: var(--side-padding);
  }
`;

export const EmphasizedHeadline = styled.span`
  display: block;
  font-size: 9rem;
  letter-spacing: 0.4rem;
  margin-top: -2rem;

  @media (${dimensions.desktop}) {
    display: inline-block;
    font-size: inherit;
    letter-spacing: inherit;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  max-height: 100%;
  width: 100%;
  top: 0;
  z-index: -1;
`;

export const Gradient = styled.div`
  position: absolute;
  background-color: var(--col2);
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 1;
`;

export const ImageButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: center;
`;

export const FlexWrapper = styled(Flex)`
  @media (${dimensions.tablet}) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const TextContainer = styled(Text)`
  margin-bottom: 3rem;
  max-width: 50rem;
  @media (${dimensions.tablet}) {
    text-align: left;
  }
`;
