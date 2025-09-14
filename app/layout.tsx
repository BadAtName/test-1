import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "WE THE BEST DEVELOPER",
  description: "67",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body>
      <div className="wrapper">
        <a className="logo" href="/">SEDULURGEN</a>
        <div className="nig">
            <a className="shit" href="/value">Value</a>
            <a className="shit" href="/artikel">Article</a>
            <a className="shit" href="/programs">Programs</a>  
            <a className="shit" href="/about">About Us</a>
            </div>
      </div>

    <div className="h-50px"></div>
        {children}
      </body>
  </html>
  );
}
