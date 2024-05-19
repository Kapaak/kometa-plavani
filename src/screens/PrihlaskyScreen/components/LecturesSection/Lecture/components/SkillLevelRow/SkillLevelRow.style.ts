import styled from "styled-components";

import { getColorFromSkillLevel } from "~/utils/colors";

export const SkillLevelIndicator = styled.div<{ skillLevelId: number }>`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ skillLevelId }) =>
    getColorFromSkillLevel(skillLevelId)};
`;
