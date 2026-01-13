import Image from "next/image";

export default function Contact() {
  return (
    <main>
      {/* 0. NAVIGATION BAR */}
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
        {/* LOGO AREA */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/">
            <Image 
              src="/site-logo.jpg" 
              alt="Art Home Logo" 
              width={140} 
              height={70} 
              style={{ objectFit: 'contain' }} 
              priority 
            />
          </a>
        </div>
        
        {/* MENU LINKS */}
        <div style={{ display: 'flex', gap: '30px', fontWeight: '500', alignItems: 'center' }}>
          <a href="/" style={{ color: '#ffffff', transition: 'color 0.3s' }}>Home</a>
          <a href="/about" style={{ color: '#ffffff', transition: 'color 0.3s' }}>About</a>
          <a href="/contracting" style={{ color: '#ffffff', transition: 'color 0.3s' }}>Construction</a>
          <a href="/contact" style={{ color: '#C5A065', fontWeight: 'bold' }}>Contact</a>
          <a href="/ar" style={{ 
            padding: '8px 20px', 
            border: '1px solid #C5A065', 
            color: '#C5A065', 
            borderRadius: '2px', 
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}>عربي</a>
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
          CORPORATE CONTACT
        </h1>
        <p style={{ 
          fontSize: "1.2rem", 
          color: "#C5A065" 
        }}>
          Strategic Partnerships
        </p>
      </section>

      {/* 2. CONTENT GRID */}
      <section style={{ padding: "100px 50px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "flex-start" }}>
            
            {/* Left Column: Headquarters */}
            <div>
                <div style={{ marginBottom: "40px" }}>
                    <h3 style={{ fontSize: "1.5rem", color: "#C5A065", marginBottom: "15px" }}>Egypt HQ</h3>
                    <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8" }}>
                        Mohandseen, Cairo
                    </p>
                </div>
                <div>
                    <h3 style={{ fontSize: "1.5rem", color: "#C5A065", marginBottom: "15px" }}>China Office</h3>
                    <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.8" }}>
                        Guangzhou
                    </p>
                </div>
            </div>

            {/* Right Column: Form */}
            <div style={{ background: "#F9F9F9", padding: "40px", borderRadius: "2px" }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '1rem' }} 
                    />
                    <input 
                        type="email" 
                        placeholder="Corporate Email" 
                        style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '1rem' }} 
                    />
                    <textarea 
                        rows={5} 
                        placeholder="Message" 
                        style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '1rem', resize: 'vertical' }}
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
                        Submit
                    </button>
                </form>
            </div>
        </div>
      </section>
    </main>
  );
}