import { Html, Head, Main, NextScript } from "next/document";
import i18nextConfig from "../../next-i18next.config";

export default function Document() {
  const currentLocale = i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/new-logo.svg" />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WF6GQTW"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
