'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
// FIX: Import the context correctly
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get language state and the setter from our context
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Translations for the menu
  const content = {
    en: {
      home: 'Home',
      about: 'About Us',
      sectors: 'Business Sectors',
      projects: 'Projects',
      contact: 'Contact',
      quote: 'Get Quote',
      langLabel: 'العربية' // Label to switch TO Arabic
    },
    ar: {
      home: 'الرئيسية',
      about: 'من نحن',
      sectors: 'قطاعات العمل',
      projects: 'المشاريع',
      contact: 'اتصل بنا',
      quote: 'اطلب عرض سعر',
      langLabel: 'English' // Label to switch TO English
    }
  };

  const t = content[language];

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const navLinks = [
    { name: t.home, href: '/' },
    { name: t.about, href: '#about' },
    { name: t.sectors, href: '#sectors' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white text-slate-900 shadow-md py-3' : 'bg-gradient-to-b from-black/50 to-transparent text-white py-5'
        }`}
      // Ensure the navbar direction matches the language
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="relative h-12 w-48 shrink-0">
          <Image
            src="/logo.png"
            alt="Art Home Logo"
            width={192}
            height={48}
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 rtl:space-x-reverse text-sm font-medium tracking-wide items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-amber-500 ${isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher (Desktop) */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 px-3 py-1 border rounded-full transition-all text-xs uppercase tracking-wider ${isScrolled
                ? 'border-slate-300 hover:border-amber-500 hover:text-amber-600'
                : 'border-white/30 hover:bg-white/10'
              }`}
          >
            <Globe size={14} />
            {t.langLabel}
          </button>

          {/* Call to Action Button */}
          <Link
            href="#contact"
            className={`px-5 py-2 rounded-sm font-semibold transition-all ${isScrolled
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-white text-slate-900 hover:bg-gray-100'
              }`}
          >
            {t.quote}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Lang Switcher */}
          <button onClick={toggleLanguage} className="font-bold text-sm">
            {language === 'en' ? 'AR' : 'EN'}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-slate-900 absolute top-full left-0 w-full shadow-xl py-6 border-t">
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-amber-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}