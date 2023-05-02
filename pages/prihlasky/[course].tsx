//interfaces
import { Course } from "@/domains";
import { GetServerSideProps, NextPage } from "next";
import { data } from "../../components/PagePrihlasky/Prihlasky.data";
import { FormContainer } from "@/components/PagePrihlasky/FormContainer";

interface CoursePageProps {
  courseName: Course;
  spreadsheet: string;
}

const CoursePage: NextPage<CoursePageProps> = ({ courseName, spreadsheet }) => {
  return (
    <main>
      <FormContainer courseName={courseName} spreadsheet={spreadsheet} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<{
  courseName: Course;
}> = async (ctx) => {
  const courseName = ctx.query.course as Course;
  const spreadsheet = data?.find((d) => d.name === courseName)?.spreadsheetId;

  return {
    props: {
      courseName,
      spreadsheet,
    },
  };
};

export default CoursePage;
