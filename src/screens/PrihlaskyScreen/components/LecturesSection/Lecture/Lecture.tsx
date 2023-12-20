//styles
import Link from "next/link";

import { Button } from "~/components/Shared";
import {
  useGoogleSheetsContext,
  useLecturesContext,
  useSanityApplicationsContext,
} from "~/contexts";
import { Service } from "~/domains";
import { Flex, Hidden } from "~/styles";

import { LectureCalendar, LectureDescription } from "./components";

import * as S from "./Lecture.style";
//interfaces




type LectureProps = Omit<
  Service,
  "id" | "pricingDocument" | "headline" | "price"
>;

export const Lecture = (props: LectureProps) => {
  const { text, image, name, alt, url, lectureType } = props;
  const { lectureDaysTimesCapacity, coursesInformation } =
    useSanityApplicationsContext();

  const { lectures } = useLecturesContext();

  const isSemesterSwitcherActive =
    lectureType === "school" || lectureType === "kindergarden";

  const { googleSheets, isLoading, isError } = useGoogleSheetsContext();

  if (!lectureType) return null;

  const courseInformation = coursesInformation[lectureType];
  const isCalendarEmpty =
    !lectureDaysTimesCapacity?.[lectureType]?.lectureTimes?.length;

  return (
    <S.LectureSection name={name}>
      <S.LectureGrid>
        <S.PaddingWrapper padding="3.3rem 0 3.3rem 5.1rem">
          <LectureDescription
            title={courseInformation?.title}
            text={text}
            price={courseInformation?.price}
            time={courseInformation?.duration}
            pricingDocument={courseInformation?.file}
            age={courseInformation?.age}
          />
        </S.PaddingWrapper>
        <S.PaddingWrapper padding="3.3rem">
          <Flex gap="6rem" align="end">
            <LectureCalendar
              isError={isError}
              isLoading={isLoading}
              showSemesterSwitcher={isSemesterSwitcherActive}
              // times={lectureDaysTimesCapacity?.[lectureType]?.lectureTimes}
              times={lectures?.[lectureType]?.lectureTimes}
              days={lectures?.[lectureType]?.lectureDays}
              data={lectures?.[lectureType]?.lectures}
              capacity={lectures?.[lectureType]?.lectures}
            />
            <Hidden isHidden={isLoading || isError}>
              <S.Link
                href={`/prihlasky/${url}`}
                passHref
                disabled={isCalendarEmpty}
              >
                <Button variant="filled" disabled={isCalendarEmpty}>
                  {isCalendarEmpty ? "Kurz není dostupný" : "poslat přihlášku"}
                </Button>
              </S.Link>
            </Hidden>
          </Flex>
        </S.PaddingWrapper>
        <S.DesktopImageContainer>
          <S.Img src={image} alt={alt} quality="80" />
        </S.DesktopImageContainer>
      </S.LectureGrid>
    </S.LectureSection>
  );
};
