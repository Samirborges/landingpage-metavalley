import type { Metadata } from "next";
import { Geist, Geist_Mono, Radio_Canada_Big, Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const radioCanadaBig = Radio_Canada_Big({
  variable: "--font-radio-canada-big",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetaValley - Valide sua Ideia",
  description: "Valide sua ideia antes de construir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} ${radioCanadaBig.variable} ${inter.variable} ${roboto.variable} ${montserrat.variable} h-full antialiased bg-black scroll-smooth`}
    >
      <head>
        <link rel="stylesheet" href="https://googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col font-inter">
        <Suspense fallback={null}>
          <PostHogProvider>{children}</PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
