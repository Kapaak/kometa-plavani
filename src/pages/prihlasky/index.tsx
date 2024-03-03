import { InferGetServerSidePropsType, NextPage } from "next";

import { PageLayout } from "~/components/PageLayout";
import { CoursesContextProvider } from "~/contexts";
import { PrihlaskyScreen } from "~/screens";
import { getCourses, getInfoBar } from "~/utils";

interface Props extends InferGetServerSidePropsType<typeof getStaticProps> {}

const PrihlaskyPage: NextPage<Props> = ({ courses, infoBar }) => {
  return (
    <CoursesContextProvider courses={courses}>
      <PageLayout infoBar={infoBar}>
        <PrihlaskyScreen />
      </PageLayout>
    </CoursesContextProvider>
  );
};

export default PrihlaskyPage;

export const getStaticProps = async () => {
  const courses = await getCourses();
  const infoBar = await getInfoBar();

  return {
    props: {
      courses,
      infoBar,
    },
    revalidate: 10,
  };
};
