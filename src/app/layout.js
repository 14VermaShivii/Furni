"use client"
import { Inter } from "next/font/google";
// import React from "react";
import Image from "next/image";


import "./globals.css";
// import "../app/globals.css"
import Head from "./head";
import "bootstrap/dist/css/bootstrap.css"
import BootstrapClient from "./Shared/BootstrapClient";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

import "@fortawesome/fontawesome-free"
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome';
//************************* */
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
      <Header />
        {children}
        <BootstrapClient />
      <Footer />
        </body>
    </html>
  );
}