import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "./(components)/Navbar";
import { Footer } from "./(components)/Footer";

export const metadata: Metadata = {
  title: "New Life Tamil AG Church",
  description: "Pentecostal Tamil church in Kuwait",
  verification: {
    google: "ptpAEpSVeK--Tque05wMvH1DtXBEbp9agNtgOhlpONc",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
