import React from "react";
import { useNavigate } from "react-router-dom";

// இங்கே பங்க்ஷன் பெயரை 'Servicep' என மாற்றியுள்ளேன்
function Servicep() {
  const navigate = useNavigate();

  const servicesData = [
    {
      title: "Real Estate Photo Editing",
      icon: "🏠", 
      desc: "Transform property photos with professional editing techniques",
      features: [
        "Virtual Staging - Add or replace furniture virtually",
        "HDR Photos - Enhanced lighting and detail",
        "Day-to-Dusk Conversion - Golden hour effect",
        "Sky Replacement - Perfect skies every time",
        "Perspective Correction - Straight lines and angles",
        "Color Correction - Consistent, professional look"
      ]
    },
    {
      title: "Real Estate Video Editing",
      icon: "🎥",
      desc: "Create cinematic property videos that showcase listings beautifully",
      features: [
        "Walkthrough Video Editing - Smooth, professional flow",
        "Drone Footage Editing - Aerial property views",
        "Cinematic Real Estate Editing - Professional effects",
        "Social Media Reels - Short, engaging content",
        "Music & Sound Design - Perfect audio accompaniment",
        "Transition Effects - Smooth, polished videos"
      ]
    },
    {
      title: "Graphic Design",
      icon: "🎨",
      desc: "Professional design services for real estate marketing",
      features: [
        "Social Media Posters - Eye-catching promotional images",
        "Motion Graphics - Animated property tours",
        "Corporate Videos - Brand storytelling",
        "Advertisement Editing - Magazine and digital ads",
        "Flyer Design - Property listings and promotions",
        "Branding Materials - Logos and brand identity"
      ]
    }
  ];

  return (
    <main className="services-page">
      <section className="services-header">
        <span className="sub-title">OUR SERVICES</span>
        <h1>Professional Creative Services</h1>
        <p>We offer comprehensive real estate visual solutions tailored to your specific needs.</p>
      </section>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <ul>
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="#" className="learn-more">Learn More →</a>
          </div>
        ))}
      </div>

      <section className="pricing-cta">
        <span className="sub-title">PRICING</span>
        <h2>Flexible Packages for Every Budget</h2>
        <p>We offer custom pricing based on your specific project needs. Contact us for a detailed quote tailored to your requirements.</p>
        <button className="btn-quote" onClick={() => navigate("/contact")}>
          GET A QUOTE
        </button>
      </section>
    </main>
  );
}

// Export பெயரும் மேலே உள்ள பங்க்ஷன் பெயரும் இப்போது ஒன்றாக உள்ளது
export default Servicep;