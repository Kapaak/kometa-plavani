import { Flex } from "~/styles";

import * as S from "./LectureAvailability.style";

interface LectureAvailabilityProps {
  max: number;
  applications: number;
  discount: number;
}

export const LectureAvailability = ({
  applications,
  max,
  discount,
}: LectureAvailabilityProps) => {
  return (
    <Flex
      relative
      justify="center"
      align="center"
      // width="8rem"
      height=""
      style={{ background: "#fff" }}
    >
      <p style={{ fontWeight: "300" }}>
        <span style={{ color: max - applications > 3 ? "inherit" : "red" }}>
          {max - applications}
        </span>{" "}
        / {max}
      </p>
      {Boolean(discount) && <S.DiscountChip>-{discount} %</S.DiscountChip>}
    </Flex>
  );
};
