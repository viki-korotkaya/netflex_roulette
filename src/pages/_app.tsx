import type { AppProps } from "next/app";
import { useStore } from "store/store";
import GlobalStyle from "styles/global";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialState);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
