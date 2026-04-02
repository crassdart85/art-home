'use client';

// Imports using the '@' symbol to point to the root components folder
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import BusinessSectors from '@/components/BusinessSectors';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
// FIX: Pointing to the correct location of your context file
import { useLanguage } from '@/components/LanguageContext'; 

export default function Home() {
  // We hook into the language context here
  const { language } = useLanguage();

  return (
    <main className="min-h-screen font-sans bg-slate-50">
      <Navbar />
      <Hero />
      <AboutSection />
      <BusinessSectors />
      <ProjectGallery />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            {language === 'en' 
              ? '© 2026 Art Home International Group. All rights reserved.'
              : 'Â© 2026 Ù…Ø¬Ù…ÙˆØ¹Ø© Ø¢Ø±Øª Ù‡ÙˆÙ… Ø§Ù„Ø¯ÙˆÙ„ÙŠØ©. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.'}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>{language === 'en' ? 'Privacy Policy' : 'Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©'}</span>
            <span>{language === 'en' ? 'Terms of Service' : 'Ø´Ø±ÙˆØ· Ø§Ù„Ø®Ø¯Ù…Ø©'}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}