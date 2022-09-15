//libraries
import styled from "styled-components";
//styles
import { dimensions } from "@/utils/breakpoints";

export const Logo = styled.a`
  position: relative;
  display: inline-block;
  z-index: 10;
  padding: 1rem 2rem;
  cursor: pointer;
  width: 8rem;
  margin: 0 2rem;
  height: 100%;

  @media (${dimensions.desktop}) {
    width: 14rem;
    margin: 0 2rem;
  }
`;
