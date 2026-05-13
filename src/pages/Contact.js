import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setShowMsg(true);

    setTimeout(() => {
      setShowMsg(false);
    }, 3000);

    const formData = new FormData(e.target);

    try {

      await fetch(
        "https://formsubmit.co/ajax/haribca40@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      e.target.reset();

    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <div className="contact-page">

      {/* LEFT CONTENT */}
      <div className="left-side">

        <div className="overlay">

          <h1>
            Let's Build <br /> Something Amazing
          </h1>

          <p>
            Have a project idea or business enquiry?
            Send us a message and let’s create
            something beautiful together.
          </p>

          <div className="contact-details">
            <span>📞 +91 9876543210</span>
            <span>✉️ contact@gmail.com</span>
            <span>📍 Chennai, India</span>
          </div>

        </div>

      </div>

      {/* RIGHT FORM */}
      <div className="right-side">

        <form className="contact-form" onSubmit={handleSubmit}>

          <h2>Contact Us</h2>

          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            required
          />

          <button type="submit">
            SEND MESSAGE
          </button>

        </form>

      </div>

      {/* SNACKBAR */}
      {showMsg && (
        <div className="snackbar">
          ✅ Message Sent Successfully
        </div>
      )}

    </div>
  );
}

export default Contact;