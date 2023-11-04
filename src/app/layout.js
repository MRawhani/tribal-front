// 'use client'
import React from "react";
import "@/styles/_main.scss";

import { custom_fonts } from "./fonts";
// component
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NextTopLoader from "nextjs-toploader";

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
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </head>
      <body className={`${custom_fonts}`}>
        {!loading ? (
          <>
            <NextTopLoader />
            <Navbar />
            {children}
            <Footer />
          </>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </body>
    </html>
  );
}
