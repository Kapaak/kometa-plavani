import styled from "styled-components";
import { dimensions } from "@/components/utils/breakpoints";
import { Text, MaxWidth as SMaxWidth } from "@/styles";

export const AboutSection = styled.section`
  padding: 1.5rem 0;

  @media (${dimensions.desktop}) {
    padding: 5vw 0;
  }
`;

export const MaxWidth = styled(SMaxWidth)`
  text-align: center;
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
  text-align: center;
`;
