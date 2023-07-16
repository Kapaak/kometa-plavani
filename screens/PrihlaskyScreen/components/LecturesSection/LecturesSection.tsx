//components
import { Lecture } from "./Lecture";
//styles
import * as S from "./LecturesSection.style";
//data
import { data } from "./LecturesSection.data";
import { useLectureOptions } from "@/hooks";
import { useLecturesContext } from "@/contexts";

export const LecturesSection = () => {
  //TODO: vytvor hook pro ziskavani dat pro vsechny typy:
  //skoly, skolky, zakladni plavani, zdokonalovaci plavani, kondicni plavani
  const { options } = useLectureOptions();
  const ctx = useLecturesContext();
  console.log(
    "🚀 ~ file: LecturesSection.tsx:16 ~ LecturesSection ~ ctx:",
    ctx
  );
  return (
    <S.Flex gap="4rem">
      <button onClick={() => console.log(options, "pts")}>show options</button>
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
