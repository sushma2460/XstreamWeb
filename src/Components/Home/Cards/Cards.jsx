import React from "react";
import "./Cards.css";
import logo1 from "./Logo1.png";
import logo2 from "./Logo2.png";
import logo3 from "./Logo3.png";
import logo4 from "./Logo4.png";


export const Cards = () => {
  const cardsData = [
    {
      id: 1,
      logo: logo1, // Use imported image
      title: "Strategic Insight Services",
      content: "Xstream Minds Strategic Insight Services empower organizations by providing valuable data-driven insights, guiding informed strategic decisions, optimizing performance, and driving sustainable growth in today’s dynamic business landscape. Our expert team helps unlock growth opportunities and enhance your competitive advantage.",
    },
    {
      id: 2,
      logo: logo2, // Provide the path to the image
      title: "Full-Spectrum Technology Implementation and Support",
      content: "Full-Spectrum Technology Implementation and Support offers end-to-end services, from initial planning and system integration to ongoing maintenance and troubleshooting. This comprehensive approach ensures seamless deployment, optimized performance, and continuous support, helping businesses achieve efficiency, scalability, and long-term success",
    },
    {
      id: 3,
      logo: logo3, // Provide the path to the image
      title: "Next-Gen Solutions & Services",
      content: "Next-Gen Solutions & Services deliver cutting-edge technologies and strategies to help businesses stay ahead in a rapidly changing market. By embracing the latest innovations, these solutions enhance efficiency, foster growth, and ensure scalability, enabling organizations to adapt to evolving challenges and opportunities.",
    },
    {
      id: 4,
      logo: logo4, // Provide the path to the image
      title: "Empowering Clients with Knowledge and Independence",
      content: "At Xstream Minds, our Knowledge Transfer & Self-Reliance philosophy helps clients build autonomy through expert training and actionable insights. By empowering teams to operate independently, we enable businesses to respond to challenges, scale effectively, and achieve sustained growth.",
    },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-front">
            <img className="logo" src={card.logo} alt={card.title} /> {/* Display the logo image */}
            <h3 className="title">{card.title}</h3>
          </div>
          <div className="card-back">
            <p className="content">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
