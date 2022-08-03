import styled, { css } from "styled-components";

type bgCol = "yellow" | "blue" | "transparent";

export const Button = styled.button<{ bgCol?: bgCol }>`
  text-transform: uppercase;
  padding: 1.2rem 2.5rem;
  font-family: var(--font1);
  border: none;
  border-radius: 2.4rem;
  font-size: var(--fbutton);
  cursor: pointer;
  letter-spacing: 0.11rem;

  ${({ bgCol }) => {
    switch (bgCol) {
      case "yellow":
        return css`
          background-color: var(--col1);
          color: var(--col2);
        `;

      case "blue":
        return css`
          background-color: var(--col2);
          color: var(--colw);
        `;
    }
  }}
`;
