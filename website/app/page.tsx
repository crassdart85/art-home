import Image from "next/image";

export default function Home() {
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
            {/* Make sure site-logo.jpg is in your public folder */}
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
          <a href="/" style={{ color: '#C5A065', fontWeight: 'bold' }}>Home</a>
          <a href="/about" style={{ color: '#ffffff', transition: 'color 0.3s' }}>About</a>
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
        height: "90vh", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center", 
        // Background Image: Massive Construction Site
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1541976544-2f67263534d0?auto=format&fit=crop&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px"
      }}>
        <h1 style={{ 
          fontSize: "4.5rem", 
          marginBottom: "15px", 
          fontWeight: "800", 
          textTransform: "uppercase", 
          letterSpacing: "2px", 
          textShadow: "0 2px 10px rgba(0,0,0,0.5)" 
        }}>
          Building <span style={{ color: "#C5A065" }}>Excellence</span>
        </h1>
        <p style={{ 
          fontSize: "1.3rem", 
          maxWidth: "700px", 
          lineHeight: "1.6", 
          color: "#f0f0f0", 
          marginBottom: "40px", 
          textShadow: "0 2px 5px rgba(0,0,0,0.5)" 
        }}>
          From massive infrastructure to luxury fit-outs. We turn ambitious blueprints into operational business assets.
        </p>
        <a href="/contracting" style={{ 
            padding: "15px 50px", 
            background: "#C5A065", 
            color: "black", 
            fontWeight: "bold", 
            textTransform: "uppercase", 
            borderRadius: "2px",
            fontSize: "1.1rem"
        }}>
            View Our Work
        </a>
      </section>

      {/* 2. CHAIRMAN'S MESSAGE (GM Photo) */}
      <section style={{ padding: "100px 50px", background: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px", alignItems: "center" }}>
            
            {/* GM Photo Container */}
            <div style={{ position: "relative" }}>
                <div style={{ 
                    height: "450px", 
                    width: "100%", 
                    position: "relative",
                    borderRadius: "2px",
                    overflow: "hidden",
                    // Architectural offset shadow effect
                    boxShadow: "20px 20px 0px #f4f4f4"
                }}>
                    <Image 
                        src="/gm-photo.jpg" 
                        alt="Eng. Ashraf El-Kady" 
                        fill 
                        style={{ objectFit: "cover" }} 
                    />
                </div>
            </div>

            {/* Message Text */}
            <div>
                <h4 style={{ color: "#C5A065", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Leadership</h4>
                <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "25px" }}>A Message from the Chairman</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                    "Since 1988, Art Home has been built on a foundation of integrity and precision. We don't just construct buildings; we engineer business solutions. Our expansion from Cairo to Guangzhou represents our commitment to controlling quality at every step of the supply chain."
                </p>
                <div>
                    <strong style={{ display: "block", fontSize: "1.2rem", color: "#111" }}>Eng. Ashraf El-Kady</strong>
                    <span style={{ color: "#777" }}>Chairman & Founder</span>
                </div>
            </div>
        </div>
      </section>

      {/* 3. EXPERTISE GRID */}
      <section style={{ padding: "80px 50px", background: "#f9f9f9" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "#111", textTransform: "uppercase", letterSpacing: "1px" }}>Our Expertise</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {/* Card 1: Government */}
            <div style={{ background: "white", borderRadius: "2px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", overflow: "hidden" }}>
                <div style={{ height: "300px", position: "relative" }}>
                    <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800" alt="Gov" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "30px" }}>
                    <h3 style={{ color: "#111", fontSize: "1.5rem", marginBottom: "10px" }}>Government</h3>
                    <p style={{ color: "#555", lineHeight: "1.6" }}>Delivering secure, high-spec national headquarters and infrastructure.</p>
                </div>
            </div>
            
            {/* Card 2: Education */}
            <div style={{ background: "white", borderRadius: "2px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", overflow: "hidden" }}>
                <div style={{ height: "300px", position: "relative" }}>
                     <Image src="https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800" alt="Edu" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "30px" }}>
                    <h3 style={{ color: "#111", fontSize: "1.5rem", marginBottom: "10px" }}>Education</h3>
                    <p style={{ color: "#555", lineHeight: "1.6" }}>Creating world-class academic campuses and research facilities.</p>
                </div>
            </div>
            
            {/* Card 3: Commercial */}
            <div style={{ background: "white", borderRadius: "2px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", overflow: "hidden" }}>
                <div style={{ height: "300px", position: "relative" }}>
                     <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800" alt="Com" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "30px" }}>
                    <h3 style={{ color: "#111", fontSize: "1.5rem", marginBottom: "10px" }}>Commercial</h3>
                    <p style={{ color: "#555", lineHeight: "1.6" }}>High-rise towers and luxury hospitality fit-outs.</p>
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
                  <a href="/contracting" style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold", borderBottom: "2px solid #C5A065" }}>View All Projects</a>
              </div>
          </div>
      </section>

    </main>
  );
}