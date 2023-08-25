//components
import { Headline, MaxWidth, Text } from "@/styles";
//styles
import * as S from "./FAQSection.style";
//data
import { Expandable } from "@/components/Shared";
import { useSanityHomeContext } from "contexts/SanityHomeContext";
import { PortableText } from "@portabletext/react";

export const FAQSection = () => {
  const { faq } = useSanityHomeContext();
  return (
    <S.FAQSection name="faq">
      <MaxWidth>
        <Headline>Základní informace</Headline>
        <S.Container>
          {faq?.map((d, index) => (
            <S.FAQWrapper key={`${d?.title}_${index}`}>
              <S.Headline>{d?.title}</S.Headline>
              {d?.faqItems.map((item, i) => {
                return (
                  <Expandable
                    key={`${item?.title}_${i}`}
                    title={item?.title}
                    description={
                      <PortableText
                        value={item?.text}
                        key={index}
                        components={{
                          block: {
                            normal: (props) => {
                              return (
                                <Text variant="dark">{props.children}</Text>
                              );
                            },
                          },

                          listItem: {
                            bullet: (props) => {
                              return (
                                <li style={{ marginLeft: "2rem" }}>
                                  <Text variant="dark">{props.children}</Text>
                                </li>
                              );
                            },
                            number: (props) => {
                              return (
                                <li style={{ marginLeft: "2rem" }}>
                                  <Text variant="dark">{props.children}</Text>
                                </li>
                              );
                            },
                          },
                        }}
                      />
                    }
                    icon={item?.icon}
                  />
                );
              })}
            </S.FAQWrapper>
          ))}
        </S.Container>
      </MaxWidth>
    </S.FAQSection>
  );
};
