//styles
import { Flex, SectionElement } from "@/styles";
import * as S from "./Lecture.style";
//interfaces
import { Service } from "@/domains";
import { LectureCalendar, LectureDescription } from "./components";
import { useLecturesContext } from "@/contexts";
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
  const { getLectureSheetsByType } = useLecturesContext();
  //todo pak predelat tu funkci na hodnotu

  return (
    <S.LectureSection name={name}>
      <S.LectureGrid>
        <S.PaddingWrapper padding="3.3rem 0 3.3rem 5.1rem">
          <LectureDescription
            title={headline}
            text={text}
            price={price}
            time={time}
            url={url}
            pricingDocument={pricingDocument}
          />
        </S.PaddingWrapper>
        <S.PaddingWrapper padding="3.3rem">
          <Flex gap="6rem" align="end">
            <LectureCalendar
              showSemesterSwitcher={
                lectureType === "school" || lectureType === "kindergarden"
              }
              times={getLectureSheetsByType(lectureType)?.lectureTimes}
              days={getLectureSheetsByType(lectureType)?.lectureDays}
              data={getLectureSheetsByType(lectureType)?.lectures}
            />
            <Link href={`/prihlasky/${url}`} passHref>
              <Button variant="filled">poslat přihlášku</Button>
            </Link>
          </Flex>
        </S.PaddingWrapper>
        <S.DesktopImageContainer>
          <S.Img src={image} alt={alt} quality="80" />
        </S.DesktopImageContainer>
      </S.LectureGrid>
    </S.LectureSection>
  );
};
