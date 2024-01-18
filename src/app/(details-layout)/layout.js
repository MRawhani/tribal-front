import React from "react";

// component
import Navbar from "@/components/shared/Navbar";

export default async function RootLayout({ children }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/lightgallery.js@1.2.0/dist/css/lightgallery.min.css"
      />

      <Navbar className="details-layout-navbar" />
      {children}
    </>
  );
}
