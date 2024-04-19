"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={localStorage.getItem("darkMode") === "true" ? "dark" : "light"}>
      <head/>
      <body className="dark:bg-slate-900 dark:text-white">
      <Header />
      {children}
      </body>
    </html>
  );
}
