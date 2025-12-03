import React, { useState } from "react";
import "../components/About.css";
import { Award, Users, Target, Zap } from "lucide-react";

const About = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1705073/pexels-photo-1705073.jpeg",
      title: "Commercial Advertisements",
      description:
        "Compelling ad films that elevate brand awareness, build emotion, and drive results.",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
      title: "Video Production & Filming",
      description:
        "From script to screen, we handle the entire production process with professional crew and equipment.",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/6953672/pexels-photo-6953672.jpeg",
      title: "Interviews & Podcasts",
      description:
        "Studio-quality interview and podcast production for corporate, creative, and personal branding.",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/9595075/pexels-photo-9595075.jpeg",
      title: "Product Shoots",
      description:
        "Clean, crisp, and appealing product visuals tailored for websites, ads, and online marketplaces.",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/7481950/pexels-photo-7481950.jpeg",
      title: "Social Media Reels & Posts",
      description:
        "Short-form digital content designed for impact across Instagram, YouTube, and Facebook.",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/9488232/pexels-photo-9488232.jpeg",
      title: "Studio Floor & Rentals",
      description:
        "A fully equipped production studio with lighting, space, and gear rental options.",
    },
  ];

  const benefits = [
    "Professional production standards",
    "Creative storytelling and cinematic execution",
    "Complete end-to-end solutions",
    "Flexible services for brands, agencies, and individuals",
    "Dedicated studio space for shoots and content creation",
  ];

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className="about-us">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Krome Culture Productions</h1>
          <p className="tagline">Modern Digital Production House</p>
          <p className="founder">Founded by Krishna</p>
        </div>
      </section>

      {/* Mission Section - Fixed structure */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-header">
            <h2 className="mission-title">
              Our <span className="text-gold">Mission</span>
            </h2>
            <p className="mission-subtitle">
              To create cinematic experiences that inspire, engage, and
              transform the way stories are told in the digital age
            </p>
          </div>

          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-icon">
                <Award size={26} />
              </div>
              <h3 className="mission-item-title">Excellence</h3>
              <p className="mission-item-text">
                Delivering award-winning quality in every project
              </p>
            </div>

            <div className="mission-item">
              <div className="mission-icon">
                <Users size={26} />
              </div>
              <h3 className="mission-item-title">Collaboration</h3>
              <p className="mission-item-text">
                Working closely with clients to realize their vision
              </p>
            </div>

            <div className="mission-item">
              <div className="mission-icon">
                <Target size={26} />
              </div>
              <h3 className="mission-item-title">Innovation</h3>
              <p className="mission-item-text">
                Pushing boundaries with cutting-edge techniques
              </p>
            </div>

            <div className="mission-item">
              <div className="mission-icon">
                <Zap size={26} />
              </div>
              <h3 className="mission-item-title">Impact</h3>
              <p className="mission-item-text">
                Creating content that moves and inspires audiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>

          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card ${
                  activeService === service.id ? "active" : ""
                }`}
                onClick={() => toggleService(service.id)}
              >
                <div className="service-img-wrapper">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="service-img"
                  />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="checkmark">✔</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="vision">
        <div className="container">
          <h2>Our Vision</h2>
          <p>
            To become a leading creative production hub delivering exceptional
            visual experiences and transforming ideas into powerful digital
            stories.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <p className="contact-tagline">
            Want to create something remarkable?
          </p>
          <p>
            Krome Culture Productions is ready to bring your vision to life.
          </p>
          <a href="/contact">
            <button className="cta-button">Contact Us Today</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
