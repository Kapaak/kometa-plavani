import styled from "styled-components";

export const Flex = styled.div<{
  justify?: string;
  align?: string;
  direction?: string;
  gap?: string;
  textAlign?: string;
  width?: string;
  relative?: boolean;
}>`
  position: ${({ relative }) => (relative ? "relative" : "static")};
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  align-items: ${({ align }) => (align ? align : "stretch")};
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  gap: ${({ gap }) => (gap ? gap : "0")};
  height: 100%;
  width: ${({ width }) => (width ? width : "100%")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
`;
