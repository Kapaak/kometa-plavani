//libraries
import { Provider } from "react-redux";
//components
import HeadSelector from "../components/utils/HeadSelector";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/PageHome/Footer/Footer";
//styles
import { GlobalStyles } from "../styles/GlobalStyles";
//types
import type { AppProps } from "next/app";
//redux
import { store } from "@redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Navigation />
      <HeadSelector />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
