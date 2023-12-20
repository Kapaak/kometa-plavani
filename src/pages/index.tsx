import type { InferGetServerSidePropsType, NextPage } from "next";

import { groq } from "next-sanity";

import Home from "~/components/PageHome/Home";
import { PageLayout } from "~/components/PageLayout";
import { SanityHomeContextProvider } from "~/contexts";
import {
  SanityActuality,
  SanityDocument,
  SanityFaq,
  SanityInfoBar,
} from "~/domains";
import { client } from "~/libs";

interface Props
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const HomePage: NextPage<Props> = ({
  actualities,
  faqs,
  documents,
  infoBar,
}) => {
  return (
    <SanityHomeContextProvider sanityData={{ actualities, faqs, documents }}>
      <PageLayout infoBar={infoBar}>
        <Home />
      </PageLayout>
    </SanityHomeContextProvider>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const queryActualities = groq`*[_type == "home" && visibility == true]{text,order,title}|order(order asc)`;
  const queryFAQ = groq`*[_type == "faq"]{title,order,faqItems[]{icon,text,title}}|order(order asc)`;
  const queryDocument = groq`*[_type == "uploadFile"]{title,order,file{asset->{url}}}|order(order asc)`;
  const queryInfoBar = groq`*[_type == "infoBar" && visibility == true][0]{title,visibility,text}`;

  const actualities: SanityActuality[] = await client.fetch(queryActualities);
  const faqs: SanityFaq[] = await client.fetch(queryFAQ);
  const documents: SanityDocument[] = await client.fetch(queryDocument);
  const infoBar: SanityInfoBar = await client.fetch(queryInfoBar);

  return {
    props: {
      actualities,
      faqs,
      documents,
      infoBar,
    },
  };
};
