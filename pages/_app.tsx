//libraries
import { Provider } from "react-redux";
//components
import HeadSelector from "../components/utils/HeadSelector";
import Header from "@/components/Header/Header";
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
      <Header />
      <HeadSelector />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
