import React from "react";
import "@/styles/globals.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import SearchProvider from "@/context/SearchContext";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </SearchProvider>
  );
}
