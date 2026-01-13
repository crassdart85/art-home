import Image from "next/image";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function RealEstate() {
  return (
    <main>
        <Navbar activePage="real-estate" />

      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{ 
        height: "50vh", 
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920')"
      }}>
        <div className="hero-content">
            <h1>Real Estate Development</h1>
            <p>
            Creating landmark destinations and sustainable communities across Egypt.
            </p>
        </div>
      </section>

      {/* 2. PROJECT HIGHLIGHT: CORONADO (Data from Page 46) */}
      <section className="about-section">
        <div className="container contact-grid">
            
            {/* Text Side */}
            <div>
                <h2 style={{ fontSize: "2.5rem", color: "#1a1a1a", marginBottom: "20px" }}>Coronado Resort</h2>
                <h4 className="text-gold" style={{ marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>Ain Sokhna</h4>
                
                <p style={{ color: "#666", marginBottom: "15px", lineHeight: "1.6" }}>
                    A premier tourist resort spanning <strong>242,000 m²</strong>. The project represents a comprehensive leisure destination managed by international operators.
                </p>
                
                <ul className="feature-list">
                    <li>
                        <span className="feature-dot">✓</span>
                        5-Star Hotel with 200 luxury rooms
                    </li>
                    <li>
                        <span className="feature-dot">✓</span>
                        650 Villas and Chalets
                    </li>
                    <li>
                        <span className="feature-dot">✓</span>
                        8,000 m² Commercial Mall
                    </li>
                    <li>
                        <span className="feature-dot">✓</span>
                        9 Swimming Pools
                    </li>
                </ul>
            </div>

            {/* Image Side */}
            <div style={{ height: "400px", background: "url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800')", backgroundSize: "cover", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}></div>
        </div>
      </section>

      {/* 3. PROJECT HIGHLIGHT: AQUARIOUS (Data from Page 47) */}
      <section className="about-section" style={{ background: "#f9f9f9" }}>
        <div className="container contact-grid">
            
            {/* Image Side (Left) */}
            <div style={{ height: "400px", background: "url('https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&w=800')", backgroundSize: "cover", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}></div>

            {/* Text Side (Right) */}
            <div>
                <h2 style={{ fontSize: "2.5rem", color: "#1a1a1a", marginBottom: "20px" }}>Aquarious Resort</h2>
                <h4 className="text-gold" style={{ marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>Ain Sokhna</h4>
                
                <p style={{ color: "#666", marginBottom: "15px", lineHeight: "1.6" }}>
                    Designed for comfort and luxury, Aquarious offers a unique blend of residential and hospitality services.
                </p>
                
                <ul className="feature-list">
                    <li>
                        <span className="feature-dot">✓</span>
                        Integrated 5MW Power Station
                    </li>
                    <li>
                        <span className="feature-dot">✓</span>
                        Advanced Water Treatment Plants
                    </li>
                    <li>
                        <span className="feature-dot">✓</span>
                        Administrative & Staff Housing Complex
                    </li>
                </ul>
            </div>
        </div>
      </section>

      {/* 4. OTHER PROJECTS GRID */}
      <section className="projects-section">
        <h2 className="section-title">Upcoming Projects</h2>
        
        <div className="divisions-grid" style={{ height: "auto", gridTemplateRows: "300px" }}>
            
            {/* Project: Coronado North Coast (Page 49) */}
            <div className="division-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590523742899-3e00a3e79432?auto=format&fit=crop&w=800')" }}>
                <div className="division-card-inner">
                    <span className="card-title">Coronado North Coast</span>
                    <p className="card-desc">Alexandria-Matrouh Road (Km 164)</p>
                </div>
            </div>

            {/* Project: Sun View */}
            <div className="division-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800')" }}>
                <div className="division-card-inner">
                    <span className="card-title">Sun View Compound</span>
                    <p className="card-desc">Nasr City, Cairo</p>
                </div>
            </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
