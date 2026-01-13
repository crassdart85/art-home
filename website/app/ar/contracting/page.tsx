import Image from "next/image";

export default function ArabicConstruction() {
  return (
    <main dir="rtl" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 50px', background: '#000000', alignItems: 'center', boxShadow: '0 2px 15px rgba(0,0,0,0.5)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #333' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/ar"><Image src="/site-logo.jpg" alt="Art Home Logo" width={140} height={70} style={{ objectFit: 'contain' }} priority /></a>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontWeight: '500', alignItems: 'center' }}>
          <a href="/ar" style={{ color: '#ffffff' }}>الرئيسية</a>
          <a href="/ar/about" style={{ color: '#ffffff' }}>من نحن</a>
          <a href="/ar/contracting" style={{ color: '#C5A065', fontWeight: 'bold' }}>المشاريع</a>
          <a href="/ar/contact" style={{ color: '#ffffff' }}>اتصل بنا</a>
          <a href="/contracting" style={{ padding: '8px 20px', border: '1px solid #C5A065', color: '#C5A065', borderRadius: '2px', fontSize: '0.9rem', fontWeight: 'bold' }}>English</a>
        </div>
      </nav>

      {/* 1. HERO */}
      <section style={{ height: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920')", backgroundSize: "cover", color: "#fff", textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "10px", color: "#fff" }}>محفظة الإنشاءات</h1>
        <p style={{ fontSize: "1.3rem", maxWidth: "800px", color: "#C5A065" }}>هندسة البنية التحتية الحيوية والبيئات الفاخرة.</p>
      </section>

      {/* 2. PROJECTS (ZIG ZAG RTL) */}
      <section style={{ background: "#fff" }}>
          
          {/* Project 1: Infrastructure */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", minHeight: "600px" }}>
              <div style={{ position: "relative", height: "100%", width: "100%", minHeight: "400px" }}>
                  <Image src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800" alt="Infra" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "right" }}>
                  <h4 style={{ color: "#C5A065", marginBottom: "10px" }}>الحكومة</h4>
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

          {/* Project 2: Education (Reversed Background) */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", minHeight: "600px" }}>
              <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#f9f9f9", textAlign: "right" }}>
                  <h4 style={{ color: "#C5A065", marginBottom: "10px" }}>التعليم</h4>
                  <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "20px" }}>معهد الدوحة للدراسات</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                      بناء منشأة أكاديمية رائدة. قمنا بتسليم قاعات محاضرات حساسة صوتياً، ومباني إدارية، ومرافق طلابية، مع تلبية معايير السلامة الدولية الصارمة.
                  </p>
                  <ul style={{ color: "#444", lineHeight: "1.8" }}>
                      <li><strong>الموقع:</strong> الدوحة، قطر</li>
                      <li><strong>النطاق:</strong> إنشاءات تسليم مفتاح</li>
                  </ul>
              </div>
              <div style={{ position: "relative", height: "100%", width: "100%", minHeight: "400px" }}>
                  <Image src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4d0?auto=format&fit=crop&w=800" alt="Edu" fill style={{ objectFit: "cover" }} />
              </div>
          </div>
      </section>
    </main>
  );
}