import React from "react";
import "../components/Footer.css";
import logo from "../assets/Logo.JPG";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and Description Section */}
        <div className="logo-section">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <div className="company-description">
            <p>
              Krome Culture Productions, founded by Krishna, delivers
              high-impact video content including commercials, product shoots,
              interviews, social media reels, and more. We also offer a fully
              equipped studio space and rental services.
            </p>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="social-section">
          <div className="social-icons-container">
            {/* Instagram */}
            <a href="https://www.instagram.com/kromeculture/" target="_blank">
              <div className="icon-wrapper insta-icon">
                <div className="social-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      fillRule="evenodd"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </a>

            {/* Dialer/Phone */}
            <a href="tel:+91 85471 47105">
              <div className="icon-wrapper dialer-icon">
                <div className="social-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon-svg"
                  >
                    <path
                      fill="currentColor"
                      d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    />
                  </svg>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/+918547147105?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20more%20details."
              target="_blank"
            >
              <div className="icon-wrapper whatsapp-icon">
                <div className="social-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon-svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/@iamkrome-ze1xl" target="_blank">
              <div className="icon-wrapper youtube-icon">
                <div className="social-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon-svg"
                  >
                    <path
                      d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-section">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Krome
          Culture Production / Developed by Jino
        </p>
      </div>
    </footer>
  );
}

export default Footer;
