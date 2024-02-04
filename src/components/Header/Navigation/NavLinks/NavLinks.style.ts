import styled, { css } from "styled-components";

import { Flex } from "~/styles";
import { dimensions } from "~/utils";

export const NavLinks = styled.ul<{ isActive: boolean }>(
  ({ isActive }) => css`
    display: none;
    position: fixed;
    width: 100%;
    z-index: 9;
    top: 0;
    transition: all 0.4 ease;
    gap: 0.5rem;

    ${isActive &&
    css`
      display: flex;
      justify-content: center;
      flex-direction: column;
      background-color: var(--col2);
      height: 100vh;
      align-items: end;
      padding-right: 3rem;
    `}

    @media (${dimensions.notebook}) {
      position: relative;
      display: flex;
      align-items: center;
      background-color: initial;
      justify-content: flex-end;
      height: auto;
      flex-direction: row;
      gap: 3rem;
      padding: 1rem 0rem;
    }

    @media (${dimensions.desktop}) {
      gap: 4rem;
    }
  `
);

export const SocialMediaMobile = styled(Flex)`
  position: absolute;
  bottom: 4rem;
  right: 2rem;
  width: initial;

  @media (${dimensions.notebook}) {
    display: none;
  }
`;

export const IconsWrapper = styled(Flex)`
  flex-direction: row;
  gap: 3rem;
  margin-top: 0.7rem;
  align-items: center;
`;
