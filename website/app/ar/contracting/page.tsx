import Image from "next/image";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function ArabicConstruction() {
  return (
    <main dir="rtl" className="page-rtl">
      <Navbar locale="ar" activePage="contracting" />

      {/* 1. HERO */}
      <section className="hero-section" style={{ height: "70vh", backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920')"}}>
        <div className="hero-content">
            <h1>محفظة الإنشاءات</h1>
            <p className="text-gold">هندسة البنية التحتية الحيوية والبيئات الفاخرة.</p>
        </div>
      </section>

      {/* 2. PROJECTS (ZIG ZAG LAYOUT RTL) */}
      <section className="projects-section">
          <div className="container">
              {/* Project 1: Infrastructure */}
              <div className="contact-grid" style={{ minHeight: "600px" }}>
                  <div style={{ position: "relative", height: "100%", width: "100%" }}>
                      <Image src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800" alt="Infra" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "right" }}>
                      <h4 className="text-gold" style={{ marginBottom: "10px" }}>الحكومة</h4>
                      <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "20px" }}>وزارة التربية والتعليم</h2>
                      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                          مشروع مقر شامل يتضمن الهندسة الإنشائية، والتجهيزات الأمنية العالية، وتكسية الجرانيت الخارجية. يجسد هذا المشروع قدرتنا على إدارة العقود الحكومية واسعة النطاق.
                      </p>
                      <ul style={{ color: "#444", lineHeight: "1.8" }}>
                          <li><strong>الموقع:</strong> القاهرة، مصر</li>
                          <li><strong>النطاق:</strong> البنية التحتية والتشطيبات</li>
                      </ul>
                  </div>
              </div>

              {/* Project 2: Education (Reversed logic for visual variety) */}
              <div className="contact-grid" style={{ minHeight: "600px" }}>
                  <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#f9f9f9", textAlign: "right" }}>
                      <h4 className="text-gold" style={{ marginBottom: "10px" }}>التعليم</h4>
                      <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "20px" }}>معهد الدوحة للدراسات</h2>
                      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                          بناء منشأة أكاديمية رائدة. قمنا بتسليم قاعات محاضرات حساسة صوتياً، ومباني إدارية، ومرافق طلابية، مع تلبية معايير السلامة الدولية الصارمة.
                      </p>
                      <ul style={{ color: "#444", lineHeight: "1.8" }}>
                          <li><strong>الموقع:</strong> الدوحة، قطر</li>
                          <li><strong>النطاق:</strong> إنشاءات تسليم مفتاح</li>
                      </ul>
                  </div>
                  <div style={{ position: "relative", height: "100%", width: "100%" }}>
                      <Image src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4d0?auto=format&fit=crop&w=800" alt="Edu" fill style={{ objectFit: "cover" }} />
                  </div>
              </div>

            {/* Project 3: Commercial */}
            <div className="contact-grid" style={{ minHeight: "600px" }}>
                  <div style={{ position: "relative", height: "100%", width: "100%" }}>
                      <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800" alt="Commercial" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "right" }}>
                      <h4 className="text-gold" style={{ marginBottom: "10px" }}>التجاري</h4>
                      <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "20px" }}>برج البابطين</h2>
                      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                          بناء برج تجاري شاهق. سمح لنا تركيزنا على الإدارة اللوجستية بتنفيذ أعمال هيكلية معقدة في بيئة حضرية مكتظة دون تأخير.
                      </p>
                      <ul style={{ color: "#444", lineHeight: "1.8" }}>
                          <li><strong>الموقع:</strong> الكويت</li>
                          <li><strong>النطاق:</strong> الهيكل والخرسانة</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      <Footer locale="ar" />
    </main>
  );
}
