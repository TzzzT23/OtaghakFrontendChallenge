import { useEffect } from "react";
import handleSprite from "utils/sprite";

import "styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    handleSprite();
  }, []);

  return <Component {...pageProps} />;
}
