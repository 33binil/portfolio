// src/components/CardProjects.jsx
import React from 'react';
import Certificate from "./Certificate.jsx";

const projects = [
    {
        title: "BCA",
        image: "/img/certificate1.jpeg",
    },
    {
        title: "UI / UX Design",
        image: "/img/certificate2.jpeg",
    }
];

const Certificates = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
            {projects.map((project, index) => (
                <Certificate key={index} {...project} />
            ))}
        </div>
    );
};

export default Certificates;
