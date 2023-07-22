//components
import { Lecture } from "./Lecture";
//styles
import * as S from "./LecturesSection.style";
//data
import { data } from "./LecturesSection.data";

export const LecturesSection = () => {
  return (
    <S.Flex gap="4rem">
      {data.map((d) => (
        <Lecture
          key={d.id}
          headline={d.headline}
          text={d.text}
          image={d.image}
          alt={d.alt}
          name={d.name}
          url={d?.url}
          price={d?.price}
          time={d?.time}
          lectureType={d?.lectureType}
        />
      ))}
    </S.Flex>
  );
};
