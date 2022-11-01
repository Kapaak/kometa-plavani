import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const HeadSelector = () => {
  const router = useRouter();

  return (
    <Head>
      <title>Plavecká škola | Kometa </title>
      <link rel="icon" href="/icons/tucnak.svg" />
      <meta name="author" content="Pavel Zapletal & Barbora Novakova" />
      <meta
        name="keywords"
        content="Plavecká škola Kometa, kometa, plavani, bazeny, plavani Brno, luzanky bazen, bazen v Luzankach"
      />
      <link
        rel="canonical"
        href={`https://www.plavani-luzanky.cz${router.asPath}`}
      />
      <meta
        name="description"
        content="Učíme plavat zábavnou formou dle nejnovějších metodik děti i dospělé. Výuku vedou kvalifikovaní trenéři na bazénech po celém Brně. Navštiv bazén Lužánky."
      />
    </Head>
  );
};

export default HeadSelector;
