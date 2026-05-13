import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo1.png"; // உங்கள் லோகோ இருக்கும் சரியான ஃபோல்டர் பாத் கொடுக்கவும்

function Footer() {
  const styles = {
    footer: {
      background: "#111",
      color: "#fff",
      padding: "60px 0 30px",
      marginTop: "80px",
      textAlign: "center", // அனைத்தையும் சென்டர் செய்ய
    },
    content: {
      display: "flex",
      flexDirection: "column", // செங்குத்தாக அடுக்க
      alignItems: "center", // சென்டர் அலைன்மென்ட்
      gap: "40px",
    },
    logoImg: {
      height: "80px", // லோகோ அளவு
      marginBottom: "10px",
    },
    text: {
      color: "#aaa",
      fontSize: "15px",
      maxWidth: "400px",
      margin: "0 auto",
    },
    linksContainer: {
      marginTop: "20px",
    },
    linksTitle: {
      fontSize: "18px",
      fontWeight: "700",
      marginBottom: "20px",
      color: "#fff",
    },
    linkList: {
      display: "flex",
      justifyContent: "center", // லிங்குகளை சென்டர் செய்ய
      gap: "25px",
      flexWrap: "wrap",
    },
    linkItem: {
      color: "#aaa",
      textDecoration: "none",
      fontSize: "15px",
      transition: "0.3s",
    },
    bottom: {
      borderTop: "1px solid #333",
      marginTop: "50px",
      paddingTop: "30px",
      color: "#666",
      fontSize: "14px",
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.content}>
        
        {/* லோகோ பகுதி */}
        <div>
          <img src={logo} alt="Zero Pix Creative Logo" style={styles.logoImg} />
          <p style={styles.text}>
            Real Estate Editing • Photography • Videography
          </p>
        </div>

        {/* லிங்க் பகுதி */}
        <div style={styles.linksContainer}>
          <h4 style={styles.linksTitle}>Quick Links</h4>
          <div style={styles.linkList}>
            <Link to="/" style={styles.linkItem}>Home</Link>
            <Link to="/about" style={styles.linkItem}>About</Link>
            <Link to="/services" style={styles.linkItem}>Services</Link>
            <Link to="/work" style={styles.linkItem}>Work</Link>
            <Link to="/contact" style={{...styles.linkItem, color: '#ffcc00'}}>Contact</Link>
          </div>
        </div>

      </div>

      {/* காப்புரிமை பகுதி */}
      <div className="container" style={styles.bottom}>
        <p>© 2026 Zero Pix Creative. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;