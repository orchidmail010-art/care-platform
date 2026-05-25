import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "돌봄닥 | 국민돌봄 복지플랫폼",
  description:
    "장기요양보험, 가족요양, 방문요양, 요양보호사 정보와 본인부담금 계산기를 제공하는 복지 플랫폼",
  verification: {
    google: "MkN3p9FLXRrDKlczpdcsYgXqPiBt6HVDh-dRGWGCYUo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="adsense"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3230635014319056"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}
