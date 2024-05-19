import { Flex, Text } from "~/styles";

interface SkillLevelRowProps {
  skillLevelId: number;
  label: string;
}

import * as S from "./SkillLevelRow.style";

export function SkillLevelRow({ label, skillLevelId }: SkillLevelRowProps) {
  return (
    <Flex direction="row" align="center" gap="1rem">
      <S.SkillLevelIndicator skillLevelId={skillLevelId} />{" "}
      <Text variant="dark">{label}</Text>
    </Flex>
  );
}
