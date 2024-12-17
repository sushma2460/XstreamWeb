import React from 'react';
import './Innovation.css';
import omer1 from "./omer1.png";
import omer2 from "./omer2.png";
import omer3 from "./omer3.png";
import omer4 from "./omer4.png";
import omer5 from "./omer5.png";


export const XstreamMinds = () => {
  return (
    <div className="xstream-frame">
      <h2 className="xstream-title">Innovative Companies Rely on Xstream Minds</h2>
      <p className="xstream-description">
        At Xstream Minds, our belief in excellence, commitment to innovation, and core values drive us to deliver precise, impactful solutions. We stay focused on your goals, ensuring efficient processes and meaningful results.
      </p>
      <div className="xstream-icons">
        <div className="xstream-icon-card">
          <img src={omer1} alt="Client Centric" />
          <p>Client Centric</p>
        </div>
        <div className="xstream-icon-card">
          <img src={omer2} alt="Fully Accredited Team" />
          <p>Fully Accredited Team</p>
        </div>
        <div className="xstream-icon-card">
          <img src={omer3} alt="Expert Solutions" />
          <p>Expert Solutions & Approaches</p>
        </div>
        <div className="xstream-icon-card">
          <img src={omer4} alt="Optimal Workflow" />
          <p>Optimal & Functional Workflow</p>
        </div>
        <div className="xstream-icon-card">
          <img src={omer5} alt="Flawless Execution" />
          <p>Flawless Project Execution</p>
        </div>
      </div>
    </div>
  );
};


