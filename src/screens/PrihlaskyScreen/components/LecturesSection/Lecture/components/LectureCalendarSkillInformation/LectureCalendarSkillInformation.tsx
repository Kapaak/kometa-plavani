import { SkillLevel } from "~/domains";

import { SkillLevelRow } from "../SkillLevelRow";

import * as S from "./LectureCalendarSkillInformation.style";

export function LectureCalendarSkillInformation() {
  return (
    <S.LectureCalendarSkillInformation>
      <SkillLevelRow label="Začátečník" skillLevelId={SkillLevel.BEGINNER} />
      <SkillLevelRow label="Pokročilý" skillLevelId={SkillLevel.ADVANCED} />
      <SkillLevelRow
        label="Všechny plavecké úrovně"
        skillLevelId={SkillLevel.UNSET}
      />
    </S.LectureCalendarSkillInformation>
  );
}
