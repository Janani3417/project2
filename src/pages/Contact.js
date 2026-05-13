import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // உங்கள் EmailJS IDs இங்கே கொடுக்கவும்
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          alert("Message Sent Successfully!");
          form.current.reset();
      }, (error) => {
          alert("Failed to send message, please try again.");
      });
  };

  return (
    <main className="contact-page">
      <div className="container">
        {/* Header Section */}
        <section className="contact-header">
          <span className="sub-title">GET IN TOUCH</span>
          <h1>Let's Work Together</h1>
          <p>Have a project in mind? We'd love to hear from you. Get in touch and let's create something amazing.</p>
        </section>

        <div className="contact-grid">
          {/* Left Side: Info */}
          <div className="contact-info">
            <div className="info-item">
              <h4>✉ Email</h4>
              <p>hello@zeropix.com</p>
            </div>
            <div className="info-item">
              <h4>📍 Location</h4>
              <p>Available Globally<br/>Remote Services</p>
            </div>
            <div className="info-item">
              <h4>Response Time</h4>
              <p>We typically respond within 24 hours</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-container">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" name="user_name" placeholder="Your name" required />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" name="user_email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Phone</label>
                  <input type="text" name="user_phone" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="input-group">
                  <label>Service Interested In</label>
                  <select name="service_type">
                    <option value="photo">Photo Editing</option>
                    <option value="video">Video Editing</option>
                    <option value="graphic">Graphic Design</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell us about your project..." rows="5" required></textarea>
              </div>

              <button type="submit" className="send-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;