import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

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
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
