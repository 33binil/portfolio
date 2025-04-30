// src/components/CardProjects.jsx
import React from 'react';
import CardProject from './CardProject';

const projects = [

    {
        title: "Weather App",
        description: "A real-time weather app built with HTML, Tailwind CSS, and JavaScript. It fetches data from Tomorrow.io API to display weather conditions like temperature, humidity, and wind speed, with a dark-themed, responsive design.",
        image: "/img/weather.png",
        demoLink: "https://weather-app-coral-seven-64.vercel.app/",
        detailsLink: "https://github.com/33binil/Weather-App"
    },
    {
        title: "QR Code Generator",
        description: "A simple web app that allows users to generate QR codes for any text, URL, or contact information. Built with HTML, CSS, and JavaScript, the app offers a user-friendly interface and instantly generates scannable QR codes, making it easy to share links and data.",
        image: "/img/QR generator.png",
        demoLink: "https://qr-generator-beta-dusky.vercel.app/",
        detailsLink: "https://github.com/33binil/QR-Generator"
    },
    {
        title: "Internship Web Design",
        description: "Gained hands-on experience in designing responsive and user-friendly websites using HTML, CSS, and JavaScript. Worked on real-world projects, improving UI/UX skills and understanding of modern web design principles.",
        image: "/img/internship.png",
        demoLink: "https://internship-web-design.vercel.app/",
        detailsLink: "https://github.com/33binil/internship-web-design"
    },
    {
        title: "Pixel Junkie Creative Studio",
        description: "My first freelance project—a professional portfolio site for Pixel Junkie Creative Studio, built using React and Tailwind CSS. The site highlights creative services like branding, web development, and digital marketing with a modern, responsive design, smooth animations, and a user-friendly layout.",
        image: "/img/pixeljunkie.png",
        demoLink: "https://pixeljunkiestudio.in",
        detailsLink: "https://github.com/33binil/Pixel-Junkie-Creative-Studios"
    }
];

const CardProjects = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
            {projects.map((project, index) => (
                <CardProject key={index} {...project} />
            ))}
        </div>


    );
};



export default CardProjects;
