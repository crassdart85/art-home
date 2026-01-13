import Image from "next/image";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function Contact() {
  return (
    <main>
      <Navbar activePage="contact" />

      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{ height: '40vh', background: '#111' }}>
        <div className="hero-content">
            <h1>Corporate Contact</h1>
            <p className="text-gold">
            Strategic Partnerships & Project Inquiries
            </p>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="contact-section">
        <div className="container contact-grid">
            
            {/* Left Side: HQ Details */}
            <div className="contact-details">
                <h2 style={{ fontSize: "2rem", color: "#1a1a1a", marginBottom: "30px" }}>Headquarters</h2>
                
                {/* Cairo Office */}
                <div className="contact-office">
                    <h3 className="office-title">
                        <span className="flag" style={{marginRight: '10px'}}>🇪🇬</span> Egypt HQ
                    </h3>
                    <p className="contact-text">
                        <strong>Address:</strong><br/>
                        20 Al-Kods Al-Shreef Street,<br/>
                        Mohandseen, Cairo, Egypt
                    </p>
                    <p className="contact-text" style={{ marginTop: "10px" }}>
                        <strong>Tel:</strong> +20 233459690<br/>
                        <strong>P.O. Box:</strong> 12655
                    </p>
                </div>

                {/* China Office */}
                <div className="contact-office">
                    <h3 className="office-title">
                        <span className="flag" style={{marginRight: '10px'}}>🇨🇳</span> China Office
                    </h3>
                    <p className="contact-text">
                        <strong>Address:</strong><br/>
                        Room 608, West Point Center,<br/>
                        Building No. 65, Zhongshan 7 Road,<br/>
                        Guangzhou, China
                    </p>
                    <p className="contact-text" style={{ marginTop: "10px" }}>
                        <strong>Tel:</strong> +86-02081686833
                    </p>
                </div>
            </div>

            {/* Right Side: Corporate Form */}
            <div className="card" style={{textAlign: 'left'}}>
                <h3 style={{ marginBottom: "20px", color: "#1a1a1a" }}>Business Inquiry</h3>
                <form className="form-grid">
                    <div className="form-field">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" style={{textAlign: 'left'}} />
                    </div>
                    <div className="form-field">
                        <label>Corporate Email</label>
                        <input type="email" placeholder="name@company.com" style={{textAlign: 'left'}}/>
                    </div>
                    <div className="form-field">
                        <label>Department</label>
                        <select style={{textAlign: 'left'}}>
                            <option>Project Tendering (Construction)</option>
                            <option>Fit-Out Request</option>
                            <option>Material Export (Mining)</option>
                            <option>Partnership Proposal</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label>Project Details</label>
                        <textarea rows={4} placeholder="Please provide project scope or requirements..." style={{textAlign: 'left'}}></textarea>
                    </div>
                    <button type="button" className="btn-primary">
                        Submit Proposal
                    </button>
                </form>
            </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
