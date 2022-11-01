import Head from "next/head";
import { useRouter } from "next/router";

import { data } from "./metaDescriptionData";

type RouteType = "/" | "/prihlasky";

const HeadSelector = () => {
  const router = useRouter();

  const currentRoute = router.asPath;

  const currentRouteMetaDesc =
    data[currentRoute as RouteType]?.description ?? data.default.description;

  return (
    <Head>
      <title>Plavecká škola | Kometa </title>
      <link rel="icon" href="/icons/tucnak.svg" />
      <meta name="author" content="Pavel Zapletal & Barbora Novakova" />
      <meta name="keywords" content={currentRouteMetaDesc} />
      <link
        rel="canonical"
        href={`https://www.plavani-luzanky.cz${currentRoute}`}
      />
      <meta
        name="description"
        content="Učíme plavat zábavnou formou dle nejnovějších metodik děti i dospělé. Výuku vedou kvalifikovaní trenéři na bazénech po celém Brně. Navštiv bazén Lužánky."
      />
    </Head>
  );
};

export default HeadSelector;
