import React from "react";
import { useNavigate } from "react-router-dom"; // நேவிகேஷன் செய்ய
import bgImage from "./bg1.jpg"; 

function Hero() {
  const navigate = useNavigate();

  // Contact பக்கத்திற்கு செல்ல
  const goToContact = () => {
    navigate("/contact"); 
  };

  // Services பகுதிக்கு (கீழே) ஸ்க்ரோல் செய்ய
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <span>REAL ESTATE VISUAL SOLUTIONS</span>
        <h1>Elevate Your Property Presentation</h1>
        <p>
          High-quality Photo & Video Editing, Creative Graphics, and 
          Motion Design tailored for real estate success.
        </p>
        <div className="hero-btns">
          {/* GET STARTED கிளிக் செய்தால் Contact பக்கத்திற்கு செல்லும் */}
          <button className="btn-black" onClick={goToContact}>
            GET STARTED
          </button>
          
          {/* VIEW SERVICES கிளிக் செய்தால் Services பகுதிக்கு ஸ்க்ரோல் ஆகும் */}
          <button className="btn-outline" onClick={scrollToServices}>
            VIEW SERVICES
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={bgImage} alt="Property Presentation" />
      </div>
    </section>
  );
}

export default Hero;