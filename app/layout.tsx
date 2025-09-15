import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

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

    <div className="comunity_button">
                <a href="https://chat.whatsapp.com/JQqLhR7Wx8e5cABlcMW8He">
                <ul className="com_ul">
                    <Image 
                      src="/waigger.svg"
                      width={40}
                      height={40}
                      alt="whatsapp logo"
                      className="px-2 py-2"
                    />
                    <h3 className="font-bold">JOIN KOMUNITAS</h3>
                </ul>
                </a>
            </div>
    <div className="h-50px"></div>
        {children}
      </body>
  </html>
  );
}
