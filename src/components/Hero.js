import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "./bg1.jpg"; 

function Hero() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  // மொபைல் வியூ செக் செய்ய
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToContact = () => {
    navigate("/contact"); 
  };

  // Services பக்கத்திற்குச் செல்ல திருத்தப்பட்ட பங்க்ஷன்
  const goToServices = () => {
    navigate("/services"); // இது Services பக்கத்திற்கு கூட்டிச் செல்லும்
  };

  // --- Styles ---
  const styles = {
    hero: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: isMobile ? "40px 20px" : "80px 100px",
      minHeight: "80vh",
      gap: "40px",
      backgroundColor: "#fff"
    },
    content: {
      flex: "1",
      textAlign: "left"
    },
    subTitle: {
      color: "#ffcc00",
      fontWeight: "700",
      letterSpacing: "1.5px",
      fontSize: "14px"
    },
    title: {
      fontSize: isMobile ? "36px" : "56px",
      fontWeight: "900",
      lineHeight: "1.2",
      margin: "20px 0",
      color: "#111"
    },
    description: {
      fontSize: "18px",
      color: "#666",
      marginBottom: "40px",
      maxWidth: "500px"
    },
    btnContainer: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap"
    },
    btnBlack: {
      backgroundColor: "#111",
      color: "#fff",
      padding: "15px 35px",
      borderRadius: "50px",
      fontWeight: "700",
      border: "none",
      cursor: "pointer",
      fontSize: "14px"
    },
    btnOutline: {
      backgroundColor: "transparent",
      color: "#111",
      padding: "15px 35px",
      borderRadius: "50px",
      fontWeight: "700",
      border: "2px solid #111",
      cursor: "pointer",
      fontSize: "14px"
    },
    imageContainer: {
      flex: "1.2",
      width: "100%"
    },
    image: {
      width: "100%",
      borderRadius: "20px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
    }
  };

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <span style={styles.subTitle}>REAL ESTATE VISUAL SOLUTIONS</span>
        <h1 style={styles.title}>Elevate Your Property Presentation</h1>
        <p style={styles.description}>
          High-quality Photo & Video Editing, Creative Graphics, and 
          Motion Design tailored for real estate success.
        </p>
        <div style={styles.btnContainer}>
          <button style={styles.btnBlack} onClick={goToContact}>
            GET STARTED
          </button>
          
          {/* இங்கே navigate("/services") வேலை செய்யும் */}
          <button style={styles.btnOutline} onClick={goToServices}>
            VIEW SERVICES
          </button>
        </div>
      </div>

      <div style={styles.imageContainer}>
        <img src={bgImage} alt="Property Presentation" style={styles.image} />
      </div>
    </section>
  );
}

export default Hero;