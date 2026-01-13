import React from 'react';

interface FooterProps {
  locale?: 'en' | 'ar';
}

export default function Footer({ locale = 'en' }: FooterProps) {
  const isAr = locale === 'ar';
  
  const content = {
    en: {
      title: "Contact Us",
      cairoTitle: "Cairo HQ",
      cairoAddress: <>20 Al-Kods Al-Shreef Street,<br/>Mohandseen, Cairo, Egypt</>,
      chinaTitle: "China Office",
      chinaAddress: <>Room 608, West Point Center,<br/>Guangzhou</>,
      copyright: "© 2026 Art Home International Group. All rights reserved."
    },
    ar: {
      title: "تواصل معنا",
      cairoTitle: "المقر الرئيسي - القاهرة",
      cairoAddress: <>20 شارع القدس الشريف،<br/>المهندسين، القاهرة، مصر</>,
      chinaTitle: "مكتب الصين",
      chinaAddress: <>غرفة 608، مركز ويست بوينت،<br/>قوانغتشو، الصين</>,
      copyright: "© 2026 مجموعة آرت هوم الدولية. جميع الحقوق محفوظة."
    }
  };

  const t = isAr ? content.ar : content.en;
  const dir = isAr ? 'rtl' : 'ltr';
  const textAlign = isAr ? 'right' : 'left';

  return (
    <footer id="contact" className="footer-section" dir={dir}>
      <div className="footer-content">
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{t.title}</h2>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginTop: "30px", textAlign: textAlign }}>
          
          {/* Egypt Address */}
          <div>
              <h4 style={{ color: "#C5A065", marginBottom: "10px" }}>{t.cairoTitle}</h4>
              <p>{t.cairoAddress}</p>
              <p style={{ marginTop: "5px", direction: "ltr", textAlign: isAr ? "right" : "left" }}>Tel: +20 233459690</p>
          </div>

          {/* China Address */}
          <div>
              <h4 style={{ color: "#C5A065", marginBottom: "10px" }}>{t.chinaTitle}</h4>
              <p>{t.chinaAddress}</p>
              <p style={{ marginTop: "5px", direction: "ltr", textAlign: isAr ? "right" : "left" }}>Tel: +86-02081686833</p>
          </div>
        </div>

        <div className="footer-links" style={{ marginTop: "50px" }}>
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}