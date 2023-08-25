import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
//componets
import Home from "@/components/PageHome/Home";
import { client } from "@/libs";
import { SanityHomeContextProvider } from "@/contexts";

interface Props
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const HomePage: NextPage<Props> = ({ actualities, faq, document }) => {
  return (
    <SanityHomeContextProvider sanityData={{ actualities, faq, document }}>
      <Home />
    </SanityHomeContextProvider>
  );
};

export default HomePage;

export const getServerSideProps = async (
  pageContext: GetServerSidePropsContext<any>
) => {
  const queryActualities = `*[_type == "home" && visibility == true]{text,order,title}|order(order asc)`;
  const queryFAQ = `*[_type == "faq"]{title,faqItems[]{icon,text,title}}`;
  const queryDocument = `*[_type == "uploadFile"]{title,order,file{asset->{url}}}|order(order asc)`;

  const actualities = await client.fetch(queryActualities);
  const faq = await client.fetch(queryFAQ);
  const document = await client.fetch(queryDocument);

  return {
    props: {
      actualities,
      faq,
      document,
    },
  };
};
