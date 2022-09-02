import { dimensions } from "@/components/utils/breakpoints";
import styled, { css } from "styled-components";

export const NavLinks = styled.ul<{ isActive: boolean }>`
  flex-direction: column;

  ${({ isActive }) => {
    switch (isActive) {
      case true:
        return css`
          display: flex;
          align-self: center;
        `;
      case false:
        return css`
          display: none;
          align-self: baseline;
        `;
      default:
        return css``;
    }
  }}

  @media(${dimensions.desktop}) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    height: 100%;
    align-items: center;
    padding: 1rem 2rem;
  }
`;
