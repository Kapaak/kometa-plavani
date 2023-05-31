//components
import { Headline, MaxWidth, SectionElement } from "@/styles";
//styles
import * as S from "./FAQSection.style";
//data
import { data } from "./FAQSection.data";
import { Expandable } from "@/components/Shared";

export const FAQSection = () => {
  return (
    <SectionElement name="faq">
      <MaxWidth>
        <Headline>Základní informace</Headline>
        <S.Container>
          {data?.map((d) => (
            <S.FAQWrapper key={d?.id}>
              <S.Headline>{d?.headline}</S.Headline>
              {d?.items.map((item) => (
                <Expandable
                  key={item?.id}
                  title={item?.title}
                  description={item?.description}
                  icon={item?.icon}
                />
              ))}
            </S.FAQWrapper>
          ))}
        </S.Container>
      </MaxWidth>
    </SectionElement>
  );
};
