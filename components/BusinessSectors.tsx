'use client';

import { 
  Hotel, 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Home, 
  Landmark 
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function BusinessSectors() {
  const { language } = useLanguage();

  const content = {
    en: {
      sub: "Our Expertise",
      title: "Business Sectors",
      desc: "From luxury hospitality to complex healthcare facilities, Art Home delivers turnkey fit-out and wood solutions tailored to the unique demands of each industry.",
      sectors: [
        {
          title: 'Hospitality',
          description: 'Luxury hotels, resorts, and serviced apartments featuring bespoke furniture.',
          icon: Hotel,
        },
        {
          title: 'Healthcare',
          description: 'Premium hospitals and specialized healthcare facilities meeting international standards.',
          icon: Stethoscope,
        },
        {
          title: 'Education',
          description: 'Leading universities and colleges designed for functional and refined learning environments.',
          icon: GraduationCap,
        },
        {
          title: 'Commercial',
          description: 'High-end malls, entertainment venues, and banks with sophisticated interiors.',
          icon: Building2,
        },
        {
          title: 'Residential',
          description: 'Exclusive compounds, private villas, and gated communities crafted for elegance.',
          icon: Home,
        },
        {
          title: 'Governmental',
          description: 'Administrative buildings executed with excellence and strict attention to detail.',
          icon: Landmark,
        },
      ]
    },
    ar: {
      sub: "Ø®Ø¨Ø±Ø§ØªÙ†Ø§",
      title: "Ù‚Ø·Ø§Ø¹Ø§Øª Ø§Ù„Ø¹Ù…Ù„",
      desc: "Ù…Ù† Ø§Ù„Ø¶ÙŠØ§ÙØ© Ø§Ù„ÙØ§Ø®Ø±Ø© Ø¥Ù„Ù‰ Ù…Ø±Ø§ÙÙ‚ Ø§Ù„Ø±Ø¹Ø§ÙŠØ© Ø§Ù„ØµØ­ÙŠØ© Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø©ØŒ ØªÙ‚Ø¯Ù… Ø¢Ø±Øª Ù‡ÙˆÙ… Ø­Ù„ÙˆÙ„ Ø§Ù„ØªØ¬Ù‡ÙŠØ² ÙˆØ§Ù„Ø£Ø¹Ù…Ø§Ù„ Ø§Ù„Ø®Ø´Ø¨ÙŠØ© Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„Ø© Ø§Ù„Ù…ØµÙ…Ù…Ø© Ù„ØªÙ„Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ·Ù„Ø¨Ø§Øª Ø§Ù„ÙØ±ÙŠØ¯Ø© Ù„ÙƒÙ„ Ù‚Ø·Ø§Ø¹.",
      sectors: [
        {
          title: 'Ø§Ù„Ø¶ÙŠØ§ÙØ©',
          description: 'ÙÙ†Ø§Ø¯Ù‚ ÙˆÙ…Ù†ØªØ¬Ø¹Ø§Øª ÙØ§Ø®Ø±Ø© ÙˆØ´Ù‚Ù‚ ÙÙ†Ø¯Ù‚ÙŠØ© ØªØªÙ…ÙŠØ² Ø¨Ø£Ø«Ø§Ø« Ù…Ø®ØµØµ.',
          icon: Hotel,
        },
        {
          title: 'Ø§Ù„Ø±Ø¹Ø§ÙŠØ© Ø§Ù„ØµØ­ÙŠØ©',
          description: 'Ù…Ø³ØªØ´ÙÙŠØ§Øª Ù…ØªÙ…ÙŠØ²Ø© ÙˆÙ…Ø±Ø§ÙÙ‚ Ø±Ø¹Ø§ÙŠØ© ØµØ­ÙŠØ© Ù…ØªØ®ØµØµØ© ØªÙ„Ø¨ÙŠ Ø§Ù„Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ø¯ÙˆÙ„ÙŠØ©.',
          icon: Stethoscope,
        },
        {
          title: 'Ø§Ù„ØªØ¹Ù„ÙŠÙ…',
          description: 'Ø¬Ø§Ù…Ø¹Ø§Øª ÙˆÙƒÙ„ÙŠØ§Øª Ø±Ø§Ø¦Ø¯Ø© Ù…ØµÙ…Ù…Ø© Ù„Ø¨ÙŠØ¦Ø§Øª ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ø¹Ù…Ù„ÙŠØ© ÙˆØ±Ø§Ù‚ÙŠØ©.',
          icon: GraduationCap,
        },
        {
          title: 'Ø§Ù„ØªØ¬Ø§Ø±ÙŠ',
          description: 'Ù…Ø±Ø§ÙƒØ² ØªØ¬Ø§Ø±ÙŠØ© Ø±Ø§Ù‚ÙŠØ©ØŒ Ø£Ù…Ø§ÙƒÙ† ØªØ±ÙÙŠÙ‡ÙŠØ©ØŒ ÙˆØ¨Ù†ÙˆÙƒ Ø¨ØªØµÙ…ÙŠÙ…Ø§Øª Ø¯Ø§Ø®Ù„ÙŠØ© Ù…ØªØ·ÙˆØ±Ø©.',
          icon: Building2,
        },
        {
          title: 'Ø§Ù„Ø³ÙƒÙ†ÙŠ',
          description: 'Ù…Ø¬Ù…Ø¹Ø§Øª Ø­ØµØ±ÙŠØ©ØŒ ÙÙ„Ù„ Ø®Ø§ØµØ©ØŒ ÙˆÙ…Ø¬ØªÙ…Ø¹Ø§Øª Ù…Ø³ÙˆØ±Ø© Ù…ØµÙ…Ù…Ø© Ø¨Ø£Ù†Ø§Ù‚Ø©.',
          icon: Home,
        },
        {
          title: 'Ø§Ù„Ø­ÙƒÙˆÙ…ÙŠ',
          description: 'Ù…Ø¨Ø§Ù†ÙŠ Ø¥Ø¯Ø§Ø±ÙŠØ© ÙˆØ­ÙƒÙˆÙ…ÙŠØ© Ù…Ù†ÙØ°Ø© Ø¨Ø§Ù…ØªÙŠØ§Ø² ÙˆØ§Ù‡ØªÙ…Ø§Ù… Ø¯Ù‚ÙŠÙ‚ Ø¨Ø§Ù„ØªÙØ§ØµÙŠÙ„.',
          icon: Landmark,
        },
      ]
    }
  };

  const t = content[language];

  return (
    <section id="sectors" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h3 className="text-amber-600 font-bold tracking-widest uppercase mb-2">
            {t.sub}
          </h3>
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.sectors.map((sector, index) => (
            <div 
              key={index}
              className="group p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-sm flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <sector.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                {sector.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}