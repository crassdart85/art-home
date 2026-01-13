import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function ArabicContact() {
  return (
    <main dir="rtl" className="page-rtl">
      <Navbar locale="ar" activePage="contact" />

      {/* HERO SECTION */}
      <section className="hero-section" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1557825835-b4527f242af7?auto=format&fit=crop&w=1920')" }}>
        <div className="hero-content">
          <h1>تواصل معنا</h1>
          <p className="text-gold">
            نحن هنا للمساعدة. تواصل معنا لأية استفسارات.
          </p>
        </div>
      </section>

      {/* CONTACT FORM AND DETAILS */}
      <section className="contact-section">
        <div className="container contact-grid">
          
          {/* Contact Form */}
          <div className="card">
            <h2>أرسل لنا رسالة</h2>
            <form className="form-grid">
              <div className="form-field">
                <label htmlFor="name">الاسم</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-field">
                <label htmlFor="message">الرسالة</label>
                <textarea id="message" name="message" rows={5}></textarea>
              </div>
              <button type="submit" className="btn-primary">
                إرسال
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            <h2>معلومات الاتصال</h2>
            <div className="contact-office">
                <h3 className="office-title"><span className="flag">🇪🇬</span> المكتب الرئيسي</h3>
                <p className="contact-text">
                  <strong>العنوان:</strong><br />
                  123 شارع المعز، القاهرة، مصر<br /><br />
                  <strong>هاتف:</strong> +20 2 12345678<br />
                  <strong>البريد الإلكتروني:</strong> info@arthome.com<br /><br />
                  <strong>ساعات العمل:</strong><br />
                  الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً
                </p>
            </div>
          </div>

        </div>
      </section>

      <Footer locale="ar" />
    </main>
  );
}