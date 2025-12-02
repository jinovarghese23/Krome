import React from 'react';
import './Works.css';

function Works() {
  return (
    <>
    <br /><br /><br />
      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="section-subtitle">
              A streamlined approach to bringing your vision to life
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number"><span>1</span></div>
              <h3 className="step-title">Discovery</h3>
              <p className="step-description">
                Understanding your vision, goals, and target audience
              </p>
            </div>

            <div className="process-step">
              <div className="step-number"><span>2</span></div>
              <h3 className="step-title">Planning</h3>
              <p className="step-description">
                Developing concepts, scripts, and production strategies
              </p>
            </div>

            <div className="process-step">
              <div className="step-number"><span>3</span></div>
              <h3 className="step-title">Production</h3>
              <p className="step-description">
                Capturing stunning visuals with expert cinematography
              </p>
            </div>

            <div className="process-step">
              <div className="step-number"><span>4</span></div>
              <h3 className="step-title">Delivery</h3>
              <p className="step-description">
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
