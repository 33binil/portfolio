// src/components/CardProject.jsx
import React from 'react';

const CardProject = ({ title, description, image, demoLink, detailsLink }) => {
    return (
        <div className="bg-[#1c1c2e] rounded-xl p-4 shadow-md max-w-l text-white">
            <img src={image} alt={title} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-300 mb-4">{description}</p>
            <div className="flex justify-between text-sm">
                <a href={demoLink} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={detailsLink} className="text-gray-300 hover:underline" target="_blank" rel="noopener noreferrer">Details</a>
            </div>
        </div>
    );
};

export default CardProject;
