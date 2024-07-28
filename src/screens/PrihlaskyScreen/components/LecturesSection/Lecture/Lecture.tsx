import { Button } from "~/components/Shared";
import { useCoursesContext, useSanityDataContext } from "~/contexts";
import { Service } from "~/domains";
import { Flex, Hidden } from "~/styles";

import { LectureCalendar, LectureDescription } from "./components";

import * as S from "./Lecture.style";

type LectureProps = Omit<
  Service,
  "id" | "pricingDocument" | "headline" | "price"
>;

export const Lecture = (props: LectureProps) => {
  const { text, image, name, alt, url, lectureType, semesterLabels } = props;
  const { lectureDaysTimesCapacity, coursesInformation } =
    useSanityDataContext();

  const { lectures } = useCoursesContext();

  const isSemesterSwitcherActive =
    lectureType === "school" || lectureType === "kindergarden";

  const { isLoading, isError } = useCoursesContext();

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
          <Flex gap="6rem" align="end" height="100%">
            <LectureCalendar
              isError={isError}
              isLoading={isLoading}
              showSemesterSwitcher={isSemesterSwitcherActive}
              // times={lectureDaysTimesCapacity?.[lectureType]?.lectureTimes}
              times={lectures?.[lectureType]?.lectureTimes}
              days={lectures?.[lectureType]?.lectureDays}
              data={lectures?.[lectureType]?.lectures}
              capacity={lectures?.[lectureType]?.lectures}
              semesterLabels={semesterLabels}
            />

            <Hidden isHidden={isLoading || isError}>
              {/* <Button variant="filled" disabled>
                Připravujeme
              </Button> */}
              <S.Link
                href={`/prihlasky/${url}`}
                passHref
                disabled={isCalendarEmpty}
              >
                <Button variant="filled" disabled={isCalendarEmpty}>
                  {isCalendarEmpty ? "Kurz není dostupný" : "Poslat přihlášku"}
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
