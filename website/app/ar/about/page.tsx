import Image from "next/image";

export default function ArabicAbout() {
  return (
    <main dir="rtl" style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 50px', background: '#000000', alignItems: 'center', boxShadow: '0 2px 15px rgba(0,0,0,0.5)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #333' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/ar"><Image src="/site-logo.jpg" alt="Art Home Logo" width={140} height={70} style={{ objectFit: 'contain' }} priority /></a>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontWeight: '500', alignItems: 'center' }}>
          <a href="/ar" style={{ color: '#C5A065', fontWeight: 'bold' }}>الرئيسية</a>
          <a href="/ar/about" style={{ color: '#ffffff' }}>من نحن</a>
          <a href="/ar/contracting" style={{ color: '#ffffff' }}>المشاريع</a>
          <a href="/ar/contact" style={{ color: '#ffffff' }}>اتصل بنا</a>
          <a href="/about" style={{ padding: '8px 20px', border: '1px solid #C5A065', color: '#C5A065', borderRadius: '2px', fontSize: '0.9rem', fontWeight: 'bold' }}>English</a>
        </div>
      </nav>

      {/* 1. HERO */}
      <section style={{ height: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920')", backgroundSize: "cover", color: "#fff", textAlign: "center" }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "10px", color: "#fff" }}>استقرار استراتيجي</h1>
        <p style={{ fontSize: "1.2rem", color: "#C5A065", maxWidth: "600px" }}>عقود من الخبرة في تسليم المشاريع الكبرى.</p>
      </section>

      {/* 2. HISTORY */}
      <section style={{ padding: "100px 50px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
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

      {/* 3. LEADERSHIP (GM Photo) */}
      <section style={{ padding: "100px 50px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "60px" }}>القيادة</h2>
            
            <div style={{ background: "white", padding: "40px", borderRadius: "2px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", display: "inline-block", textAlign: "right" }}>
                <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", flexDirection: "row-reverse" }}>
                    <div style={{ position: "relative", width: "200px", height: "200px", borderRadius: "50%", overflow: "hidden", border: "4px solid #C5A065" }}>
                         <Image src="/gm-photo.jpg" alt="Eng. Ashraf El-Kady" fill style={{ objectFit: "cover" }} />
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
    </main>
  );
}
