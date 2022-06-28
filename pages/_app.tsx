import HeadSelector from "../components/utils/HeadSelector";
import { GlobalStyles } from "../styles/GlobalStyles";
//types
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<HeadSelector />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
