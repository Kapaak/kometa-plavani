import styled from "styled-components";

type justifyOptions =
  | "space-between"
  | "space-evenly"
  | "center"
  | "space-around"
  | "end"
  | "flex-end"
  | "flex-start"
  | "left"
  | "right";

export const VerticalStack = styled.div<{
  justify?: justifyOptions;
  align?: string;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: string;
  textAlign?: "left" | "center" | "right";
  width?: string;
  relative?: boolean;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  padding?: string;
  margin?: string;
  flex?: string;
  height?: string;
}>`
  position: ${({ relative }) => (relative ? "relative" : "static")};
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  align-items: ${({ align }) => (align ? align : "stretch")};
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  gap: ${({ gap }) => (gap ? gap : "0")};
  height: ${({ height }) => (height ? height : "initial")};
  width: ${({ width }) => (width ? width : "100%")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "nowrap")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  margin: ${({ margin }) => (margin ? margin : "initial")};
  margin: ${({ flex }) => (flex ? flex : "0")};
`;
