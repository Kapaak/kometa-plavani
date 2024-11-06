import { EnrolCourseForm } from "~/components/EnrolCourseForm";
import { MaxWidth } from "~/styles";
import { convertDateToLocaleString } from "~/utils/date";
import { joinValues } from "~/utils/format";

import * as S from "./PreliminaryCourseSign.style";

interface PreliminaryCourseSignScreenProps {
  title?: string;
  formTypeId?: string;
  semesterFrom?: string;
  semesterTo?: string;
  googleSheetId?: string;
}

export function PreliminaryCourseSignScreen({
  formTypeId,
  googleSheetId,
  title,
  semesterTo,
  semesterFrom,
}: PreliminaryCourseSignScreenProps) {
  return (
    <MaxWidth>
      <S.Headline>{`Předběžná přihláška - ${title}`}</S.Headline>
      <S.SubHeadline>
        {joinValues(
          [
            convertDateToLocaleString(semesterFrom, "MMMM YYYY"),
            convertDateToLocaleString(semesterTo, "MMMM YYYY"),
          ],
          { separator: " - " }
        )}
      </S.SubHeadline>
      <EnrolCourseForm formTypeId={formTypeId} googleSheetId={googleSheetId} />
    </MaxWidth>
  );
}
