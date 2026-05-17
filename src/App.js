export default function App() {
  const services = [
    {
      title: "Cleaning Services",
      description:
        "Professional residential, commercial, and industrial cleaning solutions delivered with reliability and attention to detail.",
      email: "cleaning@mkbholdings",
    },
    {
      title: "Logistics Services",
      description:
        "Efficient transport, delivery, and logistics coordination services designed to keep businesses moving smoothly.",
      email: "logistics@mkbholdings",
    },
    {
      title: "Security Services",
      description:
        "Modern security support and protection services focused on safety, professionalism, and trust.",
      email: "security@mkbholdings",
    },
    {
      title: "Tender Services",
      description:
        "Tender application support, sourcing opportunities, and business administration solutions for companies and entrepreneurs.",
      email: "tenders@mkbholdings",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial" }}>

      {/* HERO SECTION */}
      <div style={{
        backgroundColor: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "50px",
        textAlign: "center"
      }}>

        <h1 style={{
          fontSize: "55px",
          color: "#FFD700",
          marginBottom: "10px"
        }}>
          MKB HOLDINGS
        </h1>

        <h2 style={{ marginBottom: "20px" }}>
          Multi-Service Business Company
        </h2>

        <p style={{
          fontSize: "18px",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          Professional Cleaning, Logistics, Security & Business Solutions
          built on trust, reliability, and long-term partnerships.
        </p>

        <button style={{
          marginTop: "30px",
          padding: "15px 30px",
          backgroundColor: "#FFD700",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "6px"
        }}>
          Contact Us
        </button>

      </div>

      {/* SERVICES SECTION */}
      <div style={{
        padding: "60px 20px",
        backgroundColor: "#f4f4f4",
        textAlign: "center"
      }}>

        <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
          Our Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>

          {services.map((service, index) => (
            <div key={index} style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}>

              <h3>{service.title}</h3>

              <p style={{ color: "#555" }}>
                {service.description}
              </p>

              <p style={{
                marginTop: "10px",
                fontSize: "14px",
                color: "#888"
              }}>
                {service.email}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* CONTACT SECTION */}
      <div style={{
        backgroundColor: "#111",
        color: "white",
        padding: "60px 20px",
        textAlign: "center"
      }}>

        <h2 style={{ fontSize: "36px" }}>
          Contact MKB Holdings
        </h2>

        <p style={{ marginTop: "20px" }}>
          Location: Soweto, South Africa
        </p>

        <p>Email: coming soon</p>
        <p>Phone: coming soon</p>

      </div>

      {/* FOOTER */}
      <div style={{
        backgroundColor: "black",
        color: "#aaa",
        textAlign: "center",
        padding: "20px"
      }}>
        © 2026 MKB Holdings. All Rights Reserved.
      </div>

    </div>
  );
}
