import Image from "next/image";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function Construction() {
  return (
    <main>
      <Navbar activePage="contracting" />

      {/* 1. HERO */}
      <section style={{ height: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920')", backgroundSize: "cover", color: "#fff", textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "2px" }}>Construction Portfolio</h1>
        <p style={{ fontSize: "1.3rem", maxWidth: "800px", color: "#C5A065" }}>Engineering critical infrastructure and luxury environments.</p>
      </section>

      {/* 2. PROJECTS (ZIG ZAG LAYOUT) */}
      <section style={{ background: "#fff" }}>
          
          {/* Project 1: Infrastructure */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "600px" }}>
              <div style={{ position: "relative", height: "100%", width: "100%" }}>
                  <Image src="https://images.unsplash.com/photo-1554941426-e9604e34bc96?auto=format&fit=crop&w=800" alt="Infra" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h4 style={{ color: "#C5A065", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Government</h4>
                  <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "20px" }}>Ministry of Education</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                      A comprehensive headquarters project involving structural engineering, high-security fit-outs, and external granite cladding. This project exemplifies our ability to manage large-scale government contracts.
                  </p>
                  <ul style={{ color: "#444", lineHeight: "1.8" }}>
                      <li><strong>Location:</strong> Cairo, Egypt</li>
                      <li><strong>Scope:</strong> Infrastructure & Finishes</li>
                  </ul>
              </div>
          </div>

          {/* Project 2: Education (Reversed) */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "600px" }}>
              <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#f9f9f9" }}>
                  <h4 style={{ color: "#C5A065", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Education</h4>
                  <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "20px" }}>Doha Institute</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                      Construction of a premier academic facility. We delivered acoustic-sensitive lecture halls, administrative blocks, and student facilities, meeting strict international safety standards.
                  </p>
                  <ul style={{ color: "#444", lineHeight: "1.8" }}>
                      <li><strong>Location:</strong> Doha, Qatar</li>
                      <li><strong>Scope:</strong> Turnkey Construction</li>
                  </ul>
              </div>
              <div style={{ position: "relative", height: "100%", width: "100%" }}>
                  <Image src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800" alt="Edu" fill style={{ objectFit: "cover" }} />
              </div>
          </div>

           {/* Project 3: Commercial */}
           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "600px" }}>
              <div style={{ position: "relative", height: "100%", width: "100%" }}>
                  <Image src="https://images.unsplash.com/photo-1511401658233-5a4a9387f340?auto=format&fit=crop&w=800" alt="Commercial" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h4 style={{ color: "#C5A065", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Commercial</h4>
                  <h2 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "20px" }}>Al-Babteen Tower</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginBottom: "30px" }}>
                      High-rise commercial tower construction. Our focus on logistics management allowed us to execute complex structural works in a dense urban environment without delays.
                  </p>
                  <ul style={{ color: "#444", lineHeight: "1.8" }}>
                      <li><strong>Location:</strong> Kuwait</li>
                      <li><strong>Scope:</strong> Core & Shell</li>
                  </ul>
              </div>
          </div>

      </section>
      <Footer />
    </main>
  );
}