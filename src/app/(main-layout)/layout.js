// 'use client'
import React from "react";

// component
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NextTopLoader from "nextjs-toploader";

export default async function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
