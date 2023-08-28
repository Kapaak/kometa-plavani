import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
//componets
import Home from "@/components/PageHome/Home";
import { client } from "@/libs";
import { SanityHomeContextProvider } from "@/contexts";
import { SanityActuality, SanityDocument, SanityFaq } from "@/domains";

interface Props
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const HomePage: NextPage<Props> = ({ actualities, faqs, documents }) => {
  return (
    <SanityHomeContextProvider sanityData={{ actualities, faqs, documents }}>
      <Home />
    </SanityHomeContextProvider>
  );
};

export default HomePage;

export const getServerSideProps = async (
  pageContext: GetServerSidePropsContext<any>
) => {
  const queryActualities = `*[_type == "home" && visibility == true]{text,title}|order(order asc)`;
  const queryFAQ = `*[_type == "faq"]{title,order,faqItems[]{icon,text,title}}|order(order asc)`;
  const queryDocument = `*[_type == "uploadFile"]{title,file{asset->{url}}}|order(order asc)`;

  const actualities: SanityActuality[] = await client.fetch(queryActualities);
  const faqs: SanityFaq[] = await client.fetch(queryFAQ);
  const documents: SanityDocument[] = await client.fetch(queryDocument);

  return {
    props: {
      actualities,
      faqs,
      documents,
    },
  };
};
