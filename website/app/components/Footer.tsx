// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CubiVore</h3>
            <p className="text-slate-300 text-sm">
              Empowering businesses through digital transformation and professional training solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Software Development</li>
              <li>Cybersecurity</li>
              <li>Corporate Training</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-slate-300 text-sm">New Cairo City, Cairo</p>
            <p className="text-slate-300 text-sm">contact@cubivore.com</p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} CubiVore Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;