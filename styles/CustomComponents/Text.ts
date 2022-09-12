import styled, { css } from "styled-components";

export interface Props {
  center?: boolean;
  bold?: boolean;
  variant?: "light" | "dark" | "normal";
}

export const Text = styled.p<Props>`
  font-size: var(--ftext);
  ${({ variant }) => {
    switch (variant) {
      case "light":
        return css`
          color: var(--colw);
        `;

      case "dark":
        return css`
          color: var(--colb);
        `;

      case "normal":
        return css`
          color: var(--col2);
        `;

      default:
        return css`
          color: var(--col2);
        `;
    }
  }}
  font-weight: ${({ bold }) => (bold ? "600" : "300")};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;
