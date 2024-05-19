import { SkillLevel } from "~/domains";

export function getColorFromSkillLevel(skillLevelId: SkillLevel) {
  switch (skillLevelId) {
    case SkillLevel.BEGINNER:
      return "#7FDAEF";
    case SkillLevel.ADVANCED:
      return "#49C660";
    case SkillLevel.PROFESIONAL:
      return "#ED9A3A";
    default:
      return "transparent";
  }
}
