import React from 'react';
import './Works.css';
import { Telescope, ClipboardList, Video, Send } from "lucide-react";

function Works() {
  return (
    <>
      <br /><br /><br />

      <section className="process">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Our <span className="text-accent-yellow">Process</span>
            </h2>
            <p className="section-subtitle-white">
              A streamlined approach to bringing your vision to life
            </p>
          </div>

          <div className="process-grid">

            {/* Step 1 */}
            <div className="process-step">
              <div className="step-icon">
                <Telescope size={40} color="#fff" />
              </div>
              <h3 className="step-title-yellow">Discovery</h3>
              <p className="step-description-yellow">
                Understanding your vision, goals, and target audience
              </p>
            </div>

            {/* Step 2 */}
            <div className="process-step">
              <div className="step-icon">
                <ClipboardList size={40} color="#fff" />
              </div>
              <h3 className="step-title-yellow">Planning</h3>
              <p className="step-description-yellow">
                Developing concepts, scripts, and production strategies
              </p>
            </div>

            {/* Step 3 */}
            <div className="process-step">
              <div className="step-icon">
                <Video size={40} color="#fff" />
              </div>
              <h3 className="step-title-yellow">Production</h3>
              <p className="step-description-yellow">
                Capturing stunning visuals with expert cinematography
              </p>
            </div>

            {/* Step 4 */}
            <div className="process-step">
              <div className="step-icon">
                <Send size={40} color="#fff" />
              </div>
              <h3 className="step-title-yellow">Delivery</h3>
              <p className="step-description-yellow">
                Polishing and delivering your final cinematic masterpiece
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
