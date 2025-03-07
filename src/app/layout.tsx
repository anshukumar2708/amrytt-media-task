import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./component/sidebar";
import Header from "./component/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amrytt Media Llc",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full flex justify-between items-center max-w-[1440px]">
          <div className="w-48">
            <Sidebar />
          </div>
          <div className="w-full flex-col justify-center items-center gap-5 mx-5 my-3">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
