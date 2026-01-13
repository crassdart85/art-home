import Image from "next/image";

export default function Construction() {
  return (
    <main>
      {/* NAVIGATION BAR */}
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
          <a href="/contracting" style={{ color: '#C5A065', fontWeight: 'bold' }}>Construction</a>
          <a href="/contact" style={{ color: '#ffffff', transition: 'color 0.3s' }}>Contact</a>
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
        height: "60vh", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center", 
        background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px"
      }}>
        <h1 style={{ 
          fontSize: "4rem", 
          marginBottom: "10px", 
          textTransform: "uppercase", 
          letterSpacing: "2px",
          textShadow: "0 2px 10px rgba(0,0,0,0.5)" 
        }}>
          CONSTRUCTION PORTFOLIO
        </h1>
        <p style={{ 
          fontSize: "1.3rem", 
          color: "#C5A065",
          textShadow: "0 2px 5px rgba(0,0,0,0.5)" 
        }}>
          Engineering critical infrastructure
        </p>
      </section>

      {/* 2. PROJECTS (ZIG ZAG LAYOUT) */}
      <section style={{ background: "#fff" }}>
          
          {/* Project 1: Infrastructure */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "600px" }}>
              <div style={{ position: "relative", minHeight: "400px" }}>
                  <Image src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800" alt="Government Building" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "20px" }}>Ministry of Education</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
                      A comprehensive headquarters project involving structural engineering, high-security fit-outs, and external granite cladding. This project exemplifies our ability to manage large-scale government contracts.
                  </p>
              </div>
          </div>

          {/* Project 2: Education (Reversed) */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "600px", background: "#F9F9F9" }}>
              <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "20px" }}>Doha Institute</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
                      Construction of a premier academic facility. We delivered acoustic-sensitive lecture halls, administrative blocks, and student facilities, meeting strict international safety standards.
                  </p>
              </div>
              <div style={{ position: "relative", minHeight: "400px" }}>
                  <Image src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4d0?auto=format&fit=crop&w=800" alt="Education Building" fill style={{ objectFit: "cover" }} />
              </div>
          </div>

           {/* Project 3: Commercial */}
           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "600px" }}>
              <div style={{ position: "relative", minHeight: "400px" }}>
                  <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800" alt="Commercial Skyscraper" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "20px" }}>Al-Babteen Tower</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
                      High-rise commercial tower construction. Our focus on logistics management allowed us to execute complex structural works in a dense urban environment without delays.
                  </p>
              </div>
          </div>

      </section>
    </main>
  );
}
