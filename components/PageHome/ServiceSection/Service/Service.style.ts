import { dimensions } from "@/components/utils/breakpoints";
import styled from "styled-components";

export const Service = styled.article`
  position: relative;
  padding: 2rem;
  background: linear-gradient(
    353.53deg,
    #2172dd -10.6%,
    rgba(33, 114, 221, 0.6) 55.75%,
    rgba(33, 114, 221, 0) 103.15%
  );
  height: 30rem;
  border-radius: 2rem;
  overflow: hidden;

  @media (${dimensions.tablet}) {
    padding: 3rem 4rem;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
