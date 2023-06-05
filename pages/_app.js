import "../styles/globals.css";
import Head from "next/head";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <main className="">
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@500,1,600,700,800&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
