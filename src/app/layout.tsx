import type { Metadata } from "next";
import { Amiri, Noto_Sans_SC } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "学伊斯兰 · 准则章 25:54",
  description:
    "从水创造人类，并使人们成为亲属：研读《古兰经》准则章第 54 节。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSans.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className={`${notoSans.className} flex min-h-full flex-col`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
