import { GetStaticPropsContext, NextPage } from "next";

import { PageLayout } from "~/components/PageLayout";
import { CourseDetailContextProvider } from "~/contexts";
import { Course, PageData, SanityCourse } from "~/domains";
import { PrihlaskyNameScreen, prihlaskyNameData } from "~/screens";
import { getCourse } from "~/utils";

interface CoursePageProps {
  pageData: PageData;
  course: SanityCourse;
}

const CoursePage: NextPage<CoursePageProps> = ({ pageData, course }) => {
  return (
    <CourseDetailContextProvider
      course={course}
      lectureType={pageData.value}
      googleSheetId={pageData.spreadsheetId}
    >
      <PageLayout>
        <PrihlaskyNameScreen pageData={pageData} />
      </PageLayout>
    </CourseDetailContextProvider>
  );
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const courseName = ctx.params?.courseName as Course;
  const pageData = prihlaskyNameData?.find((d) => d.name === courseName);

  if (!pageData)
    return {
      notFound: true,
      revalidate: 10,
    };
  const course = await getCourse(pageData.value);

  return {
    props: {
      pageData,
      course,
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
