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
    padding: isMobile ? "10px 0" : "15px 0",
    borderBottom: "1px solid #f0f0f0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%"
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    flexDirection: "row", // Always row to keep logo left and nav right
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navLinksStyle = {
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "10px" : "30px" // Tighter gap for mobile
  };

  const getLinkStyle = (name) => ({
    textDecoration: "none",
    color: hovered === name ? "#ffcc00" : "#333",
    fontWeight: "600",
    fontSize: isMobile ? "12px" : "15px", // Smaller text on mobile
    transition: "0.3s ease",
    display: isMobile && (name === "Portfolio" || name === "About") ? "none" : "block" // Optional: Hide extra links on very small screens to save space
  });

  const contactBtnStyle = {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: isMobile ? "8px 15px" : "12px 28px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: isMobile ? "11px" : "14px",
    marginLeft: isMobile ? "5px" : "10px"
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo - Stays Left */}
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img 
            src={logoImg} 
            alt="Zero Pix Logo" 
            style={{ height: isMobile ? "35px" : "65px", width: "auto" }} 
          />
        </Link>

        {/* Navigation - Stays Right */}
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