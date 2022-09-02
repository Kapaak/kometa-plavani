import styled from "styled-components";
import { dimensions } from "@/components/utils/breakpoints";
import { Text, A as SA } from "@/styles";

export const Service = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Container = styled.div`
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

  @media (${dimensions.desktop}) {
    width: 35rem;
    padding: 1rem 3rem;

    ${Text} {
      display: none;
    }

    ${SA} {
      display: none;
    }
  }
`;

export const DesktopContainer = styled.div`
  display: none;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-start;

  @media (${dimensions.desktop}) {
    display: flex;
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

export const A = styled(SA)`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
