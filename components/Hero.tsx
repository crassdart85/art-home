'use client';

import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  const PORTFOLIO_PDF_URL = "https://drive.google.com/file/d/1U_LJIaC4qnXgRe7BEPXJS7yno0Ezye2a/view?usp=sharing";

  const content = {
    en: {
      tagline: "Global Fit-out & Wood Solutions",
      titleLine1: "Crafting Excellence in",
      titleLine2: "Every Detail",
      desc: "Specializing in high-end interior projects, custom furniture, and turnkey solutions across the Middle East & Africa.",
      btnProjects: "View Projects",
      btnContact: "Contact Us",
      btnDownload: "Download Portfolio"
    },
    ar: {
      tagline: "حلول التجهيز والأعمال الخشبية العالمية",
      titleLine1: "نصنع التميز في",
      titleLine2: "أدق التفاصيل",
      desc: "متخصصون في مشاريع الديكور الداخلي الراقية، والأثاث المخصص، والحلول المتكاملة (تسليم مفتاح) في الشرق الأوسط وأفريقيا.",
      btnProjects: "عرض المشاريع",
      btnContact: "اتصل بنا",
      btnDownload: "تحميل البورتفوليو"
    }
  };

  const t = content[language];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-[10000ms]"
        style={{ backgroundImage: "url('/projects/coronado.jpg')" }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-sm md:text-lg font-medium tracking-[0.2em] uppercase text-amber-400">
            {t.tagline}
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              {t.titleLine2}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
            {t.desc}
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="#projects"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-all rounded-sm flex items-center justify-center gap-2"
            >
              {t.btnProjects}
              {/* Flip arrow if Arabic */}
              <ArrowRight size={20} className={language === 'ar' ? 'rotate-180' : ''} />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold transition-all rounded-sm"
            >
              {t.btnContact}
            </Link>
            <a
              href={PORTFOLIO_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold transition-all rounded-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25"
            >
              <Download size={20} />
              {t.btnDownload}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}