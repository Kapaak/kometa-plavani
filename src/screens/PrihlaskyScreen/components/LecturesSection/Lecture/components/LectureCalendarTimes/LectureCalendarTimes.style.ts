import styled from "styled-components";
import { dimensions } from "~/utils";

export const LectureCalendarTimes = styled.div<{ padding?: string }>`
  display: grid;
  grid-template-columns: 3rem 8rem 8rem 8rem;
  grid-template-rows: 3.6rem;
  gap: 1.2rem;
  align-items: center;
  padding: ${({ padding }) => padding || "0"};

  @media (${dimensions.tablet}) {
    grid-template-columns: 3rem 11rem 11rem 11rem;
  }
`;
