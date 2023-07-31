//libraries
import styled from "styled-components";
//styles
import {
  Flex as SFlex,
  Headline as SHeadline,
  SectionElement,
  Text,
} from "@/styles";
import { dimensions } from "@/utils";
import Image from "next/image";

export const Img = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const DesktopImageContainer = styled.div`
  display: none;
  position: relative;
  border-radius: 0 var(--small-border-rad) var(--small-border-rad) 0;
  overflow: hidden;

  @media (${dimensions.desktop}) {
    display: block;
  }
`;

export const Flex = styled(SFlex)`
  align-items: flex-start;
  flex: 1 1 50%;
`;

export const Headline = styled.h2`
  font-size: 3rem;
  font-family: var(--font1);
  font-weight: 500;
  letter-spacing: 0.08rem;
  color: var(--col2);

  @media (${dimensions.notebook}) {
    font-size: 4rem;
  }
`;

export const LectureCalendar = styled(Flex)`
  height: 100%;
`;

export const LectureSemesterButton = styled.button<{ visible: boolean }>`
  cursor: pointer;
  border: none;
  background: none;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const LectureCalendarTimesGrid = styled.div<{ padding?: string }>`
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

export const LectureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (${dimensions.tabletX}) {
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (${dimensions.desktop}) {
    grid-template-columns: 1fr 1fr 35rem;
  }
`;

export const LectureSection = styled(SectionElement)`
  border-radius: var(--small-border-rad);

  @media (${dimensions.tablet}) {
    background-color: rgba(220, 233, 250, 0.25);
  }
`;

export const LectureSemesterText = styled(Text)`
  padding: 1.5rem 0;
`;

export const PaddingWrapper = styled.div<{ padding?: string }>`
  padding: 2rem 0;

  @media (${dimensions.tablet}) {
    padding: 3.2rem;
  }

  @media (${dimensions.desktop}) {
    padding: ${({ padding }) => padding || "0"};
  }
`;
