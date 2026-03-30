import type { Metadata } from "next";
import "./globals.css";
// FIX: Import from the correct single source of truth using '@'
import { LanguageProvider } from "@/components/LanguageContext";

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
      <body>
        {/* Wrap the entire app in the provider so all components can access the language */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}