import styled, { css } from "styled-components";

interface Props {
  variant: "yellow" | "transparent-blue" | "transparent-yellow";
}

export const A = styled.a<Props>`
  display: inline-block;
  border-radius: 2.4rem;
  text-transform: uppercase;
  font-family: var(--font1);
  font-size: var(--fbutton);
  padding: 1.2rem 2.5rem;
  letter-spacing: 0.11rem;
  cursor: pointer;

  ${({ variant }) => {
    switch (variant) {
      case "yellow":
        return css`
          background-color: var(--col1);
          color: var(--col2);
        `;
      case "transparent-blue":
        return css`
          color: var(--col2);
          border: 2px solid var(--col2);
        `;

      case "transparent-yellow":
        return css`
          color: var(--colw);
          border: 2px solid var(--col1);
        `;
    }
  }}
`;