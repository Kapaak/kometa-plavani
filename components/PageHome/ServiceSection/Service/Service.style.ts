//libraries
import styled from "styled-components";
//styles
import { dimensions } from "@/utils/breakpoints";
import { Text, A as SA, Subheadline, Flex as SFlex } from "@/styles";

export const Service = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 1 30%;
  border-radius: var(--small-border-rad);
  box-shadow: var(--shadow);
`;

export const Flex = styled(SFlex)`
  padding: 3rem;
  flex: 1;

  @media (${dimensions.tablet}) {
    padding: 3rem 4rem;
  }

  @media (${dimensions.notebook}) {
    padding: 3rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: var(--small-border-rad);
  overflow: hidden;
  flex: 1;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 18rem;
`;

export const A = styled(SA)`
  align-self: start;
`;
