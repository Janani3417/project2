import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImg from "./logo1.png"; 

function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Styles ---
  const headerStyle = {
    backgroundColor: "#fff",
    padding: isMobile ? "8px 0" : "15px 0",
    borderBottom: "1px solid #f0f0f0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    boxSizing: "border-box"
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isMobile ? "0 10px" : "0 20px",
    display: "flex",
    flexDirection: "row", // Force horizontal layout
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navLinksStyle = {
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "8px" : "30px", // Tight gap for mobile
    flexShrink: 0
  };

  const getLinkStyle = (name) => ({
    textDecoration: "none",
    color: hovered === name ? "#ffcc00" : "#333",
    fontWeight: "600",
    fontSize: isMobile ? "11px" : "15px", // Small text to fit mobile
    transition: "0.3s ease",
    whiteSpace: "nowrap", // Stop text from breaking into two lines
    display: "block" // REMOVED the 'none' display to show all links
  });

  const contactBtnStyle = {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: isMobile ? "6px 12px" : "12px 28px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: isMobile ? "10px" : "14px", // Matches button in image
    marginLeft: isMobile ? "4px" : "10px",
    whiteSpace: "nowrap"
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo - Far Left */}
        <Link to="/" style={{ display: "flex", alignItems: "center", flexShrink: 1 }}>
          <img 
            src={logoImg} 
            alt="Zero Pix Logo" 
            style={{ 
              height: isMobile ? "30px" : "65px", // Smaller logo for mobile
              width: "auto" 
            }} 
          />
        </Link>

        {/* Navigation - Far Right */}
        <nav style={navLinksStyle}>
          {["Home", "About", "Services", "Portfolio"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={({ isActive }) => ({
                ...getLinkStyle(item),
                color: isActive ? "#ffcc00" : (hovered === item ? "#ffcc00" : "#333")
              })}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
            >
              {item}
            </NavLink>
          ))}

          {/* Contact Button */}
          <Link to="/contact" style={contactBtnStyle}>CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;