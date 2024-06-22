import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";


const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: "Rafarias",
  description: "Oim, Bem vindos ao meu mundinho!",
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: ReactNode;
  }>) {
  return (
    <html lang="en">
    <body className={`${inter.className} ${fraunces.className}`}>{children}
    </body>
    </html>
  );
}
