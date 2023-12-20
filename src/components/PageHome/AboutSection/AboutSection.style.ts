import Image from "next/image";

import styled from "styled-components";

import { MaxWidth as SMaxWidth, SectionElement, Text } from "~/styles";
import { dimensions } from "~/utils";

export const AboutSection = styled(SectionElement)`
  padding: 1.5rem 0;
`;

export const MaxWidth = styled(SMaxWidth)`
  text-align: center;
  max-width: 60rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 5rem;

  @media (${dimensions.desktop}) {
    width: 6rem;
    height: 6rem;
  }
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const AboutText = styled(Text)`
  padding: 2rem 0;
`;
