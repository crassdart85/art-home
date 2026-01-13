import Image from "next/image";
import Footer from "@/app/components/Footer";

export default function Industrial() {
  return (
    <main>


      {/* 1. HERO SECTION - SUPPLY CHAIN CONTROL */}
      <section className="hero-section" style={{height: '60vh', backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1575550959108-28a7f8998505?auto=format&fit=crop&w=1920')"}}>
        <div className="hero-content">
            <h1>
            Industrial Integration
            </h1>
            <p className="text-gold">
            From the quarry to the site. We control the supply chain to ensure quality and timeline certainty for your projects.
            </p>
        </div>
      </section>

      {/* 2. THE VERTICAL INTEGRATION MODEL */}
      <section className="about-section">
        <div className="container">
            
            {/* Step 1: Mining & Extraction */}
            <div className="contact-grid" style={{ marginBottom: "80px"}}>
                <div style={{ height: "300px", background: "url('https://images.unsplash.com/photo-1590176922544-a03524035661?auto=format&fit=crop&w=800') center/cover", borderRadius: "2px" }}></div>
                <div>
                    <h2 style={{ fontSize: "2rem", color: "#111", marginBottom: "15px" }}>1. Raw Material Extraction</h2>
                    <h4 className="text-gold" style={{ marginBottom: "15px", textTransform: "uppercase" }}>Mining & Quarries</h4>
                    <p style={{ color: "#555", lineHeight: "1.7" }}>
                        We eliminate third-party delays by managing our own raw material sources. Our mining division extracts premium Egyptian marble and granite, ensuring a steady supply for our manufacturing units and export partners.
                    </p>
                </div>
            </div>

            {/* Step 2: Manufacturing */}
            <div className="contact-grid" style={{ marginBottom: "80px" }}>
                <div style={{ height: "300px", background: "url('https://images.unsplash.com/photo-1596483754904-43615456209d?auto=format&fit=crop&w=800') center/cover", borderRadius: "2px" }}></div>
                <div >
                    <h2 style={{ fontSize: "2rem", color: "#111", marginBottom: "15px" }}>2. Precision Manufacturing</h2>
                    <h4 className="text-gold" style={{ marginBottom: "15px", textTransform: "uppercase" }}>Furniture & Woodworks</h4>
                    <p style={{ color: "#555", lineHeight: "1.7" }}>
                        Our factories produce loose and fixed furniture, doors, and cladding. This allows us to deliver turnkey fit-outs where every joinery detail is crafted in-house, ensuring the "Premium Fit-Out" standard we promise.
                    </p>
                </div>
            </div>

            {/* Step 3: Global Logistics */}
            <div className="contact-grid">
                <div style={{ height: "300px", background: "url('https://images.unsplash.com/photo-1579548122080-c35e67e3c48e?auto=format&fit=crop&w=800') center/cover", borderRadius: "2px" }}></div>
                <div>
                    <h2 style={{ fontSize: "2rem", color: "#111", marginBottom: "15px" }}>3. Global Logistics</h2>
                    <h4 className="text-gold" style={{ marginBottom: "15px", textTransform: "uppercase" }}>Import & Export</h4>
                    <p style={{ color: "#555", lineHeight: "1.7" }}>
                        With offices in Cairo and Guangzhou, we facilitate seamless international trade. We export local raw materials to Asia and Europe while importing specialized construction components, ensuring your project has access to global resources.
                    </p>
                </div>
            </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
