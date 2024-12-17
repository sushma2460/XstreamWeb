import React from 'react';
import './StatCard.css';

const StatCard = ({ number, label }) => {
  return (
   
    <div className="stat-card">
      <h2 className="stat-number">{number}</h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default StatCard;