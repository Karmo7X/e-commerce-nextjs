import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopVerse | Modern E-commerce",
  description:
    "ShopVerse is a fast, secure, and scalable e-commerce platform powered by Next.js and Laravel. Manage products, brands, orders, and users with a clean and responsive frontend.",
  keywords: [
    "Next.js",
    "Laravel",
    "E-commerce",
    "ShopVerse",
    "Online Store",
    "JWT Auth",
    "Product Management",
    "Modern Web App",
  ],
  authors: [
    {
      name: "Kareem Azam Marey",
      url: "https://github.com/Karmo7X",
    },
  ],
  creator: "Kareem Azam Marey",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "ShopVerse | Modern E-commerce",
    description:
      "A powerful e-commerce solution with a Laravel backend and a Next.js frontend.",
    url: "https://yourdomain.com",
    siteName: "ShopVerse",
    images: [
      {
        url: "https://yourdomain.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "ShopVerse Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
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
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
