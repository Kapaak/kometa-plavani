//libraries
import styled from "styled-components";
//styles
import { Flex as SFlex, Headline as SHeadline } from "@/styles";
import { dimensions } from "@/utils";
import Image from "next/image";

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  border-radius: var(--small-border-rad);
  overflow: hidden;
  box-shadow: var(--shadow);

  @media (${dimensions.notebook}) {
    display: none;
  }
`;

export const Img = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const DesktopImageContainer = styled.div<{ isEven: boolean }>`
  display: none;
  position: relative;
  border-radius: var(--small-border-rad);
  overflow: hidden;
  height: 40rem;
  flex: 1 1 50%;
  order: ${({ isEven }) => (isEven ? "1" : "0")};
  box-shadow: var(--shadow);

  @media (${dimensions.notebook}) {
    display: block;
  }
`;

export const Flex = styled(SFlex)`
  align-items: flex-start;
  flex: 1 1 50%;
`;

export const Headline = styled.h2`
  font-size: 3rem;
  font-family: var(--font1);
  font-weight: 500;
  letter-spacing: 0.08rem;

  @media (${dimensions.notebook}) {
    font-size: 4rem;
  }
`;
