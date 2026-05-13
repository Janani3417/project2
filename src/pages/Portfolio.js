import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const projects = [
    { id: 1, category: "Photo Editing", title: "Modern Luxury Home", desc: "HDR editing and virtual furniture staging for luxury property listing.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" },
    { id: 2, category: "Video Editing", title: "Downtown Penthouse", desc: "Professional walkthrough video with cinematic transitions.", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000" },
    { id: 3, category: "Graphic Design", title: "Real Estate Campaign", desc: "Social media poster series for property marketing campaign.", image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000" },
    { id: 4, category: "Photo Editing", title: "Beachfront Property", desc: "Day-to-dusk conversion creating golden hour effect.", image: "https://images.unsplash.com/photo-1512915922611-e370939a59c9?q=80&w=1000" },
    { id: 5, category: "Video Editing", title: "Suburban Home Tour", desc: "Drone footage editing with aerial property showcase.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000" },
    { id: 6, category: "Graphic Design", title: "Property Branding", desc: "Complete branding and design system for real estate company.", image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1000" }
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <main className="portfolio-page">
      <div className="container">
        {/* Header */}
        <section className="portfolio-header">
          <span className="sub-title">OUR WORK</span>
          <br></br>
          <h1>Portfolio & Case Studies</h1>
          <br></br>
          <p>Explore our collection of real estate visual transformations and successful projects.</p>
          <br></br>
        </section>

        {/* Filters */}
        <div className="filter-container">
          {["All", "Photo Editing", "Video Editing", "Graphic Design"].map((cat) => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid with Hover Effect */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div className="project-card-hover" key={project.id}>
              <img src={project.image} alt={project.title} className="project-img-main" />
              <div className="project-overlay">
                <span className="category-tag-white">{project.category.toUpperCase()}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-item"><h2>500+</h2><p>Projects Completed</p></div>
          <div className="stat-item"><h2>200+</h2><p>Happy Clients</p></div>
          <div className="stat-item"><h2>50M+</h2><p>Photos Edited</p></div>
          <div className="stat-item"><h2>5+</h2><p>Years Experience</p></div>
        </section>

        {/* CTA */}
        <section className="impressed-section">
          <h2>Impressed by Our Work?</h2>
          <p>Let's create something amazing for your real estate business.</p>
          <button className="btn-yellow" onClick={() => navigate("/contact")}>
            START YOUR PROJECT
          </button>
        </section>
      </div>
    </main>
  );
}

export default Portfolio;