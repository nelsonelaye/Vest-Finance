// import Layout from "@/components/Layout/Layout";
import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <body className=" " onload="document.body.className += ' loaded';">
        <div className="background_overlay" />
        <Analytics />
        {/* <Layout> */}
        <Main />
        {/* </Layout> */}

        <NextScript />
      </body>
    </Html>
  );
}
