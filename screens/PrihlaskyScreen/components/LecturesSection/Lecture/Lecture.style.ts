//libraries
import styled from "styled-components";
//styles
import { Flex as SFlex, Headline as SHeadline } from "@/styles";
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
  border-radius: var(--small-border-rad);
  overflow: hidden;
  height: 40rem;
  flex: 1 1 50%;
  box-shadow: var(--shadow);

  @media (${dimensions.notebook}) {
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

export const LectureGrid = styled.div`
  display: grid;
  grid-template-columns: 2rem 10rem 10rem 10rem;
  gap: 1rem;
`;
