import { GetStaticPropsContext } from "next";

import { PageLayout } from "~/components/PageLayout";
import { CourseDetailContextProvider } from "~/contexts";
import { SanityPreliminaryCourse } from "~/domains";
import { PreliminaryCourseSignScreen } from "~/screens";
import { getAllPreliminaryCourses, getPreliminaryCourse } from "~/utils";

interface PreliminaryCourseProps {
  course: SanityPreliminaryCourse;
}

export default function PreliminaryCoursePage({
  course,
}: PreliminaryCourseProps) {
  return (
    <CourseDetailContextProvider
      course={course}
      lectureType={course?.value}
      googleSheetId={course?.googleSheetId}
    >
      <PageLayout>
        <PreliminaryCourseSignScreen
          formTypeId={course?.value}
          title={course?.title}
          semesterFrom={course?.semesterFrom}
          semesterTo={course?.semesterTo}
          googleSheetId={course?.googleSheetId}
        />
      </PageLayout>
    </CourseDetailContextProvider>
  );
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const courseSlug = ctx.params?.preliminaryCourseSlug as string;

  const preliminaryCourse = await getPreliminaryCourse(courseSlug);

  if (!preliminaryCourse)
    return {
      notFound: true,
      revalidate: 10,
    };

  return {
    props: {
      course: preliminaryCourse,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const preliminaryCourses = await getAllPreliminaryCourses();

  if (!preliminaryCourses)
    return {
      notFound: true,
      revalidate: 10,
    };

  const paths = preliminaryCourses.map((course) => ({
    params: {
      preliminaryCourseSlug: course?.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
