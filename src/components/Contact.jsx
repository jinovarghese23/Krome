import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="bg-pattern"></div>

      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-left">
          <div className="section-header">
            <h1 className="main-title">
              <span className="title-word">GET</span>
              <span className="title-word">IN</span>
              <span className="title-word">TOUCH</span>
            </h1>
            <p className="subtitle">We'd love to hear from you</p>
            <div className="divider"></div>
          </div>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="card-content">
                <h3>Visit Our Store</h3>
                <p>Thaikkattil Stores</p>
                <p>Thrissur, Kerala</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaPhone />
              </div>
              <div className="card-content">
                <h3>Call Us</h3>
                <p>+91 85471 47105</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaClock />
              </div>
              <div className="card-content">
                <h3>Business Hours</h3>
                <p>Mon-Fri: 9AM - 8PM</p>
                <p>Sat-Sun: 10AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT (MAP) */}
        <div className="contact-right">
          <div className="map-frame">
            <div className="map-header">
              <h2 className="map-title">OUR LOCATION</h2>
              <div className="map-divider"></div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.7430740785567!2d76.21244836942472!3d10.5919199499334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7e931d49c865b%3A0x4489295dfaa802c7!2sThaikkattil%20Stores!5e0!3m2!1sen!2sin!4v1764151411100!5m2!1sen!2sin"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thaikkattil Stores Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
