import { MaxWidth } from "~/styles";
import { PageData } from "~/domains";
import * as S from "./PrihlaskyNameScreen.style";
import { FormContainer } from "~/screens/PrihlaskyScreen/components";

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
