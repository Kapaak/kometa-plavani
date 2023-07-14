//styles
import { Flex, SectionElement } from "@/styles";
import * as S from "./Lecture.style";
//interfaces
import { Service } from "@/domains";
import { LectureCalendar, LectureDescription } from "./components";

type LectureProps = Omit<Service, "id">;

export const Lecture = (props: LectureProps) => {
  const { headline, text, image, name, alt, url, time, price } = props;
  console.log(props.url, "props");

  return (
    <SectionElement name={name}>
      <Flex direction="row" gap="6rem">
        <LectureDescription
          title={headline}
          text={text}
          price={price}
          time={time}
          url={url}
        />
        <LectureCalendar />
        <S.DesktopImageContainer>
          <S.Img src={image} alt={alt} />
        </S.DesktopImageContainer>
      </Flex>
    </SectionElement>
  );
};
