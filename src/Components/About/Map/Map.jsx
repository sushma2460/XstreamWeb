import React from 'react';
import './Map.css';

 const WorldMap = () => {
  const locations = [
    { id: 1, x: 20, y: 30, title: "New York" },
    { id: 2, x: 35, y: 25, title: "London" },
    { id: 3, x: 55, y: 35, title: "Dubai" },
    { id: 4, x: 75, y: 30, title: "Singapore" },
    { id: 5, x: 45, y: 45, title: "Cape Town" },
    { id: 6, x: 30, y: 40, title: "Madrid" },
  ];

  return (
    <div className="world-map-container">
      <div className="world-map">
        {locations.map((location) => (
          <div
            key={location.id}
            className="location-marker"
            style={{
              left: '${location.x}%',
              top: '${location.y}%'
            }}
          >
            {/* <div className="marker-pulse"></div> */}
            {/*   <div className="marker-point"></div> */}
            <span className="location-title">{location.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WorldMap;
