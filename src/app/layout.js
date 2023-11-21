// 'use client'
import React from "react";
import "@/styles/_main.scss";

import { custom_fonts } from "./fonts";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/shared/Footer";
import { PageTransitionSection } from "@/components/global/PageTransitionSection";

export const metadata = {
  title: "Yemen Tribal Voices",
  description:
    "Discover the resounding echoes of Yemeni tribes at their finest on our platform.",
};
export default async function RootLayout({ children }) {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log(data);
  // const [loading, setLoading] = React.useState(true);
  let loading = false;
  // React.useEffect(() => {
  //   setLoading(false)
  // }, []);
  return (
    <html lang="en">
      <head>
        

<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
<link rel="manifest" href="/favicons/site.webmanifest"/>
<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#0c356a"/>
<meta name="msapplication-TileColor" content="#ffffff"/>
<meta name="theme-color" content="#ffffff"/>


        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </head>
      <body className={`${custom_fonts}`}>
        <NextTopLoader color="#90794C"/>

        <PageTransitionSection />

        {!loading ? <>{children}</> : <div className="loading">Loading...</div>}

        <Footer />
      </body>
    </html>
  );
}
