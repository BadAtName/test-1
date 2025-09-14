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
        <div><a className="logo m-1 " href="/">SEDULURGEN</a></div>
          <div className="nig">
            <ul className="list-none m-0 p-0 overflow-hidden float-right">
                <li className="float-right"><a className="shit" href="/value">Value</a></li>
                <li className="float-right"><a className="shit" href="/artikel">Article</a></li>
                <li className="float-right"><a className="shit" href="/programs">Programs</a></li>    
                <li className="float-right"><a className="shit" href="/about">About Us</a></li>
           </ul>
        </div>
      </div>

    <div className="h-50px"></div>
        {children}
      </body>
  </html>
  );
}
