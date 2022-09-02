import { dimensions } from "@/components/utils/breakpoints";
import styled from "styled-components";
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

export const Flex = styled(SFlex)`
  @media (${dimensions.desktop}) {
    justify-content: flex-end;
    height: 100px;
  }
`;
