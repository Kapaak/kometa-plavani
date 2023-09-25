//styles
import { Flex, Hidden } from "@/styles";
import * as S from "./Lecture.style";
//interfaces
import { Service } from "@/domains";
import { LectureCalendar, LectureDescription } from "./components";
import {
  useGoogleSheetsContext,
  useSanityApplicationsContext,
} from "@/contexts";
import Link from "next/link";
import { Button } from "@/shared";

type LectureProps = Omit<Service, "id">;

export const Lecture = (props: LectureProps) => {
  const {
    headline,
    text,
    image,
    name,
    alt,
    url,
    time,
    price,
    lectureType,
    pricingDocument,
  } = props;
  const { lectureDaysTimesCapacity, coursesInformation } =
    useSanityApplicationsContext();

  const { googleSheets, isLoading, isError } = useGoogleSheetsContext();

  if (!lectureType) return null;

  const courseInformation = coursesInformation[lectureType];

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
              showSemesterSwitcher={
                lectureType === "school" || lectureType === "kindergarden"
              }
              times={lectureDaysTimesCapacity?.[lectureType]?.lectureTimes}
              days={lectureDaysTimesCapacity?.[lectureType]?.lectureDays}
              data={lectureDaysTimesCapacity?.[lectureType]?.lectures}
              capacity={googleSheets?.[lectureType]?.lectures}
            />
            <Hidden isHidden={isLoading || isError}>
              <Link href={`/prihlasky/${url}`} passHref>
                <Button variant="filled">poslat přihlášku</Button>
              </Link>
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
