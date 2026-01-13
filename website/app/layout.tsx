import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Art Home International",
  description: "Premium Fit-Out & Wood Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}