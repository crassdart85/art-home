'use client';

import { Phone, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useState } from 'react';

export default function ContactSection() {
  const { language } = useLanguage();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "Let's build something exceptional together.",
      desc: "Whether you have a complex fit-out project or need bespoke furniture manufacturing, our global team is ready to assist.",
      egypt: "Egypt HQ",
      china: "China Office",
      phone: "Phone",
      sendMsg: "Send us a message",
      btn: "Send Message"
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "لنبني شيئاً استثنائياً معاً",
      desc: "سواء كان لديك مشروع تجهيز معقد أو تحتاج إلى تصنيع أثاث مخصص، فريقنا العالمي مستعد للمساعدة.",
      egypt: "مقر مصر",
      china: "مكتب الصين",
      phone: "الهاتف",
      sendMsg: "أرسل لنا رسالة",
      btn: "إرسال الرسالة",
      egyptAddress: "20 شارع القدس - المهندسين- القاهرة"
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@arthome.com.eg?subject=New Project Inquiry from ${firstName} ${lastName}&body=Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0AProject Details: ${projectDetails}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-slate-900 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-amber-500 font-bold tracking-widest uppercase mb-4">
              {t.title}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {t.subtitle}
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              {t.desc}
            </p>

            <div className="space-y-8">
              {/* Egypt Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{t.egypt}</h4>
                  <p className="text-slate-400" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    {language === 'ar' ? t.egyptAddress : "20 Al-Kods Al-Shreef Street,<br />Mohandseen, Cairo"}
                  </p>
                </div>
              </div>

              {/* China Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{t.china}</h4>
                  <p className="text-slate-400">Room 608, West Point Center,<br />Guangzhou</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-amber-500 shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{t.phone}</h4>
                  <p className="text-slate-400" dir="ltr">+20 233459690</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <div className="bg-white p-8 md:p-12 rounded-sm text-slate-900">
            <h3 className="text-2xl font-bold mb-6">{t.sendMsg}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600">First Name</label>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:border-amber-500 rounded-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600">Last Name</label>
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:border-amber-500 rounded-sm" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:border-amber-500 rounded-sm" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600">Project Details</label>
                <textarea rows={4} value={projectDetails} onChange={(e) => setProjectDetails(e.target.value)} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:border-amber-500 rounded-sm" />
              </div>

              <button type="submit" className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-wide uppercase transition-all rounded-sm shadow-lg">
                {t.btn}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}