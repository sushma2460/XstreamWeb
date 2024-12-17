import React from 'react';
import './Solutions.css';
import img from "./Solimg.png";

export const Solutions = () => {
  return (
    <section className="strategy">
      <div className='colo'>
      <div className="strategy-container">
        <div className="strategy-image">
          <img src={img} alt="Strategy curve" />
        </div>
        <div className="strategy-content">
          <h2>Redefining Success in Technology Consulting Through a Personalized Strategy</h2>
          <p>
          Xstream Minds is revolutionizing the technology consulting services industry with our "Precision Customer Engagement Model," which tailors our proven services to meet the unique needs of each client. This approach ensures a deep understanding of our clients' objectives, fostering a collaborative strategy to achieve these goals while proactively identifying and eliminating inefficiencies that often hinder technology projects. With a comprehensive strategy, the right technology, and a focus on eliminating waste, projects are delivered more efficiently, consulting costs are reduced, and value is realized faster.
          </p>
        </div>
        </div>
        </div>
    </section>
  );
};
