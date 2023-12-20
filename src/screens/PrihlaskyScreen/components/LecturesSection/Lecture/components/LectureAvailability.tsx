import { Flex } from "~/styles";

interface LectureAvailabilityProps {
  max: number;
  applications: number;
}

export const LectureAvailability = ({
  applications,
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
        <span style={{ color: max - applications > 3 ? "inherit" : "red" }}>
          {max - applications}
        </span>{" "}
        / {max}
      </p>
    </Flex>
  );
};
