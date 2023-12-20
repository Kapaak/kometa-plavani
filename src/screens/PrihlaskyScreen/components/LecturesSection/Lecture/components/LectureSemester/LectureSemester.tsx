import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import * as S from "./LectureSemester.style";
import { Flex } from "~/styles";

interface LectureSemesterProps {
  selectedSemester: 1 | 2;
  onPrev?: () => void;
  onNext?: () => void;
}

export const LectureSemester = ({
  selectedSemester,
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
        {<ArrowLeft size={20} onClick={onPrev} />}
      </S.LectureSemesterButton>
      <S.LectureSemesterText variant="dark" bold>
        {selectedSemester}. pololetí
      </S.LectureSemesterText>
      <S.LectureSemesterButton visible={!isSecondSemesterSelected}>
        {<ArrowRight size={20} onClick={onNext} />}
      </S.LectureSemesterButton>
    </Flex>
  );
};
