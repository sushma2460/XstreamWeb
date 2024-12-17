import React from "react";
import "./Service1.css";
import backgroundVideo from "./servicebg.mp4"; // Replace with your video file

const VideoBackground = () => {
  return (
    <div className="video-background-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="content-overlay">
        <h1>Welcome to My Website</h1>
        <p>This is an example of a video background.</p>
      </div> */}
    </div>
  );
};

export default VideoBackground;
