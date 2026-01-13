import Image from "next/image";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function About() {
  return (
    <main>
      <Navbar activePage="about" />

      {/* 1. HERO */}
      <section className="hero-section" style={{ height: "60vh", backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920')"}}>
        <div className="hero-content">
            <h1>Strategic Stability</h1>
            <p className="text-gold">Decades of experience delivering major projects across the Middle East and Africa.</p>
        </div>
      </section>

      {/* 2. HISTORY (Zig Zag Layout) */}
      <section className="about-section">
        <div className="container contact-grid">
            <div>
                <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "30px" }}>Our History</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
                    Art Home International Group began its journey as a specialized construction firm with a clear vision for expansion. Understanding market dynamics, we established our branch in Kuwait in 1988, partnering with major players like IJS Kuwait to execute vital infrastructure projects.
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
                    Today, we leverage this accumulated experience to study markets precisely and execute complex projects with international standards of quality and safety.
                </p>
            </div>
            <div style={{ position: "relative", height: "400px", width: "100%" }}>
                <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800" alt="History" fill style={{ objectFit: "cover", borderRadius: "2px" }} />
            </div>
        </div>
      </section>

      {/* 3. LEADERSHIP SECTION */}
      <section className="about-section" style={{ background: "#f9f9f9" }}>
        <div className="container" style={{ textAlign: "center" }}>
            <h2 className="section-title">Leadership</h2>
            
            <div style={{ background: "white", padding: "40px", borderRadius: "2px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", display: "inline-block", textAlign: "left" }}>
                <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap" }}>
                    <div style={{ position: "relative", width: "200px", height: "200px", borderRadius: "50%", overflow: "hidden", border: "4px solid #C5A065" }}>
                         <Image src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800" alt="Eng. Ashraf El-Kady" fill style={{ objectFit: "cover" }} />
                    </div>
                    <div style={{ maxWidth: "500px" }}>
                        <h3 style={{ fontSize: "1.8rem", color: "#111", marginBottom: "5px" }}>Eng. Ashraf El-Kady</h3>
                        <p className="text-gold" style={{ fontWeight: "bold", marginBottom: "15px" }}>Chairman & Founder</p>
                        <p style={{ color: "#555", lineHeight: "1.6" }}>
                            With over 35 years of experience in the construction industry, Eng. Ashraf has led Art Home to become a regional powerhouse. His vision for vertical integration—from mining to manufacturing—has set the company apart as a reliable partner for complex projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
