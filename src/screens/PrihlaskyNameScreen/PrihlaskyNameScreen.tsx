import { PageData } from "~/domains";
import { FormContainer } from "~/screens/PrihlaskyScreen/components";
import { MaxWidth } from "~/styles";

import * as S from "./PrihlaskyNameScreen.style";


interface PrihlaskyNameScreenProps {
  pageData: PageData;
}

export const PrihlaskyNameScreen = ({ pageData }: PrihlaskyNameScreenProps) => {
  return (
    <MaxWidth>
      <S.Wrapper>
        <S.Headline>{pageData?.label}</S.Headline>
        <FormContainer
          courseName={pageData?.name}
          spreadsheetId={pageData?.spreadsheetId}
          templateId={pageData?.templateId}
        />
      </S.Wrapper>
    </MaxWidth>
  );
};
