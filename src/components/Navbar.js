import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImg from "./logo1.png"; //

function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  // விண்டோ அளவை செக் செய்ய
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Styles ---
  const headerStyle = {
    backgroundColor: "#fff",
    padding: "15px 0",
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
    flexDirection: isMobile ? "column" : "row", // மொபைலில் செங்குத்தாக மாறும்
    justifyContent: "space-between",
    alignItems: "center",
    gap: isMobile ? "15px" : "0"
  };

  const navLinksStyle = {
    display: "flex",
    flexWrap: "wrap", // மொபைலில் இடம் பற்றாக்குறையைத் தவிர்க்க
    justifyContent: "center",
    alignItems: "center",
    gap: isMobile ? "15px" : "30px"
  };

  const getLinkStyle = (name) => ({
    textDecoration: "none",
    color: hovered === name ? "#ffcc00" : "#333", // Hover yellow
    fontWeight: "500",
    fontSize: isMobile ? "14px" : "15px",
    transition: "0.3s ease"
  });

  const contactBtnStyle = {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: isMobile ? "8px 20px" : "10px 25px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: isMobile ? "13px" : "15px"
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <Link to="/">
          <img src={logoImg} alt="Zero Pix Logo" style={{ height: isMobile ? "45px" : "75px", width: "auto" }} />
        </Link>

        {/* Links */}
        <nav style={navLinksStyle}>
          {["Home", "About", "Services", "Portfolio"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={({ isActive }) => ({
                ...getLinkStyle(item),
                color: isActive || hovered === item ? "#ffcc00" : "#333" // Active yellow
              })}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
            >
              {item}
            </NavLink>
          ))}

          <Link to="/contact" style={contactBtnStyle}>CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;