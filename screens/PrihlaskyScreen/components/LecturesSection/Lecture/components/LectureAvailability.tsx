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
      // width="8rem"
      style={{ background: "#fff" }}
    >
      <p style={{ fontWeight: "300" }}>
        <span style={{ color: selected > 3 ? "inherit" : "red" }}>
          {selected}
        </span>{" "}
        / {max}
      </p>
    </Flex>
  );
};
