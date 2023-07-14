import { Flex } from "@/styles";

interface LectureAvailabilityProps {
  max: number;
  selected: number;
}

export const LectureAvailability = ({
  selected,
  max,
}: LectureAvailabilityProps) => {
  return (
    <Flex
      justify="center"
      align="center"
      width="8rem"
      style={{ background: "#fff" }}
    >
      <p>
        {selected} / {max}
      </p>
    </Flex>
  );
};
