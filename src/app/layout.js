// 'use client'
import React from "react";
import "@/styles/_main.scss";

import { custom_fonts } from "./fonts";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/shared/Footer";
export const metadata = {
  title: "Yemen Tribal Voices",
  description:
    "Nadwa Dawsari, Independent researcher and analyst specializing in conflict within Yemen and the Middle East.",
};
export default function RootLayout({ children }) {
  // const [loading, setLoading] = React.useState(true);
  // React.useEffect(() => {
  //   setLoading(false)
  // }, []);
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#0c356a"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        {/* <!-- Open Graph / Facebook Meta Tags --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yementribalvoices.org" />
        <meta property="og:title" content="Yemen Tribal Voices" />
        <meta
          property="og:description"
          content="Nadwa Dawsari, Independent researcher and analyst specializing in conflict within Yemen and the Middle East"
        />
        <meta property="og:image" content="/assets/nadwa.png" />

        {/* <!-- Twitter Card Meta Tags --/> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.yementribalvoices.org" />
        <meta name="twitter:title" content="Yemen Tribal Voices" />
        <meta
          name="twitter:description"
          content="Nadwa Dawsari, Independent researcher and analyst specializing in conflict within Yemen and the Middle East"
        />
        <meta name="twitter:image" content="/assets/nadwa.png" />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </head>
      <body className={`${custom_fonts}`}>
        <NextTopLoader color="#90794C" />

        {children}

        <Footer />
      </body>
    </html>
  );
}
