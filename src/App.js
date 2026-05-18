import { useState, useEffect } from "react";

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  /* ================= SEO ================= */

  useEffect(() => {
    document.title =
      "MKB Holdings | Cleaning, Logistics, Security & Business Solutions";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Professional cleaning, logistics, security and business solutions across Gauteng.";
    document.head.appendChild(meta);
  }, []);

  /* ================= SERVICES ================= */

  const services = [
    {
      title: "Cleaning Services",
      short:
        "Professional residential, commercial, and industrial cleaning solutions.",
      details:
        "We provide high-quality cleaning services focused on hygiene, safety, professionalism, and customer satisfaction.",
      extra:
        "Residential Cleaning • Office Cleaning • Deep Cleaning • Sanitation",
      email: "cleaning@mkbholdings.co.za",
      icon: "🧹",
    },

    {
      title: "Logistics Services",
      short:
        "Efficient transport, delivery, and logistics coordination services.",
      details:
        "Reliable logistics support helping businesses move goods safely and efficiently across different locations.",
      extra:
        "Transportation • Deliveries • Supply Support • Movement of Goods",
      email: "logistics@mkbholdings.co.za",
      icon: "🚚",
    },

    {
      title: "Security Services",
      short:
        "Professional protection and security services focused on safety.",
      details:
        "We offer disciplined and reliable security operations for businesses, sites, and private properties.",
      extra:
        "Guarding • Site Protection • Monitoring • Risk Awareness",
      email: "security@mkbholdings.co.za",
      icon: "🛡️",
    },

    {
      title: "Business Solutions",
      short:
        "Business support and operational assistance for growing companies.",
      details:
        "We help businesses improve efficiency through operational support and business assistance services.",
      extra:
        "Consulting • Administration • Operations • Business Support",
      email: "business@mkbholdings.co.za",
      icon: "💼",
    },
  ];

  /* ================= SCROLL FUNCTION ================= */

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileMenu(false);
  };

  return (
    <div style={styles.page}>
      {/* ================= NAVBAR ================= */}

      <nav style={styles.nav}>
        <div style={styles.logoContainer}>
          <img
            src="/logo.png"
            alt="MKB Holdings Logo"
            style={styles.logoImage}
          />

          <div>
            <h1 style={styles.logo}>MKB Holdings</h1>

            <p style={styles.navSlogan}>
              From craft to commerce. We do more.
            </p>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          style={styles.menuButton}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>

        <div
          style={{
            ...styles.navLinks,
            ...(mobileMenu ? styles.mobileNavActive : {}),
          }}
        >
          <button
            style={styles.link}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            style={styles.link}
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>

          <button
            style={styles.link}
            onClick={() => scrollToSection("team")}
          >
            Team
          </button>

          <button
            style={styles.link}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}

      <section style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Professional Multi-Service Solutions
          </h1>

          <p style={styles.heroSlogan}>
            Cleaning • Logistics • Security • Business Solutions
          </p>

          <p style={styles.heroText}>
            MKB Holdings delivers dependable and professional
            multi-service solutions built on trust, quality,
            reliability, and long-term partnerships.
          </p>

          <div style={styles.heroButtons}>
            <button
              style={styles.primaryBtn}
              onClick={() => scrollToSection("quote")}
            >
              Request a Quote
            </button>

            <button
              style={styles.secondaryBtn}
              onClick={() => scrollToSection("contact")}
            >
              Contact Our Team
            </button>
          </div>

          <div style={styles.trustText}>
            ✔ Reliable • ✔ Professional • ✔ Gauteng Based
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Us</h2>

        <p style={styles.paragraph}>
          MKB Holdings is a modern multi-service company providing
          professional cleaning, logistics, security, and business
          support solutions across Gauteng and surrounding areas.
          Our focus is delivering quality services with professionalism,
          reliability, and long-term client relationships.
        </p>
      </section>

      {/* ================= SERVICES ================= */}

      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>

        <div style={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                height: openIndex === index ? "auto" : "260px",
              }}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div style={styles.icon}>{service.icon}</div>

              <h3>{service.title}</h3>

              <p style={styles.cardText}>{service.short}</p>

              {openIndex === index && (
                <>
                  <p style={styles.cardDetails}>
                    {service.details}
                  </p>

                  <p style={styles.extraText}>
                    {service.extra}
                  </p>

                  <p style={styles.email}>
                    {service.email}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section style={styles.darkSection}>
        <h2 style={styles.sectionTitleWhite}>
          Why Choose Us
        </h2>

        <div style={styles.whyGrid}>
          <div style={styles.whyCard}>
            ✔ Professional & Reliable
          </div>

          <div style={styles.whyCard}>
            ✔ Fast Response Time
          </div>

          <div style={styles.whyCard}>
            ✔ Multi-Service Convenience
          </div>

          <div style={styles.whyCard}>
            ✔ Customer Focused
          </div>

          <div style={styles.whyCard}>
            ✔ Affordable Solutions
          </div>

          <div style={styles.whyCard}>
            ✔ Dedicated Team
          </div>
        </div>
      </section>

      {/* ================= REQUEST A QUOTE ================= */}

      <section id="quote" style={styles.quoteSection}>
        <h2 style={styles.sectionTitle}>Request a Quote</h2>

        <div style={styles.quoteBox}>
          <h3 style={{ marginBottom: "20px" }}>
            Quote System Still Under Construction
          </h3>

          <p style={{ marginBottom: "25px", lineHeight: "1.7" }}>
            Our online quotation system is currently being developed.
            In the meantime, please contact us directly via WhatsApp
            or Email for assistance.
          </p>

          <div style={styles.heroButtons}>
            <a
              href="https://wa.me/27783568531"
              target="_blank"
              rel="noreferrer"
              style={styles.primaryBtnLink}
            >
              WhatsApp Us
            </a>

            <a
              href="mailto:mkb_holdings@.co.za"
              style={styles.secondaryBtnLink}
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* ================= MEET OUR TEAM ================= */}

      <section id="team" style={styles.section}>
        <h2 style={styles.sectionTitle}>Meet Our Team</h2>

        <div style={styles.teamCard}>
          <h3>Team Section Coming Soon</h3>

          <p style={styles.paragraph}>
            We will soon showcase our professional staff,
            company offices, and operational team.
          </p>

          <button style={styles.primaryBtn}>
            Meet Our Team
          </button>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" style={styles.contact}>
        <h2 style={styles.sectionTitleWhite}>
          Contact Our Team
        </h2>

        <div style={styles.contactGrid}>
          <div style={styles.contactCard}>
            <h3>📞 Call Us</h3>

            <a
              href="tel:+27783568531"
              style={styles.contactLink}
            >
              +27 78 356 8531
            </a>
          </div>

          <div style={styles.contactCard}>
            <h3>📧 Email</h3>

            <a
              href="mailto:mkb_holdings@.co.za"
              style={styles.contactLink}
            >
              mkb_holdings@.co.za
            </a>
          </div>

          <div style={styles.contactCard}>
            <h3>💬 WhatsApp</h3>

            <a
              href="https://wa.me/27783568531"
              target="_blank"
              rel="noreferrer"
              style={styles.contactLink}
            >
              Chat on WhatsApp
            </a>
          </div>

          <div style={styles.contactCard}>
            <h3>🕒 Business Hours</h3>

            <p>08h00 - 17h00</p>
          </div>

          <div style={styles.contactCard}>
            <h3>📍 Location</h3>

            <p>Gauteng, South Africa</p>
          </div>

          <div style={styles.contactCard}>
            <h3>📸 Instagram</h3>

            <a
              href="https://instagram.com/mkb_holdings"
              target="_blank"
              rel="noreferrer"
              style={styles.contactLink}
            >
              @mkb_holdings
            </a>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section style={styles.ctaSection}>
        <h2>
          Ready to work with a dependable service partner?
        </h2>

        <div style={styles.heroButtons}>
          <button
            style={styles.primaryBtn}
            onClick={() => scrollToSection("quote")}
          >
            Request a Quote
          </button>

          <button
            style={styles.secondaryBtn}
            onClick={() => scrollToSection("contact")}
          >
            Contact Our Team
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer style={styles.footer}>
        <img
          src="/logo.png"
          alt="MKB Holdings Logo"
          style={{
            width: "70px",
            marginBottom: "15px",
          }}
        />

        <h3>MKB Holdings</h3>

        <p>Professional Multi-Service Solutions</p>

        <p style={{ marginTop: "15px", opacity: 0.7 }}>
          © 2026 MKB Holdings. All Rights Reserved.
        </p>
      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}

      <a
        href="https://wa.me/27783568531"
        target="_blank"
        rel="noreferrer"
        style={styles.floatingWhatsapp}
      >
        💬
      </a>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f8f8f8",
    color: "#111",
    scrollBehavior: "smooth",
  },

  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#0d0d0d",
    color: "white",
    padding: "18px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #222",
    flexWrap: "wrap",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  logoImage: {
    width: "60px",
    height: "60px",
    objectFit: "contain",
  },

  logo: {
    margin: 0,
    color: "#d4af37",
    fontSize: "28px",
  },

  navSlogan: {
    margin: 0,
    fontSize: "12px",
    opacity: 0.7,
  },

  menuButton: {
    display: "none",
    background: "none",
    border: "none",
    color: "white",
    fontSize: "28px",
    cursor: "pointer",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },

  mobileNavActive: {
    display: "flex",
  },

  link: {
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  },

  hero: {
    position: "relative",
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    overflow: "hidden",
    background:
      "linear-gradient(to right, #0d0d0d, #1c1c1c)",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    animation: "fadeIn 1.2s ease",
  },

  heroTitle: {
    fontSize: "clamp(38px, 8vw, 70px)",
    color: "#d4af37",
    marginBottom: "20px",
    fontWeight: "bold",
  },

  heroSlogan: {
    fontSize: "22px",
    marginBottom: "25px",
    color: "#fff",
  },

  heroText: {
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.8",
    fontSize: "18px",
    color: "#ddd",
  },

  trustText: {
    marginTop: "30px",
    opacity: 0.8,
  },

  heroButtons: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    backgroundColor: "#d4af37",
    color: "black",
    border: "none",
    padding: "14px 28px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s ease",
  },

  secondaryBtn: {
    backgroundColor: "transparent",
    border: "1px solid #d4af37",
    color: "#d4af37",
    padding: "14px 28px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  primaryBtnLink: {
    backgroundColor: "#d4af37",
    color: "black",
    padding: "14px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  secondaryBtnLink: {
    border: "1px solid #d4af37",
    color: "#d4af37",
    padding: "14px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  section: {
    padding: "90px 20px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "40px",
    marginBottom: "35px",
  },

  sectionTitleWhite: {
    fontSize: "40px",
    marginBottom: "35px",
    color: "white",
  },

  paragraph: {
    maxWidth: "850px",
    margin: "0 auto",
    lineHeight: "1.8",
    color: "#555",
    fontSize: "17px",
  },

  darkSection: {
    backgroundColor: "#111",
    padding: "90px 20px",
    color: "white",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "18px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 5px 18px rgba(0,0,0,0.08)",
  },

  icon: {
    fontSize: "45px",
    marginBottom: "15px",
  },

  cardText: {
    color: "#555",
    lineHeight: "1.6",
  },

  cardDetails: {
    marginTop: "20px",
    lineHeight: "1.7",
  },

  extraText: {
    marginTop: "15px",
    fontWeight: "600",
  },

  email: {
    marginTop: "15px",
    color: "#d4af37",
    fontWeight: "bold",
  },

  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  whyCard: {
    backgroundColor: "#1c1c1c",
    padding: "25px",
    borderRadius: "12px",
    fontWeight: "600",
  },

  quoteSection: {
    padding: "90px 20px",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  },

  quoteBox: {
    maxWidth: "700px",
    margin: "0 auto",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  },

  teamCard: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "18px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  },

  contact: {
    backgroundColor: "#0d0d0d",
    padding: "90px 20px",
    color: "white",
    textAlign: "center",
  },

  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  contactCard: {
    backgroundColor: "#1c1c1c",
    padding: "30px",
    borderRadius: "15px",
  },

  contactLink: {
    color: "#d4af37",
    textDecoration: "none",
    fontWeight: "600",
  },

  ctaSection: {
    padding: "90px 20px",
    textAlign: "center",
  },

  footer: {
    backgroundColor: "#000",
    color: "white",
    textAlign: "center",
    padding: "40px 20px",
  },

  floatingWhatsapp: {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "32px",
    textDecoration: "none",
    zIndex: 1000,
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  },
};