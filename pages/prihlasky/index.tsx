import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { PrihlaskyScreen } from "@/screens";
import { LecturesContextProvider } from "@/contexts";
import { client } from "@/libs";

interface Props
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const PrihlaskyPage: NextPage<Props> = ({ course }) => {
  console.log("🚀 ~ file: index.tsx:14 ~ course:", course);

  return (
    <LecturesContextProvider>
      <main>
        <PrihlaskyScreen />
      </main>
    </LecturesContextProvider>
  );
};

export default PrihlaskyPage;

export const getServerSideProps = async (
  pageContext: GetServerSidePropsContext<any>
) => {
  const queryCourse = `*[_type == "course"]{pondeli[]{start,capacity},utery[]{start,capacity},streda[]{start,capacity},ctvrtek[]{start,capacity},patek[]{start,capacity},duration,price,title}`;
  const course = await client.fetch(queryCourse);

  return {
    props: {
      course,
    },
  };
};
