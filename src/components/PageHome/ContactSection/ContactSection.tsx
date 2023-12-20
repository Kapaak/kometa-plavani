import TrainerImage from "~/public/images/trainer.png";

import { Headline, MaxWidth, Text, VerticalStack } from "~/styles";

import { data } from "./ContactSection.data";
import { ContactSectionItem } from "./ContactSectionItem";

import * as S from "./ContactSection.style";

export const ContactSection = () => {
  return (
    <S.ContactSection name="contact">
      <MaxWidth>
        <Headline>Kontakt</Headline>
        <S.ContactSectionWrapper gap="2rem">
          <S.Image
            src={TrainerImage}
            alt="hlavní trenérka plavání Anna Matušová"
          />
          <VerticalStack flex="1">
            <Text bold variant="dark">
              Anna Matušová
            </Text>
            <Text variant="dark">
              Plavání se věnuji od malička a prošla jsem si celou plaveckou
              přípravku. Poté jsem začala trénovat děti. Momentálně vedu plavání
              na Kohoutovicích a Holzové. Volný čas ráda trávím cestováním a
              sledováním filmů.
            </Text>

            <VerticalStack padding="2rem 0 0 0" gap="2rem">
              {data?.map((contact) => (
                <ContactSectionItem
                  key={contact.title}
                  title={contact.title}
                  description={contact.description}
                  value={contact.value}
                  icon={contact.icon}
                />
              ))}
            </VerticalStack>
          </VerticalStack>
        </S.ContactSectionWrapper>
      </MaxWidth>
    </S.ContactSection>
  );
};
