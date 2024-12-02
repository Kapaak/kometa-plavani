import { ArrowLeft } from "@phosphor-icons/react";

import { Flex } from "~/styles";

import * as S from "./LectureSemester.style";

interface LectureSemesterProps {
  selectedSemester: 1 | 2;
  semesterLabels?: string[];
  onPrev?: () => void;
  onNext?: () => void;
}

export const LectureSemester = ({
  selectedSemester,
  semesterLabels,
  onNext,
  onPrev,
}: LectureSemesterProps) => {
  const isFirstSemesterSelected = selectedSemester === 1;
  const isSecondSemesterSelected = selectedSemester === 2;

  return (
    <Flex
      direction="row"
      gap="1rem"
      height="initial"
      justify="center"
      align="center"
    >
      <S.LectureSemesterButton visible={!isFirstSemesterSelected}>
        {onPrev && <ArrowLeft size={20} onClick={onPrev} />}
      </S.LectureSemesterButton>
      <S.LectureSemesterText variant="dark" bold>
        {isFirstSemesterSelected && semesterLabels?.[0]}
        {isSecondSemesterSelected && semesterLabels?.[1]}
      </S.LectureSemesterText>
      {/* <S.LectureSemesterButton visible={!isSecondSemesterSelected}>
        {onNext && <ArrowRight size={20} onClick={onNext} />}
      </S.LectureSemesterButton> */}
    </Flex>
  );
};
