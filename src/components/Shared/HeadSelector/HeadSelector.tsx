import Head from "next/head";
import { useRouter } from "next/router";

import { metaDescription } from "./metaDescriptionData";

type RouteType = "/" | "/prihlasky";

type TitleType = "/prihlasky";

export const HeadSelector = () => {
  const router = useRouter();

  const currentRoute = router.asPath;

  const currentRouteMetaDesc =
    metaDescription[currentRoute as RouteType]?.description ??
    metaDescription.default.description;

  //pri reloadu to dela <--!> a dava error do console .. warning ...
  // const currentRouteTitle = title[currentRoute as TitleType] ?? title.default;
  return (
    <Head>
      <title> Plavecká škola | Kometa </title>
      <link rel="icon" href="/icons/tucnak.svg" />
      <meta name="author" content="Pavel Zapletal & Barbora Novakova" />
      <meta
        name="keywords"
        content="plavání Lužánky, bazén Lužánky, bazén za Lužánkami, výuka plavání v Brně, plavání Brno, plavecké kurzy brno, plavání brno, plavání pro děti, plavání s dětmi"
      />
      <link
        rel="canonical"
        href={`https://www.plavani-luzanky.cz${currentRoute}`}
      />
      <meta name="description" content={currentRouteMetaDesc} />
    </Head>
  );
};
