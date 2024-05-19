import styled from "styled-components";

import { Chip, Flex } from "~/styles";
import { getColorFromSkillLevel } from "~/utils/colors";

export const DiscountChip = styled(Chip)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--col1);
  transform: translate(20%, -50%);
`;

export const LectureAvailability = styled(Flex).withConfig({
  shouldForwardProp: (prop) => !["skillLevelId"].includes(prop),
})<{ skillLevelId: number }>`
  position: relative;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px solid
    ${({ skillLevelId }) => getColorFromSkillLevel(skillLevelId)};
`;
