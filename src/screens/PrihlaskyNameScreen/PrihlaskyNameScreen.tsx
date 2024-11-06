import { EnrolCourseForm } from "~/components/EnrolCourseForm";
import { EnrollmentDetail } from "~/domains";
import { MaxWidth } from "~/styles";

import * as S from "./PrihlaskyNameScreen.style";

interface PrihlaskyNameScreenProps {
  pageData: EnrollmentDetail;
}

export const PrihlaskyNameScreen = ({ pageData }: PrihlaskyNameScreenProps) => {
  return (
    <MaxWidth>
      <S.Wrapper>
        <S.Headline>{pageData?.label}</S.Headline>
        <EnrolCourseForm formTypeId={pageData?.value} />
      </S.Wrapper>
    </MaxWidth>
  );
};
