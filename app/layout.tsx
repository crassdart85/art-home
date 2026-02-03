import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// FIX: Import from the correct single source of truth using '@'
import { LanguageProvider } from "@/components/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Art Home International Group",
  description: "Premium Fit-out & Wood Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the entire app in the provider so all components can access the language */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}