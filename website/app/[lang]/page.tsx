import Image from "next/image";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar activePage="home" />

      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{ height: '90vh', backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1920')" }}>
        <div className="hero-content">
            <h1 style={{textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
            Building <span className="text-gold">Excellence</span>
            </h1>
            <p style={{textShadow: "0 2px 5px rgba(0,0,0,0.5)" }}>
            From massive infrastructure to luxury fit-outs. We turn ambitious blueprints into operational business assets.
            </p>
            <a href="/contracting" className="btn-primary" style={{marginTop: '20px'}}>
                View Our Work
            </a>
        </div>
      </section>

      {/* 2. CHAIRMAN'S WELCOME (GM Photo Section) */}
      <section className="about-section" style={{ background: "white" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px", alignItems: "center" }}>
            
            <div style={{ position: "relative" }}>
                <div style={{ 
                    height: "450px", 
                    width: "100%", 
                    position: "relative",
                    borderRadius: "2px",
                    overflow: "hidden",
                    boxShadow: "20px 20px 0px #f4f4f4"
                }}>
                    <Image 
                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800" 
                        alt="Eng. Ashraf El-Kady" 
                        fill 
                        style={{ objectFit: "cover" }} 
                    />
                </div>
            </div>

            <div>
                <h4 className="text-gold" style={{ textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Leadership</h4>
                <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "25px", lineHeight: "1.2" }}>A Message from the Chairman</h2>
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

      {/* 3. BUSINESS CASES (Cards) */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
        </div>

        <div className="expertise-grid">
            <div className="service-card">
                <div style={{ height: "300px", position: "relative" }}>
                    <Image src="https://images.unsplash.com/photo-1588796144872-13c61b52de73?auto=format&fit=crop&w=800" alt="Gov" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "30px" }}>
                    <h3>Government</h3>
                    <p>Delivering secure, high-spec national headquarters and infrastructure.</p>
                </div>
            </div>
            <div className="service-card">
                <div style={{ height: "300px", position: "relative" }}>
                     <Image src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800" alt="Edu" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "30px" }}>
                    <h3>Education</h3>
                    <p>Creating world-class academic campuses and research facilities.</p>
                </div>
            </div>
            <div className="service-card">
                <div style={{ height: "300px", position: "relative" }}>
                     <Image src="https://images.unsplash.com/photo-1542314831-068cd1dbb563?auto=format&fit=crop&w=800" alt="Com" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "30px" }}>
                    <h3>Commercial</h3>
                    <p>High-rise towers and luxury hospitality fit-outs.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. VISUAL GALLERY STRIP (New Section for "More Images") */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", height: "300px" }}>
          <div style={{ position: "relative", height: "100%" }}>
              <Image src="https://images.unsplash.com/photo-1517999349371-c43520457b26?auto=format&fit=crop&w=800" alt="Detail 1" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", height: "100%" }}>
              <Image src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800" alt="Detail 2" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", height: "100%" }}>
              <Image src="https://images.unsplash.com/photo-1585424429992-872de6f8745a?auto=format&fit=crop&w=800" alt="Detail 3" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", height: "100%" }}>
              <Image src="https://images.unsplash.com/photo-1505691938895-1758d7FEB511?auto=format&fit=crop&w=800" alt="Detail 4" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <a href="/contracting" style={{ color: "white", textDecoration: "none", fontSize: "1.5rem", fontWeight: "bold", borderBottom: "2px solid #C5A065" }}>View All Projects</a>
              </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
