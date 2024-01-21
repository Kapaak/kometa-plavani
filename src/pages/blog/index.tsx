import { InferGetServerSidePropsType } from "next";

import { PageLayout } from "~/components/PageLayout";
import { SanityBlogsContextProvider } from "~/contexts";
import { BlogScreen } from "~/screens";
import { getBlogs, getInfoBar } from "~/utils";

interface BlogPageProps
  extends InferGetServerSidePropsType<typeof getStaticProps> {}

export default function BlogPage({ infoBar, blogs }: BlogPageProps) {
  return (
    <PageLayout infoBar={infoBar}>
      <SanityBlogsContextProvider sanityData={{ blogs }}>
        <BlogScreen />
      </SanityBlogsContextProvider>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const infoBar = await getInfoBar();
  const blogs = await getBlogs();

  return {
    props: {
      infoBar,
      blogs,
    },
    revalidate: 10,
  };
};
