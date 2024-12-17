import React from "react";
import "./Achivements.css";
export const Achievements = () => {
  return (
    <div className="achievements-container">
      <h1 className="achievements-title">Achievements</h1>
      <div className="achievements-grid">
        <div className="achievement-card">
          <div className="icon"><img className="iconic" src="/images/Icon1.png"  alt="Icon1"/></div>
          <h2>100%</h2>
          <p className="parat">100% project success rate, delivered on time and within budget. </p>
        </div>
        <div className="achievement-card">
          <div className="icon"><img className="iconic" src="/images/Icon2.png" alt="Icon2" /></div>
          <h2>100%</h2>
          <p className="parat">100% of our team holds certifications in technology products.
          </p>
        </div>
        <div className="achievement-card">
          <div className="icon"><img className="iconic" src="/images/Icon3.png" alt="Icon3" /></div>
          <h2>100%</h2>
          <p className="parat">100% client satisfaction and reference-ready.
          </p>
        </div>
      </div>
    </div>
  );
};

