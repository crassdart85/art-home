import Image from "next/image";

export default function About() {
  return (
    <main>
      {/* NAVIGATION */}
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
        <div style={{ display: 'flex', gap: '30px', fontWeight: '500', alignItems: 'center' }}>
          <a href="/" style={{ color: '#ffffff', transition: 'color 0.3s' }}>Home</a>
          <a href="/about" style={{ color: '#C5A065', fontWeight: 'bold' }}>About</a>
          <a href="/contracting" style={{ color: '#ffffff', transition: 'color 0.3s' }}>Construction</a>
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
        background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1556761175-5773895a24c8?auto=format&fit=crop&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px"
      }}>
        <h1 style={{ 
          fontSize: "3.5rem", 
          marginBottom: "15px", 
          fontWeight: "800", 
          textTransform: "uppercase", 
          letterSpacing: "2px", 
          textShadow: "0 2px 10px rgba(0,0,0,0.5)" 
        }}>
          STRATEGIC STABILITY
        </h1>
        <p style={{ 
          fontSize: "1.3rem", 
          maxWidth: "700px", 
          lineHeight: "1.6", 
          color: "#C5A065"
        }}>
          Decades of experience
        </p>
      </section>

      {/* 2. HISTORY SECTION */}
      <section style={{ padding: "100px 50px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            
            {/* Left Column: Text */}
            <div>
                <h4 style={{ color: "#C5A065", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Our History</h4>
                <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "25px" }}>Established in Kuwait 1988</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
                   Partnering with IJS Kuwait, we have delivered iconic projects that stand as a testament to our commitment to quality, safety, and timely execution. Our history is built on a foundation of trust and excellence.
                </p>
            </div>

            {/* Right Column: Image */}
            <div style={{ position: "relative", height: "400px", width: "100%" }}>
                <Image 
                    src="https://images.unsplash.com/photo-1520032484191-e892b15a63c3?auto=format&fit=crop&w=800" 
                    alt="Vertical Corporate Building" 
                    fill 
                    style={{ objectFit: "cover", borderRadius: "2px" }} 
                />
            </div>
        </div>
      </section>

      {/* 3. LEADERSHIP SECTION */}
      <section style={{ padding: "100px 50px", background: "#F9F9F9" }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ 
            background: "white", 
            padding: "50px", 
            borderRadius: "4px", 
            boxShadow: "0 10px 40px rgba(0,0,0,0.07)", 
            display: "flex", 
            alignItems: "center", 
            gap: "50px",
            maxWidth: '900px'
          }}>
              {/* Left: GM Photo */}
              <div style={{ 
                position: "relative", 
                width: "220px", 
                height: "220px", 
                borderRadius: "50%", 
                overflow: "hidden", 
                flexShrink: 0,
                border: "5px solid #F9F9F9"
              }}>
                   <Image 
                      src="/gm-photo.jpg" 
                      alt="Eng. Ashraf El-Kady" 
                      fill 
                      style={{ objectFit: "cover", objectPosition: "top" }} 
                   />
              </div>

              {/* Right: Bio */}
              <div>
                  <h3 style={{ fontSize: "1.8rem", color: "#111", marginBottom: "5px" }}>Eng. Ashraf El-Kady</h3>
                  <p style={{ color: "#C5A065", fontWeight: "bold", marginBottom: "20px", fontSize: "1.1rem" }}>Chairman & Founder</p>
                  <ul style={{ color: "#555", lineHeight: "2.2", paddingLeft: "20px", margin: 0 }}>
                      <li>Over 35 years of experience in the construction industry.</li>
                      <li>Pioneered a vision of vertical integration.</li>
                      <li>Expert in delivering complex, large-scale projects.</li>
                  </ul>
              </div>
          </div>
        </div>
      </section>

    </main>
  );
}
