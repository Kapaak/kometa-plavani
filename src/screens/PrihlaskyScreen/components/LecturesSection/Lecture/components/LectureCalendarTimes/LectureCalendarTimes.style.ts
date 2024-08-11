import styled from "styled-components";

import { dimensions } from "~/utils";

export const LectureCalendarTimes = styled.div<{
  padding?: string;
  columns?: number;
}>`
  display: grid;
  grid-template-columns: ${({ columns }) => `3rem repeat(${columns}, 8rem)`};
  grid-template-rows: 3.8rem;
  gap: 1.2rem;
  align-items: center;
  padding: ${({ padding }) => padding || "0"};

  @media (${dimensions.tablet}) {
    grid-template-columns: ${({ columns }) => `3rem repeat(${columns}, 11rem)`};
    gap: 2rem;
  }
`;
