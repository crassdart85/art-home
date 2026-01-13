import Image from "next/image";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function ArabicHome() {
  return (
    <main dir="rtl" className="page-rtl">
      <Navbar locale="ar" activePage="home" />

      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{ height: "85vh", backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1541976544-2f67263534d0?auto=format&fit=crop&w=1920')"}}>
        <div className="hero-content">
            <h1>
            بناء <span className="text-gold">التميز</span>
            </h1>
            <p>
            من البنية التحتية الضخمة إلى التجهيزات الراقية. نحن نحول المخططات الطموحة إلى أصول تجارية تشغيلية.
            </p>
            <div style={{ marginTop: "20px" }}>
            <a href="/ar/contracting" className="btn-primary">
                تصفح أعمالنا
            </a>
            </div>
        </div>
      </section>

      {/* 2. CHAIRMAN'S MESSAGE (GM PHOTO) */}
      <section className="about-section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "60px", alignItems: "center" }}>
            
            <div style={{ textAlign: "right" }}>
                <h4 className="text-gold" style={{ marginBottom: "10px" }}>القيادة</h4>
                <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "25px", lineHeight: "1.2" }}>كلمة رئيس مجلس الإدارة</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                    "منذ عام 1988، بنيت آرت هوم على أساس من النزاهة والدقة. نحن لا نبني المباني فحسب؛ بل نهندس حلول الأعمال. توسعنا من القاهرة إلى قوانغتشو يمثل التزامنا بالتحكم في الجودة في كل خطوة من سلسلة التوريد."
                </p>
                <div>
                    <strong style={{ display: "block", fontSize: "1.2rem", color: "#111" }}>م. أشرف القاضي</strong>
                    <span style={{ color: "#777" }}>رئيس مجلس الإدارة والمؤسس</span>
                </div>
            </div>

            <div style={{ position: "relative" }}>
                <div style={{ 
                    height: "450px", 
                    width: "100%", 
                    position: "relative",
                    borderRadius: "2px",
                    overflow: "hidden",
                    boxShadow: "-20px 20px 0px #f4f4f4"
                }}>
                    <Image 
                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800" 
                        alt="Eng. Ashraf El-Kady" 
                        fill 
                        style={{ objectFit: "cover" }} 
                    />
                </div>
            </div>

        </div>
      </section>

      {/* 3. BUSINESS CASES (Cards) */}
      <section className="services-section">
        <div className="container">
            <h2 className="section-title">مجالات الخبرة</h2>
            <div className="grid-rtl">
                
                <div className="service-card">
                    <div style={{ height: "250px", background: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800') center/cover" }}></div>
                    <div style={{ padding: "30px" }}>
                        <h3>الحكومة</h3>
                        <p>تسليم مقرات وطنية وبنية تحتية آمنة وعالية المواصفات.</p>
                    </div>
                </div>

                <div className="service-card">
                    <div style={{ height: "250px", background: "url('https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800') center/cover" }}></div>
                    <div style={{ padding: "30px" }}>
                        <h3>التعليم</h3>
                        <p>إنشاء حرم جامعي عالمي المستوى ومرافق بحثية.</p>
                    </div>
                </div>

                <div className="service-card">
                    <div style={{ height: "250px", background: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800') center/cover" }}></div>
                    <div style={{ padding: "30px" }}>
                        <h3>التجاري</h3>
                        <p>أبراج شاهقة وتجهيزات ضيافة فاخرة.</p>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* 4. VISUAL GALLERY STRIP */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", height: "300px" }}>
          <div style={{ position: "relative", height: "100%" }}>
              <Image src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800" alt="Detail 1" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", height: "100%" }}>
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800" alt="Detail 2" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", height: "100%" }}>
              <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800" alt="Detail 3" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", height: "100%" }}>
              <Image src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800" alt="Detail 4" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <a href="/ar/contracting" style={{ color: "white", textDecoration: "none", fontSize: "1.5rem", fontWeight: "bold", borderBottom: "2px solid #C5A065" }}>عرض كل المشاريع</a>
              </div>
          </div>
      </section>

      <Footer locale="ar" />
    </main>
  );
}
