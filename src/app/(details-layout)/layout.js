import React from "react";

// component
import Navbar from "@/components/shared/Navbar";

export default async function RootLayout({ children }) {
  return (
    <>
      <Navbar className="details-layout-navbar" />
      {children}
    </>
  );
}
