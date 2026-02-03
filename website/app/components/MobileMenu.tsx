'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  lang: string;
  dict: { switchLang: string; getQuote: string };
  navLinks: NavLink[];
}

const MobileMenu = ({ lang, dict, navLinks }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const otherLang = lang === 'en' ? 'ar' : 'en';

  return (
    <div className="md:hidden flex items-center">
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
        {isOpen ? "X" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href={`/${otherLang}`} className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              {dict.switchLang}
            </Link>
            <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition">
              {dict.getQuote}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
