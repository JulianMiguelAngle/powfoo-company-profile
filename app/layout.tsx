import type { Metadata } from "next";
import { DM_Sans, Rubik } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "PowFoo - Event Planning Experts | Unforgettable Events",
  description: "From corporate events to weddings, we deliver flawless execution and exceptional service.",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${rubik.variable} bg-primary-300`}>{children}</body>
    </html>
  );
}
