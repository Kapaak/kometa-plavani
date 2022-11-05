//libraries
import styled from "styled-components";
//styles
import { dimensions } from "@/utils/breakpoints";
import { Text, MaxWidth as SMaxWidth, SectionElement } from "@/styles";

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

export const AboutText = styled(Text)`
  padding: 2rem 0;
`;
