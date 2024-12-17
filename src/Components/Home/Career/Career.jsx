import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Career.css';

const CareersSection = () => {
  return (
    <div className="careers-section p-1">
      <div className="container py-5 pad">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="display-5 text-whited exptext">
            Innovate, Inspire, and Excel at Xstream Minds 
            </h2>
            <p className="text-white mb-4 exppara ">
            Join a team that thrives on pushing boundaries, solving complex challenges, and delivering world-class digital solutions. At Xstream Minds, we support your growth, inspire creativity, and provide the platform to succeed in a fast-paced, ever-evolving industry.
            </p>
            <button className="btn btn-danger btn-lg px-4">
              Join our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersSection;