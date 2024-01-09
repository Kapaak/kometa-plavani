import { InferGetServerSidePropsType } from "next";
import { groq } from "next-sanity";

import { PageLayout } from "~/components/PageLayout";
import { SanityInfoBar } from "~/domains";
import { client } from "~/libs";
import { BlogScreen } from "~/screens/BlogScreen";

interface BlogPageProps
  extends InferGetServerSidePropsType<typeof getStaticProps> {}

export default function BlogPage({ infoBar }: BlogPageProps) {
  return (
    <PageLayout infoBar={infoBar}>
      <BlogScreen />
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const queryInfoBar = groq`*[_type == "infoBar" && visibility == true][0]{title,visibility,text}`;

  const infoBar: SanityInfoBar = await client.fetch(queryInfoBar);

  return {
    props: {
      infoBar,
    },
    revalidate: 10,
  };
};
