import type { AppProps } from "next/app";
import { store } from "../store/store";
import { Provider } from "react-redux";
import GlobalStyle from "styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
