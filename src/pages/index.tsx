import type { InferGetServerSidePropsType, NextPage } from "next";

import Home from "~/components/PageHome/Home";
import { PageLayout } from "~/components/PageLayout";
import { SanityHomeContextProvider } from "~/contexts";
import { getActualities, getDocuments, getFAQs, getInfoBar } from "~/utils";

interface Props extends InferGetServerSidePropsType<typeof getStaticProps> {}

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

export const getStaticProps = async () => {
  const actualities = await getActualities();
  const faqs = await getFAQs();
  const documents = await getDocuments();
  const infoBar = await getInfoBar();

  return {
    props: {
      actualities,
      faqs,
      documents,
      infoBar,
    },
    revalidate: 10,
  };
};
