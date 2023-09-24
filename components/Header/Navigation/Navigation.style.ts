//libraries
import styled from "styled-components";
//styles
import { dimensions } from "@/utils";
import { Flex } from "@/styles";

export const Navigation = styled.div<{ isActive: boolean }>`
  position: ${({ isActive }) => (isActive ? "fixed" : "absolute")};
  width: 100%;
  height: ${({ isActive }) => (isActive ? "100vh" : "auto")};
  background-color: ${({ isActive }) => (isActive ? "var(--col2)" : "unset")};
  z-index: 9;
  top: 0;
  transition: all 0.4 ease;

  @media (${dimensions.notebook}) {
    position: relative;
    height: auto;
    background-color: unset;
  }
`;

export const NavBar = styled(Flex).attrs({
  as: "nav",
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (${dimensions.notebook}) {
    padding: 0 6rem;
  }
`;
