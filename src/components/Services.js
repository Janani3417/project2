function Services() {
  const services = [
    "Photo Editing",
    "Video Editing",
    "Graphic Design",
    "Drone Editing",
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item}</h3>

            <p>
              High quality professional editing
              solutions for real estate.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
