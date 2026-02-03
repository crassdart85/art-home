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
            "Doctorate of Business Administration (DBA) – AASTMT – Smart Village, Egypt",
            "Master Degree in Business Administration – Quality Management (MQM) – AASTMT",

          ]
        }
      ]
    },
    ar: {
      sub: "من نحن",
      title: "معايير عالمية، خبرة محلية",
      desc: "مجموعة آرت هوم الدولية هي شركة عالمية متخصصة في حلول التجهيز والأعمال الخشبية. مع خبرة واسعة في الشرق الأوسط وأفريقيا، نجمع بين الحرفية والخبرة التقنية والمعايير الدولية لتقديم حلول داخلية متميزة لقطاعات الضيافة والتجارة والسكن.",
      missionTitle: "مهمتنا",
      missionDesc: "تقديم حلول تجهيز وديكور داخلي متميزة تتجاوز توقعات العملاء من خلال الحرفية الاستثنائية والخبرة التقنية والتفكير المبتكر والالتزام القوي بالجودة والسلامة والتسليم في الوقت المحدد.",
      visionTitle: "رؤيتنا",
      visionDesc: "أن نكون شركة رائدة إقليمياً في مجال التجهيز والحلول الداخلية، معترف بها لتقديم مشاريع عالية الجودة بدقة وثقة وقيمة طويلة الأجل عبر الأسواق الإقليمية.",
      valuesTitle: "قيمنا الجوهرية",
      v1: "الجودة", v1d: "التميز في كل التفاصيل.",
      v2: "النزاهة", v2d: "بناء الثقة من خلال الشفافية.",
      v3: "الدقة", v3d: "تنفيذ المشاريع بدقة متناهية.",
      v4: "الالتزام", v4d: "مكرسون لتلبية توقعات العملاء.",

      // Board Section (Arabic) - Precise Translation
      boardTitle: "مجلس الإدارة",
      boardMembers: [
        {
          name: "السيد / محمد الشناوي",
          role: "المالك والرئيس التنفيذي",
          img: "/CEO.jpeg",
          phone: "",
          email: "m.elshenawy@arthome.com.eg",
          quals: [
            "رجل أعمال ومالك الشركة"
          ]
        },
        {
          name: "دكتور مهندس / عمرو أحمد بسيوني",
          role: "الرئيس التنفيذي",
          img: "/exeMD.png",
          phone: "",
          email: "amr.elbasiony@arthome.com.eg",
          quals: [
            "دكتوراه في إدارة الأعمال (DBA) – الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري – القرية الذكية، مصر",
            "ماجستير في إدارة الأعمال – إدارة الجودة (MQM) – الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري"
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