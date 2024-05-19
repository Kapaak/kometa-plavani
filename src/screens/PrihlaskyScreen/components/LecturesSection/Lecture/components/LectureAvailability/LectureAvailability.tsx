import { Text } from "~/styles";

import * as S from "./LectureAvailability.style";

interface LectureAvailabilityProps {
  max: number;
  applications: number;
  discount: number;
  skillLevelId: number;
}

export const LectureAvailability = ({
  applications,
  max,
  discount,
  skillLevelId,
}: LectureAvailabilityProps) => {
  return (
    <S.LectureAvailability skillLevelId={skillLevelId}>
      <Text variant="dark">
        <span style={{ color: max - applications > 3 ? "inherit" : "red" }}>
          {max - applications}
        </span>{" "}
        / {max}
      </Text>
      {Boolean(discount) && <S.DiscountChip>-{discount} %</S.DiscountChip>}
    </S.LectureAvailability>
  );
};
