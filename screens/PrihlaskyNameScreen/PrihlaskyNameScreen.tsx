import { MaxWidth } from "@/styles";
import { Course } from "@/domains";
import { useMemo } from "react";
import * as S from "./PrihlaskyNameScreen.style";
import { FormContainer } from "screens/PrihlaskyScreen/components";

interface PrihlaskyNameScreenProps {
  courseName: Course;
  spreadsheet: string;
}

export const PrihlaskyNameScreen = ({
  courseName,
  spreadsheet,
}: PrihlaskyNameScreenProps) => {
  const courseTranslation = useMemo(() => {
    if (courseName === "zdokonalovaci-plavani") return "Zdokonalovací plavání";
    if (courseName === "skoly-skolky") return "Školy a školky";
    if (courseName === "zakladni-plavani") return "Školy";

    return "";
  }, [courseName]);

  return (
    <MaxWidth>
      <S.Wrapper>
        <S.Headline>{courseTranslation}</S.Headline>
        <FormContainer courseName={courseName} spreadsheet={spreadsheet} />
      </S.Wrapper>
    </MaxWidth>
  );
};
