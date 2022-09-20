//libraries
import styled from "styled-components";
//styles
import { Flex as SFlex, Headline as SHeadline } from "@/styles";
import { dimensions } from "@/utils/breakpoints";

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  border-radius: 2rem;
  overflow: hidden;

  @media (${dimensions.desktop}) {
    display: none;
  }
`;

export const DesktopImageContainer = styled.div<{ isEven: boolean }>`
  display: none;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  height: 40rem;
  flex: 1 1 60%;
  order: ${({ isEven }) => (isEven ? "1" : "0")};

  @media (${dimensions.desktop}) {
    display: block;
  }
`;

export const Flex = styled(SFlex)`
  align-items: flex-start;
  flex: 1 1 40%;
`;

export const Headline = styled(SHeadline)`
  font-size: 3.8rem;
`;
