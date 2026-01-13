import Image from "next/image";

export default function ArabicHome() {
  return (
    <main dir="rtl" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      
      {/* 0. NAVIGATION BAR (RTL) */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '15px 50px', 
        background: '#000000', 
        alignItems: 'center', 
        boxShadow: '0 2px 15px rgba(0,0,0,0.5)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        borderBottom: '1px solid #333'
      }}>
        {/* LOGO (Right side) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/ar">
            <Image src="/site-logo.jpg" alt="Art Home Logo" width={140} height={70} style={{ objectFit: 'contain' }} priority />
          </a>
        </div>
        
        {/* LINKS (Left side) */}
        <div style={{ display: 'flex', gap: '30px', fontWeight: '500', alignItems: 'center' }}>
          <a href="/ar" style={{ color: '#C5A065', fontWeight: 'bold' }}>الرئيسية</a>
          <a href="/ar/about" style={{ color: '#ffffff' }}>من نحن</a>
          <a href="/ar/contracting" style={{ color: '#ffffff' }}>المشاريع</a>
          <a href="/ar/contact" style={{ color: '#ffffff' }}>اتصل بنا</a>
          <a href="/" style={{ padding: '8px 20px', border: '1px solid #C5A065', color: '#C5A065', borderRadius: '2px', fontSize: '0.9rem', fontWeight: 'bold' }}>English</a>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section style={{ 
        height: "90vh", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center", 
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1541976544-2f67263534d0?auto=format&fit=crop&w=1920')",
        backgroundSize: "cover",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px"
      }}>
        <h1 style={{ fontSize: "4.5rem", marginBottom: "15px", fontWeight: "800", color: "#fff", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
           بناء <span style={{ color: "#C5A065" }}>التميز</span>
        </h1>
        <p style={{ fontSize: "1.3rem", fontWeight: "300", maxWidth: "800px", lineHeight: "1.6", color: "#f0f0f0", marginBottom: "40px", textShadow: "0 2px 5px rgba(0,0,0,0.5)" }}>
          من البنية التحتية الضخمة إلى التجهيزات الراقية. نحن نحول المخططات الطموحة إلى أصول تجارية تشغيلية.
        </p>
        <div style={{ marginTop: "20px" }}>
          <a href="/ar/contracting" style={{ 
            padding: "15px 50px", 
            background: "#C5A065", 
            color: "black", 
            border: "none", 
            fontSize: "1.1rem", 
            fontWeight: "bold", 
            cursor: "pointer",
            borderRadius: "2px"
          }}>
            تصفح أعمالنا
          </a>
        </div>
      </section>

      {/* 2. CHAIRMAN'S MESSAGE */}
      <section style={{ padding: "100px 50px", background: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "60px", alignItems: "center" }}>
            
            {/* Text (Right) */}
            <div style={{ textAlign: "right" }}>
                <h4 style={{ color: "#C5A065", marginBottom: "10px" }}>القيادة</h4>
                <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "25px" }}>كلمة رئيس مجلس الإدارة</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                    "منذ عام 1988، بنيت آرت هوم على أساس من النزاهة والدقة. نحن لا نبني المباني فحسب؛ بل نهندس حلول الأعمال. توسعنا من القاهرة إلى قوانغتشو يمثل التزامنا بالتحكم في الجودة في كل خطوة من سلسلة التوريد."
                </p>
                <div>
                    <strong style={{ display: "block", fontSize: "1.2rem", color: "#111" }}>م. أشرف القاضي</strong>
                    <span style={{ color: "#777" }}>رئيس مجلس الإدارة والمؤسس</span>
                </div>
            </div>

            {/* Photo (Left) */}
            <div style={{ position: "relative" }}>
                <div style={{ 
                    height: "450px", 
                    width: "100%", 
                    position: "relative",
                    borderRadius: "2px",
                    overflow: "hidden",
                    boxShadow: "-20px 20px 0px #f4f4f4" // Shadow flipped for RTL
                }}>
                    <Image 
                        src="/gm-photo.jpg" 
                        alt="Eng. Ashraf El-Kady" 
                        fill 
                        style={{ objectFit: "cover" }} 
                    />
                </div>
            </div>

        </div>
      </section>

      {/* 3. EXPERTISE GRID */}
      <section style={{ padding: "80px 50px", background: "#f9f9f9" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "#111", textTransform: "uppercase" }}>مجالات الخبرة</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {/* Case 1 */}
            <div style={{ background: "white", borderRadius: "2px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", overflow: "hidden", textAlign: "right" }}>
                <div style={{ height: "300px", position: "relative" }}>
                    <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800" alt="Gov" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "30px" }}>
                    <h3 style={{ color: "#111", fontSize: "1.5rem", marginBottom: "10px" }}>الحكومة</h3>
                    <p style={{ color: "#555", lineHeight: "1.6" }}>تسليم مقرات وطنية وبنية تحتية آمنة وعالية المواصفات.</p>
                </div>
            </div>
            {/* Case 2 */}
            <div style={{ background: "white", borderRadius: "2px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", overflow: "hidden", textAlign: "right" }}>
                <div style={{ height: "300px", position: "relative" }}>
                     <Image src="https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800" alt="Edu" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "30px" }}>
                    <h3 style={{ color: "#111", fontSize: "1.5rem", marginBottom: "10px" }}>التعليم</h3>
                    <p style={{ color: "#555", lineHeight: "1.6" }}>إنشاء حرم جامعي عالمي المستوى ومرافق بحثية.</p>
                </div>
            </div>
            {/* Case 3 */}
            <div style={{ background: "white", borderRadius: "2px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", overflow: "hidden", textAlign: "right" }}>
                <div style={{ height: "300px", position: "relative" }}>
                     <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800" alt="Com" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "30px" }}>
                    <h3 style={{ color: "#111", fontSize: "1.5rem", marginBottom: "10px" }}>التجاري</h3>
                    <p style={{ color: "#555", lineHeight: "1.6" }}>أبراج شاهقة وتجهيزات ضيافة فاخرة.</p>
                </div>
            </div>
        </div>
      </section>

    </main>
  );
}