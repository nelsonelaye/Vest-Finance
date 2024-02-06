import React from "react";
import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MantineProvider } from "@mantine/core";
import SearchProvider from "@/context/SearchContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// core styles are required for all packages
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <MantineProvider>
          <Component {...pageProps} />
        </MantineProvider>
      </SearchProvider>
    </QueryClientProvider>
  );
}
