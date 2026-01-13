import Image from "next/image";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function ArabicAbout() {
  return (
    <main dir="rtl" className="page-rtl">
      <Navbar locale="ar" activePage="about" />

      {/* 1. HERO SECTION - STABILITY */}
      <section className="hero-section" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920')"}}>
        <div className="hero-content" style={{textAlign: 'right'}}>
          <h1>استقرار استراتيجي</h1>
          <p className="text-gold">
            عقود من الخبرة في تسليم المشاريع الكبرى عبر الشرق الأوسط وأفريقيا.
          </p>
        </div>
      </section>

      {/* 2. HISTORY (Zig Zag) */}
      <section className="about-section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div style={{ textAlign: "right" }}>
                <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "30px" }}>تاريخنا</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
                  بدأت مجموعة آرت هوم الدولية رحلتها كشركة إنشاءات متخصصة برؤية واضحة للتوسع. وبفهم عميق لديناميكيات السوق، قمنا بتأسيس فرعنا في الكويت عام 1988، وعقدنا شراكات مع لاعبين رئيسيين لتنفيذ مشاريع بنية تحتية حيوية.
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
                  اليوم، نستفيد من هذه الخبرة المتراكمة لدراسة الأسواق بدقة وتنفيذ مشاريع معقدة بمعايير دولية للجودة والسلامة.
                </p>
            </div>
            <div style={{ position: "relative", height: "400px", width: "100%" }}>
                <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800" alt="History" fill style={{ objectFit: "cover", borderRadius: "2px" }} />
            </div>
        </div>
      </section>

      {/* 3. LEADERSHIP SECTION */}
      <section className="about-section" style={{ background: "#f9f9f9" }}>
        <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "60px" }}>القيادة</h2>
            
            <div style={{ background: "white", padding: "40px", borderRadius: "2px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", display: "inline-block", textAlign: "right" }}>
                <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", flexDirection: "row-reverse" }}>
                    <div style={{ position: "relative", width: "200px", height: "200px", borderRadius: "50%", overflow: "hidden", border: "4px solid #C5A065" }}>
                         <Image src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800" alt="Eng. Ashraf El-Kady" fill style={{ objectFit: "cover" }} />
                    </div>
                    <div style={{ maxWidth: "500px" }}>
                        <h3 style={{ fontSize: "1.8rem", color: "#111", marginBottom: "5px" }}>م. أشرف القاضي</h3>
                        <p style={{ color: "#C5A065", fontWeight: "bold", marginBottom: "15px" }}>رئيس مجلس الإدارة والمؤسس</p>
                        <p style={{ color: "#555", lineHeight: "1.6" }}>
                            مع أكثر من 35 عاماً من الخبرة في صناعة البناء، قاد المهندس أشرف شركة آرت هوم لتصبح قوة إقليمية. رؤيته للتكامل الرأسي - من التعدين إلى التصنيع - ميزت الشركة كشريك موثوق للمشاريع المعقدة.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer locale="ar" />
    </main>
  );
}