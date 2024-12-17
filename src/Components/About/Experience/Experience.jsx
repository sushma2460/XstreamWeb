import React from 'react';
import StatCard from './StatCard';
import ExperienceContent from './experienceContent';
import './Experience.css';

const Experience = () => {
  const stats = [
    { number: 50, label: 'Projects Completed' },
    { number: 50, label: 'Happy Clients' },
    { number: 4, label: 'Years in Business' }
  ];

  return (
    <section className="experience">
      <div className="experience-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
        <ExperienceContent />
      </div>
      <div className="background-decoration"></div>
    </section>
  );
};

export default Experience;