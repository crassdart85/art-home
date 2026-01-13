import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const Navbar = ({ lang, dict }) => {
  const navLinks = [
    { name: dict.about, href: `/${lang}/about` },
    { name: dict.services, href: `/${lang}/services` },
    { name: dict.training, href: `/${lang}/training` },
    { name: dict.solutions, href: `/${lang}/solutions` },
    { name: "Contact", href: `/${lang}/contact` },
  ];

  const otherLang = lang === 'en' ? 'ar' : 'en';

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="text-2xl font-bold text-blue-900">
              <Image src="/site-logo.jpg" alt="CubiVore Logo" width={120} height={50} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link href={`/${otherLang}`} className="text-gray-700 hover:text-blue-600 transition duration-300">
              {dict.switchLang}
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              {dict.getQuote}
            </button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu lang={lang} dict={dict} navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;