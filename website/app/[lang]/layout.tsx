import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google"; // Import Cairo for Arabic
import "../globals.css"; // Note: path changed because we are one folder deeper
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getDictionary } from "@/lib/dictionary";

// Fonts
const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "CubiVore | Technology & Training",
  description: "Digital transformation and professional development.",
};

// This generates static params for static site generation (optional but good practice)
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }]
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: "en" | "ar" };
}) {
  // Fetch dictionary
  const dict = await getDictionary(lang);
  
  // Determine direction
  const direction = lang === 'ar' ? 'rtl' : 'ltr';
  const fontClass = lang === 'ar' ? cairo.className : inter.className;

  return (
    <html lang={lang} dir={direction}>
      <body className={fontClass}>
        {/* Pass dictionary and lang to Navbar */}
        <Navbar lang={lang} dict={dict.navigation} />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        {/* Pass dictionary to Footer if needed later */}
        <Footer />
      </body>
    </html>
  );
}