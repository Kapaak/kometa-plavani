import styled from "styled-components";

import { Text } from "~/styles";

export const LectureSemesterButton = styled.button<{ visible: boolean }>`
  cursor: pointer;
  border: none;
  background: none;
  visibility: ${({ visible }) => (visible ? "inherit" : "hidden")};
`;

export const LectureSemesterText = styled(Text)`
  padding: 1.5rem 0;
`;
