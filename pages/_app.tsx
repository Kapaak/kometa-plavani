import HeadSelector from "../components/utils/HeadSelector";
import { GlobalStyles } from "../styles/GlobalStyles";
//types
import type { AppProps } from "next/app";
import Navigation from "@/components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navigation />
			<GlobalStyles />
			<HeadSelector />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
