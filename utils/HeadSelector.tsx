import Head from "next/head";
import React from "react";

const HeadSelector = () => {
  return (
    <Head>
      <title>Plavecká škola | Kometa</title>
      <link rel="icon" href="/icons/tucnak.svg" />
      <meta name="author" content="Pavel Zapletal & Barbora Novakova" />
      <meta
        name="keywords"
        content="Plavecká škola Kometa, kometa, plavani, bazeny, plavani Brno, luzanky bazen, bazen v Luzankach"
      />
      <link rel="canonical" href="https://www.plavani-luzanky.cz/" />
      <meta
        name="description"
        content="Učíme plavat zábavnou formou dle nejnovějších metodik děti i dospělé na bazéně za Lužánkami. Výuku plavání vedou kvalifikovaní trenéři na bazénech po celém Brně. Přidej se k těm nejlepším."
      />
    </Head>
  );
};

export default HeadSelector;
