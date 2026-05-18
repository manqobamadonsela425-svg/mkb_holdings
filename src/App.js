import { useState } from "react";

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Cleaning Services",
      short:
        "Professional residential, commercial, and industrial cleaning solutions.",
      details:
        "Our company is dedicated to making our customers’ workplaces and environments clean, safe, and healthy. We focus on quality service, hygiene, and customer satisfaction in every project we handle.",
      extra:
        "Residential cleaning • Office cleaning • Deep cleaning • Sanitation",
      email: "cleaning@mkb_holdings",
      icon: "🧹",
    },

    {
      title: "Logistics Services",
      short:
        "Efficient transport, delivery, and logistics coordination services.",
      details:
        "We provide dependable logistics and transport support that helps businesses move goods safely and efficiently across different locations.",
      extra:
        "Transportation • Deliveries • Supply support • Movement of goods",
      email: "logistics@mkb_holdings",
      icon: "🚚",
    },

    {
      title: "Security Services",
      short:
        "Modern protection and security services focused on safety and trust.",
      details:
        "We offer professional security services designed to protect people, businesses, and property through reliable and disciplined operations.",
      extra:
        "Guarding • Site protection • Monitoring • Risk awareness",
      email: "security@mkb_holdings",
      icon: "🛡️",
    },

    {
      title: "Business Solutions",
      short:
        "Business support and operational assistance for growing companies.",
      details:
        "We assist entrepreneurs and businesses with reliable support services that improve efficiency, administration, and operational growth.",
      extra:
        "Consulting • Administrative support • Operational assistance • Business growth support",
      email: "businesssolutions@mkb_holdings",
      icon: "💼",
    },
  ];

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div>
          <h1 style={styles.logo}>mkb_holdings</h1>
          <p style={styles.navSlogan}>
            From craft to commerce. We do more.
          </p>
        </div>

        <div style={styles.navLinks}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#mission" style={styles.link}>Mission</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>mkb_holdings</h1>

        <p style={styles.heroSlogan}>
          From craft to commerce. We do more.
        </p>

        <p style={styles.heroText}>
          mkb_holdings is a Multi Service Business Company. We provide
          Professional Cleaning, Logistics, Security & Business Solutions
          built on trust, reliability, and long term partnerships.
        </p>

        <div style={styles.heroButtons}>
          <button style={styles.primaryBtn}>
            Request a Quote
          </button>

          <button style={styles.secondaryBtn}>
            Contact Our Team
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Us</h2>

        <p style={styles.paragraph}>
          mkb_holdings was founded with the vision of delivering dependable
          and professional multi-service solutions for businesses and
          individuals. We are committed to quality service, long-term
          partnerships, and customer satisfaction across every project we
          handle.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section id="mission" style={styles.darkSection}>
        <div style={styles.missionGrid}>
          <div style={styles.missionCard}>
            <h2>Mission</h2>

            <p>
              To provide reliable, efficient, and professional services that
              help businesses and communities operate smoothly.
            </p>
          </div>

          <div style={styles.missionCard}>
            <h2>Vision</h2>

            <p>
              To become a trusted multi-service company known for excellence,
              innovation, and long-term client relationships.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>

        <div style={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                height: openIndex === index ? "auto" : "250px",
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

      {/* WHY CHOOSE US */}
      <section style={styles.darkSection}>
        <h2 style={styles.sectionTitleWhite}>Why Choose Us</h2>

        <div style={styles.whyGrid}>
          <div style={styles.whyCard}>✔ Professional & Reliable</div>
          <div style={styles.whyCard}>✔ Affordable Solutions</div>
          <div style={styles.whyCard}>✔ Customer-Focused Service</div>
          <div style={styles.whyCard}>✔ Fast Response Time</div>
          <div style={styles.whyCard}>✔ Multi-Service Convenience</div>
          <div style={styles.whyCard}>✔ Dedicated Team</div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={styles.ctaSection}>
        <h2>Ready to work with a dependable service partner?</h2>

        <div style={styles.heroButtons}>
          <button style={styles.primaryBtn}>
            Request a Quote
          </button>

          <button style={styles.secondaryBtn}>
            Contact Our Team
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.contact}>
        <h2 style={styles.sectionTitleWhite}>Contact Us</h2>

        <p>📞 +27 78 356 8531</p>
        <p>📧 mkb_holdings@gmail.com</p>
        <p>💬 WhatsApp: +27 78 356 8531</p>
        <p>📍 Soweto, 80 Maphango Zola</p>
        <p>Serving clients across Gauteng and surrounding areas.</p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <h3>mkb_holdings</h3>

        <p>@mkb_holdings</p>

        <p style={{ marginTop: "15px", opacity: 0.7 }}>
          © 2026 mkb_holdings. All Rights Reserved.
        </p>
      </footer>
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
    padding: "18px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #222",
  },

  logo: {
    margin: 0,
    color: "#d4af37",
    fontSize: "28px",
    letterSpacing: "2px",
  },

  navSlogan: {
    margin: 0,
    fontSize: "12px",
    opacity: 0.7,
  },

  navLinks: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },

  hero: {
    background: "linear-gradient(to right, #0d0d0d, #1a1a1a)",
    color: "white",
    textAlign: "center",
    padding: "120px 20px",
  },

  heroTitle: {
    fontSize: "60px",
    color: "#d4af37",
    marginBottom: "10px",
  },

  heroSlogan: {
    fontSize: "20px",
    marginBottom: "25px",
    opacity: 0.85,
  },

  heroText: {
    maxWidth: "750px",
    margin: "0 auto",
    lineHeight: "1.7",
    fontSize: "18px",
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
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  secondaryBtn: {
    backgroundColor: "transparent",
    border: "1px solid #d4af37",
    color: "#d4af37",
    padding: "14px 28px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  section: {
    padding: "90px 20px",
    textAlign: "center",
  },

  darkSection: {
    padding: "90px 20px",
    backgroundColor: "#111",
    color: "white",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "38px",
    marginBottom: "30px",
  },

  sectionTitleWhite: {
    fontSize: "38px",
    marginBottom: "40px",
    color: "white",
  },

  paragraph: {
    maxWidth: "850px",
    margin: "0 auto",
    lineHeight: "1.8",
    color: "#444",
    fontSize: "17px",
  },

  missionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  missionCard: {
    backgroundColor: "#1c1c1c",
    padding: "35px",
    borderRadius: "14px",
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
    borderRadius: "16px",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 5px 18px rgba(0,0,0,0.08)",
    overflow: "hidden",
  },

  icon: {
    fontSize: "40px",
    marginBottom: "15px",
  },

  cardText: {
    color: "#555",
    lineHeight: "1.6",
  },

  cardDetails: {
    marginTop: "20px",
    color: "#444",
    lineHeight: "1.7",
  },

  extraText: {
    marginTop: "15px",
    fontWeight: "600",
    color: "#222",
  },

  email: {
    marginTop: "18px",
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

  ctaSection: {
    padding: "90px 20px",
    textAlign: "center",
    backgroundColor: "#f1f1f1",
  },

  contact: {
    padding: "90px 20px",
    textAlign: "center",
    backgroundColor: "#0d0d0d",
    color: "white",
    lineHeight: "2",
  },

  footer: {
    backgroundColor: "#000",
    color: "white",
    textAlign: "center",
    padding: "30px 20px",
  },
};