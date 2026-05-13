import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ken Tjandra — Real Creators. Real Brands.",
  description:
    "I help Asian and Christian founders build authentic personal brands with storytelling content. Join Creatopia or work 1-on-1.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
