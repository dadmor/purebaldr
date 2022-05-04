import type { NextComponentType } from "next";
import type { AppContext, AppInitialProps } from "next/app";

import "styles/index.css";
const App: NextComponentType<AppContext, AppInitialProps> = (
  props: any
) => {
  const { Component, pageProps } = props;
  return (
    <Component {...pageProps} />
  );
};

export default App;

