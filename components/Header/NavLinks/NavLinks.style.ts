import { dimensions } from "@/components/utils/breakpoints";
import styled, { css } from "styled-components";

export const NavLink = styled.li`
  list-style-type: none;
  text-decoration: none;
  color: var(--colw);
  font-family: var(--font1);
  font-size: var(--fnavlink);
  line-height: 2.4;
`;

export const NavLinks = styled.ul<{ isActive: boolean }>`
  flex-direction: column;

  ${({ isActive }) => {
    switch (isActive) {
      case true:
        return css`
          display: flex;
          align-self: center;

          ${NavLink} {
            padding-left: 4rem;
          }
        `;
      case false:
        return css`
          display: none;
          align-self: baseline;

          ${NavLink} {
            padding-left: 0;
          }
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
  }
`;
