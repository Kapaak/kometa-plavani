import { Headline, MaxWidth, TextBuilder, Accordion } from "~/styles";
import * as S from "./FAQSection.style";
import { useSanityHomeContext } from "~/contexts";

export const FAQSection = () => {
  const { faqs } = useSanityHomeContext();
  return (
    <S.FAQSection name="faq">
      <MaxWidth>
        <Headline>Základní informace</Headline>
        <S.Container>
          {faqs?.map((faq, index) => {
            const accordionItems = faq?.faqItems?.map((faqItem) => {
              return {
                title: faqItem?.title,
                icon: faqItem?.icon,
                content: (
                  <TextBuilder
                    value={faqItem?.text}
                    options={{ paragraph: { color: "dark" } }}
                  />
                ),
              };
            });
            return (
              <S.FAQWrapper key={`${faq?.title}_${index}`}>
                <S.Headline>{faq?.title}</S.Headline>
                <Accordion accordionItems={accordionItems} />
              </S.FAQWrapper>
            );
          })}
        </S.Container>
      </MaxWidth>
    </S.FAQSection>
  );
};
