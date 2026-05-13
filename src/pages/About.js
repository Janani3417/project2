import React from "react";
import { useNavigate } from "react-router-dom"; // நேவிகேஷன் செய்ய இதைச் சேர்க்கவும்

function About() {
  const navigate = useNavigate(); // navigate ஃபங்க்ஷனை அசைன் செய்கிறோம்

  const goToContact = () => {
    navigate("/contact"); // Contact பக்கத்தின் path-ஐ இங்கே கொடுக்கவும்
  };

  return (
    <main className="about-page">
      <section className="about-hero">
        <span>ABOUT US</span>
        <h1>Creative Editing Solutions For Modern Real Estate</h1>
      </section>

      <section className="about-content">
        <div className="content-block">
          <h2>Who We Are</h2>
          <p>
            Zero Pix Creative is a creative studio specializing in real estate photo and video 
            editing, along with photography, videography, graphic design, and video editing 
            services. We are passionate about transforming property visuals into compelling 
            marketing assets.
          </p>
        </div>

        <div className="content-block">
          <h2>Our Approach</h2>
          <p>
            We combine creativity with precision to deliver high-quality visuals that highlight 
            properties in the best possible way. Every project is approached with attention to 
            detail and a deep understanding of the real estate market's visual needs.
          </p>
        </div>

        <div className="content-block">
          <h2>What We Do</h2>
          <p>
            From property photo retouching and HDR editing to cinematic walkthrough videos, 
            we help realtors and businesses present their properties professionally. Our team 
            specializes in visual storytelling that converts viewers into leads.
          </p>
        </div>

        <div className="why-choose">
          <h2>Why Choose Us</h2>
          <ul>
            <li>✓ Expert team with years of real estate visual experience</li>
            <li>✓ Fast turnaround times without compromising quality</li>
            <li>✓ Scalable solutions for projects of any size</li>
            <li>✓ Dedicated support and communication</li>
          </ul>
        </div>
      </section>

      <section className="ready-to-work">
        <h2>Ready to Work Together?</h2>
        <p>Let's discuss how we can help elevate your property presentations.</p>
        
        {/* onClick ஃபங்க்ஷனை இங்கே சேர்த்துள்ளேன் */}
        <button className="btn-yellow" onClick={goToContact}>
          GET IN TOUCH
        </button>
      </section>
    </main>
  );
}

export default About;