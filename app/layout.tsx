import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Print a4i",
  description: "Welcome to the the Blue Print",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
