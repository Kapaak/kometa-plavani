import Image from "next/image";

import styled from "styled-components";

import { Flex, MaxWidth as SMaxWidth, SectionElement, Text } from "~/styles";
import { dimensions } from "~/utils";

export const HeroSection = styled(SectionElement)`
  @media (${dimensions.notebook}) {
    padding: 2rem;
  }

  @media (${dimensions.desktop}) {
    padding: var(--side-padding) 6rem;
  }
`;

export const MaxWidth = styled(SMaxWidth)`
  @media (${dimensions.notebook}) {
    max-width: 100%;
    padding: var(--side-padding);
  }
`;

export const EmphasizedHeadline = styled.span`
  display: block;
  font-size: 9rem;
  letter-spacing: 0.4rem;
  margin-top: -2rem;

  @media (${dimensions.notebook}) {
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
  overflow: hidden;
  border-radius: inherit;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  padding-bottom: 3rem;

  @media (${dimensions.tablet}) {
    align-items: flex-start;
    text-align: left;
  }

  @media (${dimensions.desktop}) {
    padding-bottom: 0;
  }
`;

export const TextContainer = styled(Text)`
  margin-bottom: 3rem;
  max-width: 50rem;
  font-weight: 500;

  @media (${dimensions.tablet}) {
    text-align: left;
  }

  @media (${dimensions.notebook}) {
    text-align: left;
  }
`;
