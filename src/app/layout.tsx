import type { Metadata } from "next";
import "./globals.css";
import { Prata, Satisfy, Manrope, Kaushan_Script } from "next/font/google";

// Fonts with CSS variables
const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
});

export const metadata: Metadata = {
  title: "Saints School",
  description: "School website built with Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${prata.variable} ${manrope.variable} ${kaushan.variable}`}>
        {children}
      </body>
    </html>
  );
}
