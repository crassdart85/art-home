import Image from "next/image";

export default function ArabicContact() {
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
          <a href="/ar" style={{ color: '#ffffff' }}>الرئيسية</a>
          <a href="/ar/about" style={{ color: '#ffffff' }}>من نحن</a>
          <a href="/ar/contracting" style={{ color: '#ffffff' }}>المشاريع</a>
          <a href="/ar/contact" style={{ color: '#C5A065', fontWeight: 'bold' }}>اتصل بنا</a>
          <a href="/contact" style={{ padding: '8px 20px', border: '1px solid #C5A065', color: '#C5A065', borderRadius: '2px', fontSize: '0.9rem', fontWeight: 'bold' }}>English</a>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section style={{ 
        height: "40vh", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center", 
        background: "#111",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px"
      }}>
        <h1 style={{ 
          fontSize: "3rem", 
          marginBottom: "10px", 
          fontWeight: "800", 
          textTransform: "uppercase", 
          letterSpacing: "2px"
        }}>
          تواصل مع الشركة
        </h1>
        <p style={{ 
          fontSize: "1.2rem", 
          color: "#C5A065" 
        }}>
          للشراكات الاستراتيجية
        </p>
      </section>

      {/* 2. CONTENT GRID */}
      <section style={{ padding: "100px 50px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "flex-start", textAlign: "right" }}>
            
            {/* Left Column: Headquarters */}
            <div>
                <div style={{ marginBottom: "40px" }}>
                    <h3 style={{ fontSize: "1.5rem", color: "#C5A065", marginBottom: "15px" }}>مقر مصر</h3>
                    <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8" }}>
                        20 شارع القدس الشريف، المهندسين، القاهرة
                    </p>
                </div>
                <div>
                    <h3 style={{ fontSize: "1.5rem", color: "#C5A065", marginBottom: "15px" }}>مكتب الصين</h3>
                    <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8" }}>
                        غرفة 608، ويست بوينت سنتر، قوانغتشو
                    </p>
                </div>
            </div>

            {/* Right Column: Form */}
            <div style={{ background: "#F9F9F9", padding: "40px", borderRadius: "2px" }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input 
                        type="text" 
                        placeholder="الاسم" 
                        style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '1rem', textAlign: 'right' }} 
                    />
                    <input 
                        type="email" 
                        placeholder="البريد الإلكتروني للشركة" 
                        style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '1rem', textAlign: 'right' }} 
                    />
                    <textarea 
                        rows={5} 
                        placeholder="الرسالة" 
                        style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '1rem', resize: 'vertical', textAlign: 'right' }}
                    ></textarea>
                    <button 
                        type="submit" 
                        style={{ 
                            background: '#C5A065', 
                            color: 'black', 
                            padding: '18px', 
                            border: 'none', 
                            fontWeight: 'bold', 
                            cursor: 'pointer', 
                            fontSize: '1rem', 
                            textTransform: 'uppercase',
                            borderRadius: '2px'
                        }}
                    >
                        إرسال
                    </button>
                </form>
            </div>
        </div>
      </section>
    </main>
  );
}