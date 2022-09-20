//libraries
import styled from "styled-components";
//styles
import { dimensions } from "@/utils/breakpoints";
import { Text, A as SA } from "@/styles";

export const Service = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 1 30%;
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

  @media (${dimensions.notebook}) {
    /* width: 35rem; */
    padding: 1rem 3rem;
    background: linear-gradient(
      353.53deg,
      rgba(33, 114, 221, 0.5) -10.6%,
      rgba(33, 114, 221, 0.3) 55.75%,
      rgba(33, 114, 221, 0) 103.15%
    );

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

  @media (${dimensions.notebook}) {
    display: flex;
    justify-content: space-between;
    flex: 1;
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
