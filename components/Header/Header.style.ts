import styled from "styled-components";
import { dimensions } from "../utils/breakpoints";
import { Flex as SFlex } from "@/styles";

export const Navigation = styled.nav<{ isActive: boolean }>`
  position: ${({ isActive }) => (isActive ? "fixed" : "absolute")};
  width: 100%;
  height: ${({ isActive }) => (isActive ? "100vh" : "auto")};
  background-color: ${({ isActive }) => (isActive ? "var(--col2)" : "unset")};
  z-index: 9;
  top: 0;

  @media (${dimensions.desktop}) {
    position: relative;
    height: auto;
    background-color: unset;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 9;

  @media (${dimensions.desktop}) {
    background-color: pink;
    /* position:relative */
  }
`;

export const Flex = styled(SFlex)`
  @media (${dimensions.desktop}) {
    justify-content: flex-end;
    height: 100px;
  }
`;
