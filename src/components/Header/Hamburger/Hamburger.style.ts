import styled, { css } from "styled-components";

import { dimensions } from "~/utils";

export const Hamburger = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})<{ isOpen: boolean }>`
  position: relative;
  height: 2.6rem;
  width: 3.4rem;
  display: flex;
  margin: 1rem 2rem;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 10;

  & > p {
    width: 100%;
    height: 0.3rem;
    border-radius: 0.2rem;
    transition: all 0.3s ease-in;
    transform-origin: center;

    &:last-child {
      transition: width 0.3s ease-in;
    }
  }

  ${({ isOpen }) => {
    if (isOpen)
      return css`
        p {
          background-color: var(--colw);

          &:first-child {
            /* transform: translateY(6px) rotate(45deg); */
            transform: translateY(10px) rotate(45deg);
            margin-left: 0.5rem;
            width: 80%;
          }

          &:nth-child(2) {
            transform: translateY(10px) rotate(-45deg);
            margin: -2.5rem 0 0 0.5rem;
            width: 80%;
          }

          &:last-child {
            transform: translateY(10px);
            width: 100%;
          }
        }
      `;
    if (!isOpen)
      return css`
        p {
          background-color: var(--col2);

          &:first-child {
            transform: rotate(0);
            margin-left: 0;
            width: 100%;
          }

          &:nth-child(2) {
            transform: rotate(0);
            margin: 0;
            width: 100%;
          }

          &:last-child {
            width: 50%;
          }
        }
      `;
  }}

  @media (${dimensions.notebook}) {
    display: none;
  }
`;
