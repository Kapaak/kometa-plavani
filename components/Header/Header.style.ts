//libraries
import styled from "styled-components";
//styles
import { dimensions } from "../../utils/breakpoints";
import { Flex } from "@/styles";

export const Header = styled.header<{ withShadow: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* height: var(--header-height); */ //todo: update this so that I dont need to use it
  z-index: 9;
  background-color: var(--colw);
  box-shadow: ${({ withShadow }) =>
    withShadow ? "0 0 20px 0 rgba(10,19,10,.2)" : "none"};

  transition: all 0.5s ease;
`;

export const NavBar = styled(Flex).attrs({
  as: "nav",
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (${dimensions.notebook}) {
    padding: 0 6rem;
  }
`;

export const MaxWidth = styled.div`
  width: 100%;
  height: 100%;

  @media (${dimensions.notebook}) {
    padding: 0 6rem;
  }
`;
