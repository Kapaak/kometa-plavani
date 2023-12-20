import styled from "styled-components";

import { Flex } from "~/styles";

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
