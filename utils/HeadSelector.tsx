import Head from "next/head";
import React from "react";

const HeadSelector = () => {
  return (
    <Head>
      <title>Plavecká škola | Kometa</title>
      <meta name="author" content="Pavel Zapletal & Barbora Novakova" />
      <meta name="keywords" content="Plavecká škola Kometa" />
      {/* TODO <link rel="canonical" href="https://kometa-plavani.vercel.app/" /> */}
      <meta
        name="description"
        content="Učíme plavat zábavnou formou dle nejnovějších metodik děti i dospělé. Výuku vedou kvalifikovaní trenéři na bazénech po celém Brně. Přidej se k nejlepším."
      />
    </Head>
  );
};

export default HeadSelector;
