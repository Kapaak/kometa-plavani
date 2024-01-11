import styled from "styled-components";

type ScrollableType = {
  direction: "horizontal" | "vertical";
};

export const Scrollable = styled.div<ScrollableType>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};
  overflow-x: ${({ direction }) =>
    direction === "horizontal" ? "auto" : "hidden"};
  overflow-y: ${({ direction }) =>
    direction === "vertical" ? "auto" : "hidden"};
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;
