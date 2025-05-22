import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SearchProvider } from "@/context/SearchContext";
import { ThemeChanger } from "@/context/ThemeChanger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movie Explorer",
  description: "Movie Explorer is designed to see movies and series by depth.",
  icons: {
    icon: "/images/movie-explorer-logo-mobile.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeChanger>
          <SearchProvider>
            <Header />
            <main className="flex-1">{children}</main>
          </SearchProvider>
          <Footer />
        </ThemeChanger>
      </body>
    </html>
  );
}
