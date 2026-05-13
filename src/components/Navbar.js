import React from "react";
import { Link } from "react-router-dom"; // Link-ஐ இம்போர்ட் செய்யவும்
import logoImg from "./logo1.png"; // உங்கள் ஃபைல் பெயர் .jpg என எரரில் உள்ளது

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        
        <Link to="/">
          <img src={logoImg} alt="Zero Pix Logo" />
        </Link>
      </div>

      <nav>
        {/* href-க்கு பதில் to மற்றும் a-க்கு பதில் Link பயன்படுத்தவும் */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        
        {/* Contact பட்டன் நேரடியாக காண்டாக்ட் பேஜிற்கு செல்ல வேண்டும் */}
        <Link to="/contact" className="contact-nav-btn">
          CONTACT
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;