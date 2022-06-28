import Head from "next/head";
import React from "react";

const HeadSelector = () => {
	return (
		<Head>
			<title>Plavecká škola | Kometa</title>
			<meta name="author" content="Pavel Zapletal & Barbora Novakova" />
			<meta name="keywords" content="Plavecká škola Kometa" />
			<meta
				name="description"
				content="" //*TODO -> je potreba pridat nejaky meta description
			/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;500&display=swap"
				rel="stylesheet"
			/>
		</Head>
	);
};

export default HeadSelector;
