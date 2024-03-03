import { GetStaticPropsContext, NextPage } from "next";

import { PageLayout } from "~/components/PageLayout";
import { CourseDetailContextProvider } from "~/contexts";
import { Course, PageData, SanityCourse } from "~/domains";
import { PrihlaskyNameScreen, prihlaskyNameData } from "~/screens";
import { getCourses } from "~/utils";

interface CoursePageProps {
  pageData: PageData;
  courses: SanityCourse[];
}

const CoursePage: NextPage<CoursePageProps> = ({ pageData, courses }) => {
  return (
    <CourseDetailContextProvider courses={courses} lectureType={pageData.value}>
      <PageLayout>
        <PrihlaskyNameScreen pageData={pageData} />
      </PageLayout>
    </CourseDetailContextProvider>
  );
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const courseName = ctx.params?.courseName as Course;
  const pageData = prihlaskyNameData?.find((d) => d.name === courseName);

  const courses = await getCourses();

  if (!pageData)
    return {
      notFound: true,
      revalidate: 10,
    };

  return {
    props: {
      pageData,
      courses,
    },
    revalidate: 10,
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
