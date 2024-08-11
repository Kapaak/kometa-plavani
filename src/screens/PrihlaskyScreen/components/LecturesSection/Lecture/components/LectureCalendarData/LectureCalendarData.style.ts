import styled from "styled-components";

import { dimensions } from "~/utils";

export const LectureCalendarTimesGrid = styled.div<{
  padding?: string;
  columns?: number;
}>`
  display: grid;
  grid-template-columns: ${({ columns }) => `3rem repeat(${columns}, 8rem)`};
  grid-template-rows: 5rem;
  gap: 1rem;
  align-items: center;
  padding: ${({ padding }) => padding || "0"};

  @media (${dimensions.tablet}) {
    grid-template-columns: ${({ columns }) => `3rem repeat(${columns}, 11rem)`};
    gap: 2rem;
  }
`;
