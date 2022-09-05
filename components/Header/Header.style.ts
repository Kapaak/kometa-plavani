import styled from "styled-components";
import { dimensions } from "../utils/breakpoints";

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 9;
  background-color: var(--colw);

  @media (${dimensions.desktop}) {
    background-color: var(--colw);
  }
`;
