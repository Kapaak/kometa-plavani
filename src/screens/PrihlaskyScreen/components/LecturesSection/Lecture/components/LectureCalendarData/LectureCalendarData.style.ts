import styled from "styled-components";

import { dimensions } from "~/utils";

export const LectureCalendarTimesGrid = styled.div<{ padding?: string }>`
  display: grid;
  grid-template-columns: 3rem 8rem 8rem 8rem;
  grid-template-rows: 5rem;
  gap: 1rem;
  align-items: center;
  padding: ${({ padding }) => padding || "0"};

  @media (${dimensions.tablet}) {
    grid-template-columns: 3rem 11rem 11rem 11rem;
    gap: 2rem;
  }
`;
