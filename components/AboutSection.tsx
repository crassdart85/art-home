'use client';

import Image from 'next/image';
import { Target, Eye, ShieldCheck, Gem, Ruler, Users, Phone, Mail } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function AboutSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      sub: "Who We Are",
      title: "Global Standards, Local Expertise",
      desc: "Art Home International Group is a global fit-out and wood solutions company. With extensive experience across the Middle East and Africa, we combine craftsmanship, technical expertise, and international standards to deliver premium interior solutions for hospitality, commercial, and residential sectors.",
      missionTitle: "Our Mission",
      missionDesc: "To deliver premium fit-out and interior solutions that exceed client expectations through exceptional craftsmanship, technical expertise, innovative thinking, and a strong commitment to quality, safety, and timely delivery.",
      visionTitle: "Our Vision",
      visionDesc: "To be a leading regional fit-out and interior solutions company, recognized for delivering high-quality projects with precision, trust, and long-term value across regional markets.",
      valuesTitle: "Our Core Values",
      v1: "Quality", v1d: "Delivering excellence in every detail.",
      v2: "Integrity", v2d: "Building trust through transparency.",
      v3: "Precision", v3d: "Executing projects with accuracy.",
      v4: "Commitment", v4d: "Dedicated to meeting client expectations.",

      // Board Section (English)
      boardTitle: "Board of Directors",
      boardMembers: [
        {
          name: "Mr. Mohamed ElShenawy",
          role: "Owner and CEO",
          img: "/CEO.jpeg",
          phone: "",
          email: "m.elshenawy@arthome.com.eg",
          quals: [
            "Businessman and Company Owner"
          ]
        },
        {
          name: "Dr. Eng. Amr Ahmed Elbasiony",
          role: "Executive Director ",
          img: "/exeMD.png",
          phone: "",

          email: "amr.elbasiony@arthome.com.eg",
          quals: [
            "Doctorate of Business Administration (DBA) — AASTMT — Smart Village, Egypt",
            "Master Degree in Business Administration — Quality Management (MQM) — AASTMT",

          ]
        }
      ]
    },
    ar: {
      sub: "Ù…Ù† Ù†Ø­Ù†",
      title: "Ù…Ø¹Ø§ÙŠÙŠØ± Ø¹Ø§Ù„Ù…ÙŠØ©ØŒ Ø®Ø¨Ø±Ø© Ù…Ø­Ù„ÙŠØ©",
      desc: "Ù…Ø¬Ù…ÙˆØ¹Ø© Ø¢Ø±Øª Ù‡ÙˆÙ… Ø§Ù„Ø¯ÙˆÙ„ÙŠØ© Ù‡ÙŠ Ø´Ø±ÙƒØ© Ø¹Ø§Ù„Ù…ÙŠØ© Ù…ØªØ®ØµØµØ© ÙÙŠ Ø­Ù„ÙˆÙ„ Ø§Ù„ØªØ¬Ù‡ÙŠØ² ÙˆØ§Ù„Ø£Ø¹Ù…Ø§Ù„ Ø§Ù„Ø®Ø´Ø¨ÙŠØ©. Ù…Ø¹ Ø®Ø¨Ø±Ø© ÙˆØ§Ø³Ø¹Ø© ÙÙŠ Ø§Ù„Ø´Ø±Ù‚ Ø§Ù„Ø£ÙˆØ³Ø· ÙˆØ£ÙØ±ÙŠÙ‚ÙŠØ§ØŒ Ù†Ø¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø­Ø±ÙÙŠØ© ÙˆØ§Ù„Ø®Ø¨Ø±Ø© Ø§Ù„ØªÙ‚Ù†ÙŠØ© ÙˆØ§Ù„Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ø¯ÙˆÙ„ÙŠØ© Ù„ØªÙ‚Ø¯ÙŠÙ… Ø­Ù„ÙˆÙ„ Ø¯Ø§Ø®Ù„ÙŠØ© Ù…ØªÙ…ÙŠØ²Ø© Ù„Ù‚Ø·Ø§Ø¹Ø§Øª Ø§Ù„Ø¶ÙŠØ§ÙØ© ÙˆØ§Ù„ØªØ¬Ø§Ø±Ø© ÙˆØ§Ù„Ø³ÙƒÙ†.",
      missionTitle: "Ù…Ù‡Ù…ØªÙ†Ø§",
      missionDesc: "ØªÙ‚Ø¯ÙŠÙ… Ø­Ù„ÙˆÙ„ ØªØ¬Ù‡ÙŠØ² ÙˆØ¯ÙŠÙƒÙˆØ± Ø¯Ø§Ø®Ù„ÙŠ Ù…ØªÙ…ÙŠØ²Ø© ØªØªØ¬Ø§ÙˆØ² ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„Ø­Ø±ÙÙŠØ© Ø§Ù„Ø§Ø³ØªØ«Ù†Ø§Ø¦ÙŠØ© ÙˆØ§Ù„Ø®Ø¨Ø±Ø© Ø§Ù„ØªÙ‚Ù†ÙŠØ© ÙˆØ§Ù„ØªÙÙƒÙŠØ± Ø§Ù„Ù…Ø¨ØªÙƒØ± ÙˆØ§Ù„Ø§Ù„ØªØ²Ø§Ù… Ø§Ù„Ù‚ÙˆÙŠ Ø¨Ø§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø© ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ… ÙÙŠ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„Ù…Ø­Ø¯Ø¯.",
      visionTitle: "Ø±Ø¤ÙŠØªÙ†Ø§",
      visionDesc: "Ø£Ù† Ù†ÙƒÙˆÙ† Ø´Ø±ÙƒØ© Ø±Ø§Ø¦Ø¯Ø© Ø¥Ù‚Ù„ÙŠÙ…ÙŠØ§Ù‹ ÙÙŠ Ù…Ø¬Ø§Ù„ Ø§Ù„ØªØ¬Ù‡ÙŠØ² ÙˆØ§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ø¯Ø§Ø®Ù„ÙŠØ©ØŒ Ù…Ø¹ØªØ±Ù Ø¨Ù‡Ø§ Ù„ØªÙ‚Ø¯ÙŠÙ… Ù…Ø´Ø§Ø±ÙŠØ¹ Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¬ÙˆØ¯Ø© Ø¨Ø¯Ù‚Ø© ÙˆØ«Ù‚Ø© ÙˆÙ‚ÙŠÙ…Ø© Ø·ÙˆÙŠÙ„Ø© Ø§Ù„Ø£Ø¬Ù„ Ø¹Ø¨Ø± Ø§Ù„Ø£Ø³ÙˆØ§Ù‚ Ø§Ù„Ø¥Ù‚Ù„ÙŠÙ…ÙŠØ©.",
      valuesTitle: "Ù‚ÙŠÙ…Ù†Ø§ Ø§Ù„Ø¬ÙˆÙ‡Ø±ÙŠØ©",
      v1: "Ø§Ù„Ø¬ÙˆØ¯Ø©", v1d: "Ø§Ù„ØªÙ…ÙŠØ² ÙÙŠ ÙƒÙ„ Ø§Ù„ØªÙØ§ØµÙŠÙ„.",
      v2: "Ø§Ù„Ù†Ø²Ø§Ù‡Ø©", v2d: "Ø¨Ù†Ø§Ø¡ Ø§Ù„Ø«Ù‚Ø© Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„Ø´ÙØ§ÙÙŠØ©.",
      v3: "Ø§Ù„Ø¯Ù‚Ø©", v3d: "ØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø¨Ø¯Ù‚Ø© Ù…ØªÙ†Ø§Ù‡ÙŠØ©.",
      v4: "Ø§Ù„Ø§Ù„ØªØ²Ø§Ù…", v4d: "Ù…ÙƒØ±Ø³ÙˆÙ† Ù„ØªÙ„Ø¨ÙŠØ© ØªÙˆÙ‚Ø¹Ø§Øª Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡.",

      // Board Section (Arabic) - Precise Translation
      boardTitle: "Ù…Ø¬Ù„Ø³ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©",
      boardMembers: [
        {
          name: "Ø§Ù„Ø³ÙŠØ¯ / Ù…Ø­Ù…Ø¯ Ø§Ù„Ø´Ù†Ø§ÙˆÙŠ",
          role: "Ø§Ù„Ù…Ø§Ù„Ùƒ Ùˆ Ø±Ø¦ÙŠØ³ Ù…Ø¬Ù„Ø³ Ø§Ù„Ø§Ø¯Ø§Ø±Ø©",
          img: "/CEO.jpeg",
          phone: "",
          email: "m.elshenawy@arthome.com.eg",
          quals: [
            "Ø±Ø¬Ù„ Ø£Ø¹Ù…Ø§Ù„ ÙˆÙ…Ø§Ù„Ùƒ Ø§Ù„Ø´Ø±ÙƒØ©"
          ]
        },
        {
          name: "Ø¯ÙƒØªÙˆØ± Ù…Ù‡Ù†Ø¯Ø³ / Ø¹Ù…Ø±Ùˆ Ø£Ø­Ù…Ø¯ Ø¨Ø³ÙŠÙˆÙ†ÙŠ",
          role: "Ø§Ù„Ø±Ø¦ÙŠØ³ Ø§Ù„ØªÙ†ÙÙŠØ°ÙŠ",
          img: "/exeMD.png",
          phone: "",
          email: "amr.elbasiony@arthome.com.eg",
          quals: [
            "Ø¯ÙƒØªÙˆØ±Ø§Ù‡ ÙÙŠ Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ (DBA) â€“ Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ù„Ù„Ø¹Ù„ÙˆÙ… ÙˆØ§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ ÙˆØ§Ù„Ù†Ù‚Ù„ Ø§Ù„Ø¨Ø­Ø±ÙŠ â€“ Ø§Ù„Ù‚Ø±ÙŠØ© Ø§Ù„Ø°ÙƒÙŠØ©ØŒ Ù…ØµØ±",
            "Ù…Ø§Ø¬Ø³ØªÙŠØ± ÙÙŠ Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ â€“ Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¬ÙˆØ¯Ø© (MQM) â€“ Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ù„Ù„Ø¹Ù„ÙˆÙ… ÙˆØ§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ ÙˆØ§Ù„Ù†Ù‚Ù„ Ø§Ù„Ø¨Ø­Ø±ÙŠ"
          ]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h3 className="text-amber-600 font-bold tracking-widest uppercase mb-3">
            {t.sub}
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Board of Directors Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center border-b border-slate-200 pb-4 inline-block mx-auto min-w-[300px] block">
            {t.boardTitle}
          </h3>

          <div className="grid grid-cols-1 gap-12">
            {t.boardMembers.map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-sm overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/3 relative h-96 md:h-auto">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                  <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-2">
                    {member.role}
                  </span>
                  <h4 className="text-3xl font-bold text-slate-900 mb-6 leading-relaxed">
                    {member.name}
                  </h4>

                  {/* Contact Info */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 text-slate-600 text-sm">
                    {member.phone && (
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-amber-500" />
                        <span dir="ltr">{member.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-amber-500" />
                      <span>{member.email}</span>
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="bg-white p-6 rounded-sm border-l-2 border-amber-500">
                    <ul className="space-y-3">
                      {member.quals.map((qual, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0"></span>
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="p-10 bg-slate-50 border-l-4 border-amber-500 rounded-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white shadow-sm rounded-full text-amber-600">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{t.missionTitle}</h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t.missionDesc}
            </p>
          </div>

          {/* Vision */}
          <div className="p-10 bg-slate-900 text-white rounded-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-full text-amber-400">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold">{t.visionTitle}</h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t.visionDesc}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">{t.valuesTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 hover:bg-slate-50 transition-colors rounded-sm">
              <Gem className="mx-auto text-amber-600 mb-4" size={40} />
              <h4 className="font-bold text-lg mb-2">{t.v1}</h4>
              <p className="text-sm text-slate-500">{t.v1d}</p>
            </div>
            <div className="text-center p-6 hover:bg-slate-50 transition-colors rounded-sm">
              <ShieldCheck className="mx-auto text-amber-600 mb-4" size={40} />
              <h4 className="font-bold text-lg mb-2">{t.v2}</h4>
              <p className="text-sm text-slate-500">{t.v2d}</p>
            </div>
            <div className="text-center p-6 hover:bg-slate-50 transition-colors rounded-sm">
              <Ruler className="mx-auto text-amber-600 mb-4" size={40} />
              <h4 className="font-bold text-lg mb-2">{t.v3}</h4>
              <p className="text-sm text-slate-500">{t.v3d}</p>
            </div>
            <div className="text-center p-6 hover:bg-slate-50 transition-colors rounded-sm">
              <Users className="mx-auto text-amber-600 mb-4" size={40} />
              <h4 className="font-bold text-lg mb-2">{t.v4}</h4>
              <p className="text-sm text-slate-500">{t.v4d}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}