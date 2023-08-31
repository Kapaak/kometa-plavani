import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { PrihlaskyScreen } from "@/screens";
import { SanityApplicationsContextProvider } from "@/contexts";
import { client } from "@/libs";
import { GoogleSheetsContextProvider } from "@/contexts";

interface Props
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const PrihlaskyPage: NextPage<Props> = ({ courses }) => {
  return (
    <SanityApplicationsContextProvider courses={courses}>
      <GoogleSheetsContextProvider>
        <main>
          <PrihlaskyScreen />
        </main>
      </GoogleSheetsContextProvider>
    </SanityApplicationsContextProvider>
  );
};

export default PrihlaskyPage;

export const getServerSideProps = async (
  pageContext: GetServerSidePropsContext<any>
) => {
  const queryCourse = `*[_type == "course"]{pondeli[]{start,capacity},utery[]{start,capacity},streda[]{start,capacity},ctvrtek[]{start,capacity},patek[]{start,capacity},duration,price,title,value}`;
  const courses = await client.fetch(queryCourse);

  return {
    props: {
      courses,
    },
  };
};
