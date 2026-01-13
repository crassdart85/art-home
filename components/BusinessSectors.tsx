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
      sub: "خبراتنا",
      title: "قطاعات العمل",
      desc: "من الضيافة الفاخرة إلى مرافق الرعاية الصحية المعقدة، تقدم آرت هوم حلول التجهيز والأعمال الخشبية المتكاملة المصممة لتلبية المتطلبات الفريدة لكل قطاع.",
      sectors: [
        {
          title: 'الضيافة',
          description: 'فنادق ومنتجعات فاخرة وشقق فندقية تتميز بأثاث مخصص.',
          icon: Hotel,
        },
        {
          title: 'الرعاية الصحية',
          description: 'مستشفيات متميزة ومرافق رعاية صحية متخصصة تلبي المعايير الدولية.',
          icon: Stethoscope,
        },
        {
          title: 'التعليم',
          description: 'جامعات وكليات رائدة مصممة لبيئات تعليمية عملية وراقية.',
          icon: GraduationCap,
        },
        {
          title: 'التجاري',
          description: 'مراكز تجارية راقية، أماكن ترفيهية، وبنوك بتصميمات داخلية متطورة.',
          icon: Building2,
        },
        {
          title: 'السكني',
          description: 'مجمعات حصرية، فلل خاصة، ومجتمعات مسورة مصممة بأناقة.',
          icon: Home,
        },
        {
          title: 'الحكومي',
          description: 'مباني إدارية وحكومية منفذة بامتياز واهتمام دقيق بالتفاصيل.',
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