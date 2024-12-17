import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';/*npm install lucide-react*/

import './Belief.css';

export const CoreBeliefs = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const beliefs = [
        {
            title: "Our Core Belief",
            content: "Xstream Minds believes core convictions and tenets drive our actions and decisions, guiding us toward success. It reflects our unwavering commitment to what we believe is essential for growth."
        },
        {
            title: "Our Commitment",
            content: "Xstream Minds commited to delivering exceptional services and exceeding client expectations, focusing on long-term relationships. Our commitment to excellence shapes every project we undertake."
        },
        {
            title: "Our Philosophy",
            content: "Xstream Minds Philosophy defines an approach to business, technology, and client relationships, emphasizing integrity, transparency, and collaboration. It informs every solution we create and every decision we make."
        },
        {
            title: "Our Purpose",
            content: "Xstream Minds purpose drives everything we do, ensuring that our work has a meaningful impact on clients, communities, and the industry. It encapsulates our reason for existence and our desire to make a difference."
        },
        {
            title: "Our Core Value",
            content: "Xstream Minds core value represents the central tenet that influences all our business decisions and interactions. It defines who we are, what we stand for, and how we engage with clients and partners."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % beliefs.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + beliefs.length) % beliefs.length);
    };

    return (
        <div className="cb-beliefs-wrapper">
            <div className="cb-beliefs-card">
                <button className="cb-nav-button cb-prev" onClick={prevSlide}>
                    <ChevronLeft />
                </button>

                <div className="cb-slide-container">
                    <div className="cb-slide-content">
                        <h2 className="cb-slide-title">{beliefs[currentSlide].title}</h2>
                        <p className="cb-slide-text">
                            {beliefs[currentSlide].content}
                        </p>
                    </div>
                </div>

                <button className="cb-nav-button cb-next" onClick={nextSlide}>
                    <ChevronRight />
                </button>
            </div>

            <div className="cb-cta-button">
                <button>
                    Get Acquainted with Xstream Minds
                </button>
            </div>
        </div>
    );
};
