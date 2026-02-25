import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import siteContent from "@/content/site.json";

import PageTransition from "@/components/layout/PageTransition";
import ContentProtection from "@/components/ContentProtection";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteContent.site.name} - ${siteContent.site.tagline}`,
    template: `%s | ${siteContent.site.name}`,
  },
  description: siteContent.site.description,
  metadataBase: new URL(siteContent.site.url),
  icons: {
    icon: '/asset/fav.png',
    shortcut: '/asset/fav.png',
    apple: '/asset/fav.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pixelifySans.variable} antialiased flex flex-col min-h-screen`}>
        <ContentProtection />

        <Navbar />
        <PageTransition>
          <main className="flex-grow pt-20">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
