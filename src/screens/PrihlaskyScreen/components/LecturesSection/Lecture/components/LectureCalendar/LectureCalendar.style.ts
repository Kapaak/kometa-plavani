import styled from "styled-components";

import { Flex } from "~/styles";
import { dimensions } from "~/utils";

export const LectureCalendar = styled(Flex)`
  position: relative;
  height: 100%;
`;

export const ActionMessage = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -30%;
  align-items: center;
  justify-content: center;
`;

export const OverflowContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  max-width: calc(100vw - 6rem);

  @media (${dimensions.tablet}) {
    max-width: calc(100vw - 6rem - 6.4rem);
  }
`;
