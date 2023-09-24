//interfaces
import { Course, PageData } from "@/domains";
import { GetStaticPropsContext, NextPage } from "next";
import { PrihlaskyNameScreen, prihlaskyNameData } from "@/screens";
import { PageLayout } from "@/components/PageLayout";

interface CoursePageProps {
  pageData: PageData;
}

const CoursePage: NextPage<CoursePageProps> = ({ pageData }) => {
  return (
    <PageLayout>
      <PrihlaskyNameScreen pageData={pageData} />
    </PageLayout>
  );
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const courseName = ctx.params?.courseName as Course;
  const pageData = prihlaskyNameData?.find((d) => d.name === courseName);

  if (!pageData)
    return {
      notFound: true,
    };

  return {
    props: {
      pageData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = prihlaskyNameData.map((data) => ({
    params: {
      courseName: data?.name,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default CoursePage;
