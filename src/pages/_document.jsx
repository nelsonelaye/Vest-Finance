// import Layout from "@/components/Layout/Layout";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <body
        className=" flex flex-col"
        onload="document.body.className += ' loaded';"
      >
        <div className="background_overlay" />
        {/* <Layout> */}
        <Main />
        {/* </Layout> */}

        <NextScript />
      </body>
    </Html>
  );
}
