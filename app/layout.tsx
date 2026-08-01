import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ken Tjandra — Origin Story™",
  description:
    "I help business owners build a personal brand that sounds like them and attracts the right clients. Apply for Origin Story™ — a 6-month coaching program.",
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
