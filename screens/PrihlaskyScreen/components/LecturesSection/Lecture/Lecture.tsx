//styles
import { Flex, SectionElement } from "@/styles";
import * as S from "./Lecture.style";
//interfaces
import { Service } from "@/domains";
import { LectureCalendar, LectureDescription } from "./components";
import { useLecturesContext } from "@/contexts";

type LectureProps = Omit<Service, "id">;

export const Lecture = (props: LectureProps) => {
  const { headline, text, image, name, alt, url, time, price, lectureType } =
    props;
  const { googleSheets, getLectureSheetsByType } = useLecturesContext();
  //todo pak predelat tu funkci na hodnotu

  return (
    <SectionElement name={name}>
      <button onClick={() => console.log(googleSheets)}>show ggl</button>
      <button onClick={() => console.log(getLectureSheetsByType(lectureType))}>
        show tpe
      </button>
      <Flex direction="row" gap="6rem">
        <LectureDescription
          title={headline}
          text={text}
          price={price}
          time={time}
          url={url}
        />
        <LectureCalendar
          times={getLectureSheetsByType(lectureType)?.lectureTimes}
          days={getLectureSheetsByType(lectureType)?.lectureDays}
          data={getLectureSheetsByType(lectureType)?.lectures}
        />
        <S.DesktopImageContainer>
          <S.Img src={image} alt={alt} />
        </S.DesktopImageContainer>
      </Flex>
    </SectionElement>
  );
};
