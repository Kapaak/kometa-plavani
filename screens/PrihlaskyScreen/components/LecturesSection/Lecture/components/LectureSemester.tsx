import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";
import * as S from "../Lecture.style";
import { Flex } from "@/styles";

enum SemesterOptions {
  FIRST = "1. pololetí",
  SECOND = "2. pololetí",
}

export const LectureSemester = () => {
  const [selectedSemester, setSelectedSemester] = useState(
    SemesterOptions.SECOND
  );

  const isFirstSemesterSelected = selectedSemester === SemesterOptions.FIRST;
  const isSecondSemesterSelected = selectedSemester === SemesterOptions.SECOND;

  return (
    <Flex direction="row" gap="1rem" height="initial" justify="center">
      <S.LectureSemesterButton visible={!isFirstSemesterSelected}>
        {/* {
          <ArrowLeft
            size={20}
            onClick={() => setSelectedSemester(SemesterOptions.FIRST)}
          />
        } */}
      </S.LectureSemesterButton>
      <S.LectureSemesterText variant="dark" bold>
        {selectedSemester}
      </S.LectureSemesterText>
      {/* <S.LectureSemesterButton visible={!isSecondSemesterSelected}>
        {
          <ArrowRight
            size={20}
            onClick={() => setSelectedSemester(SemesterOptions.SECOND)}
          />
        }
      </S.LectureSemesterButton> */}
    </Flex>
  );
};
