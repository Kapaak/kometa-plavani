import { dimensions } from "@/components/utils/breakpoints";
import { Flex, Text } from "@/styles";
import styled from "styled-components";

export const HeroSection = styled.section`
  /* background: linear-gradient(
    109.69deg,
    #2172dd -4.31%,
    rgba(33, 114, 221, 0.6) 62.89%,
    rgba(33, 114, 221, 0) 105.03%
  ); */
  /* background: linear-gradient(
      109.69deg,
      #2172dd -4.31%,
      rgba(33, 114, 221, 0.6) 62.89%,
      rgba(33, 114, 221, 0) 105.03%
    ),
    url(./images/hero-img.JPG); */
  height: 100%;
  background-position: 50% 50%;
  background-size: cover;
`;

export const ImageContainer = styled.div`
  position: absolute;
  height: 100vh;
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
  @media (${dimensions.tablet}) {
    text-align: left;
  }
`;
