import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  // ஸ்கிரீன் அளவை கண்காணிக்க
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    // உங்கள் EmailJS IDs இங்கே கொடுக்கவும்
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          alert("Message Sent Successfully!");
          form.current.reset();
      }, (error) => {
          alert("Failed to send message, please try again.");
      });
  };

  // --- Inline Styles ---
  const styles = {
    main: {
      padding: isMobile ? "40px 0" : "80px 0",
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#fff"
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "0 20px"
    },
    header: {
      marginBottom: "60px",
      textAlign: "left"
    },
    subTitle: {
      color: "#888",
      fontSize: "14px",
      fontWeight: "600",
      letterSpacing: "1px",
      textTransform: "uppercase"
    },
    title: {
      fontSize: isMobile ? "32px" : "48px",
      fontWeight: "800",
      margin: "10px 0 20px",
      color: "#111"
    },
    description: {
      color: "#666",
      maxWidth: "600px",
      lineHeight: "1.6"
    },
    grid: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "50px" : "100px",
      alignItems: "flex-start"
    },
    infoSection: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      gap: "40px"
    },
    formSection: {
      flex: "2"
    },
    infoItem: {
      textAlign: "left"
    },
    infoLabel: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontWeight: "700",
      fontSize: "16px",
      marginBottom: "8px",
      color: "#111"
    },
    infoText: {
      color: "#666",
      fontSize: "15px",
      lineHeight: "1.5"
    },
    formRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "20px",
      marginBottom: "20px"
    },
    inputGroup: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    },
    label: {
      fontWeight: "600",
      fontSize: "14px",
      color: "#333"
    },
    input: {
      padding: "12px 15px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      fontSize: "15px",
      outline: "none",
      backgroundColor: "#fcfcfc"
    },
    textarea: {
      padding: "12px 15px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      fontSize: "15px",
      outline: "none",
      minHeight: "150px",
      width: "100%",
      backgroundColor: "#fcfcfc"
    },
    submitBtn: {
      backgroundColor: "#ffcc00", // படத்தில் உள்ள மஞ்சள் நிறம்
      color: "#000",
      border: "none",
      padding: "15px 40px",
      borderRadius: "50px",
      fontWeight: "700",
      fontSize: "14px",
      cursor: "pointer",
      marginTop: "20px",
      transition: "0.3s"
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* Header Section */}
        <section style={styles.header}>
          <span style={styles.subTitle}>GET IN TOUCH</span>
          <h1 style={styles.title}>Let's Work Together</h1>
          <p style={styles.description}>Have a project in mind? We'd love to hear from you. Get in touch and let's create something amazing.</p>
        </section>

        <div style={styles.grid}>
          {/* Left Side: Info */}
          <div style={styles.infoSection}>
            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>✉ Email</div>
              <p style={styles.infoText}>hello@zeropix.com</p>
            </div>
            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>📍 Location</div>
              <p style={styles.infoText}>Available Globally<br/>Remote Services</p>
            </div>
            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Response Time</div>
              <p style={styles.infoText}>We typically respond within 24 hours</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div style={styles.formSection}>
            <form ref={form} onSubmit={sendEmail}>
              <div style={styles.formRow}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Name</label>
                  <input type="text" name="user_name" placeholder="Your name" required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Email</label>
                  <input type="email" name="user_email" placeholder="your@email.com" required style={styles.input} />
                </div>
              </div>

              <div style={styles.formRow}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Phone</label>
                  <input type="text" name="user_phone" placeholder="+1 (555) 000-0000" style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Service Interested In</label>
                  <select name="service_type" style={styles.input}>
                    <option value="">Select a service</option>
                    <option value="photo">Photo Editing</option>
                    <option value="video">Video Editing</option>
                    <option value="graphic">Graphic Design</option>
                  </select>
                </div>
              </div>

              <div style={{...styles.inputGroup, marginTop: "20px"}}>
                <label style={styles.label}>Message</label>
                <textarea name="message" placeholder="Tell us about your project..." required style={styles.textarea}></textarea>
              </div>

              <button type="submit" style={styles.submitBtn}>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;