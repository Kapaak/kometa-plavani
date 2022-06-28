//libraries
import { Provider } from "react-redux";
//components
import HeadSelector from "../components/utils/HeadSelector";
import Navigation from "@/components/Navigation";
import { store } from "@redux/store";
//styles
import { GlobalStyles } from "../styles/GlobalStyles";
//types
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<GlobalStyles />
			<Navigation />
			<HeadSelector />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
