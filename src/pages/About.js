import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  const styles = {
    main: { fontFamily: "'Inter', sans-serif", color: "#333", lineHeight: "1.6" },
    hero: { padding: "80px 20px", textAlign: "center", backgroundColor: "#f9f9f9" },
    subTitle: { color: "#ffcc00", fontWeight: "700", letterSpacing: "2px", fontSize: "14px" },
    title: { fontSize: "42px", fontWeight: "800", margin: "20px 0", color: "#111" },
    section: { maxWidth: "1100px", margin: "0 auto", padding: "60px 20px" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginTop: "40px" },
    block: { marginBottom: "40px" },
    h2: { fontSize: "28px", fontWeight: "700", marginBottom: "20px", color: "#111", borderLeft: "5px solid #ffcc00", paddingLeft: "15px" },
    list: { listStyle: "none", padding: 0 },
    listItem: { marginBottom: "10px", display: "flex", alignItems: "start", gap: "10px" },
    check: { color: "#ffcc00", fontWeight: "bold" },
    cta: { textAlign: "center", padding: "80px 20px", backgroundColor: "#111", color: "#fff" },
    btn: { backgroundColor: "#ffcc00", color: "#000", border: "none", padding: "15px 40px", borderRadius: "50px", fontWeight: "700", cursor: "pointer", marginTop: "20px", fontSize: "16px" }
  };

  return (
    <main style={styles.main}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <span style={styles.subTitle}>ABOUT ZERO PIX CREATIVE</span>
        <h1 style={styles.title}>Elevating Real Estate Visuals <br/> with Precision & Creativity</h1>
        <p style={{ maxWidth: "800px", margin: "0 auto", color: "#666" }}>
          Zero Pix Creative is a creative studio specializing in real estate photo and video editing, 
          photography, videography, and graphic design, with a strong focus on professional colour correction and visual enhancement.
        </p>
      </section>

      {/* Content Section */}
      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.block}>
            <h2 style={styles.h2}>Who We Are</h2>
            <p>
              Our work combines creativity with precision to deliver clean, high-quality visuals that highlight properties 
              and brands in the best possible way. We focus on detail, lighting, and colour accuracy to enhance 
              listings and build a strong professional presence.
            </p>
          </div>

          <div style={styles.block}>
            <h2 style={styles.h2}>What We Do</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}><span style={styles.check}>•</span> Real Estate Photo Editing (HDR, Twilight, Virtual Staging)</li>
              <li style={styles.listItem}><span style={styles.check}>•</span> Video Editing (Walkthroughs, Cinematic, Social Media)</li>
              <li style={styles.listItem}><span style={styles.check}>•</span> Photography & Videography (Architectural, Commercial, Events)</li>
              <li style={styles.listItem}><span style={styles.check}>•</span> Graphic Design (Marketing, Packaging, Motion Graphics)</li>
            </ul>
          </div>
        </div>

        {/* Why Outsource Section */}
        <div style={{ marginTop: "60px" }}>
          <h2 style={styles.h2}>Why Outsource to Us?</h2>
          <div style={styles.grid}>
            <div style={styles.block}>
              <h4 style={{ fontWeight: "700" }}>Expert Visual Enhancements</h4>
              <p style={{ fontSize: "14px", color: "#666" }}>Ordinary property photos are transformed into eye-catching images that attract buyers' attention.</p>
            </div>
            <div style={styles.block}>
              <h4 style={{ fontWeight: "700" }}>Fast Turnaround Delivery</h4>
              <p style={{ fontSize: "14px", color: "#666" }}>Get optimized images quickly to publish listings faster and stay ahead in the market.</p>
            </div>
            <div style={styles.block}>
              <h4 style={{ fontWeight: "700" }}>Consistent Quality</h4>
              <p style={{ fontSize: "14px", color: "#666" }}>Uniform enhancements in lighting, colour, and clarity across all your listings.</p>
            </div>
            <div style={styles.block}>
              <h4 style={{ fontWeight: "700" }}>Cost-Effective Solutions</h4>
              <p style={{ fontSize: "14px", color: "#666" }}>Avoid the expense of in-house tools and staff while gaining expert results at competitive rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <h2 style={{ color: "#fff", fontSize: "32px" }}>Ready to Elevate Your Property Presentation?</h2>
        <p style={{ color: "#ccc" }}>We generate no-obligation quotes within 24 hours for every request.</p>
        <button style={styles.btn} onClick={goToContact}>
          GET IN TOUCH
        </button>
      </section>
    </main>
  );
}

export default About;