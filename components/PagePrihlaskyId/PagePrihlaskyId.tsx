import { Headline, MaxWidth } from "@/styles";
import { FormContainer } from "../PagePrihlasky/FormContainer";
import { Course } from "@/domains";
import { useMemo } from "react";
import * as S from "./PagePrihlaskyId.style";

interface PagePrihlaskyIdProps {
  courseName: Course;
  spreadsheet: string;
}

const PagePrihlaskyId = ({ courseName, spreadsheet }: PagePrihlaskyIdProps) => {
  const courseTranslation = useMemo(() => {
    if (courseName === "kurzy") return "Kurzy";
    if (courseName === "skolky") return "Školky";
    if (courseName === "skoly") return "Školy";

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
export default PagePrihlaskyId;
