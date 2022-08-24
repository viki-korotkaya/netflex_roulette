import type { AppProps } from "next/app";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// import React from "react";
//
// import { Route, Routes, Navigate } from "react-router-dom";
// import NotFound from "components/NotFound/NotFound";
// import AppLayout from "containers/AppLayout/AppLayout";
//
// const App: React.FC = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/search" element={<AppLayout />}></Route>
//         <Route path="/" element={<Navigate replace to="/search" />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// };
//
// export default App;
