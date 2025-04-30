import React from 'react';

const Certificate = ({ title, image, demoLink }) => {
    return (
        <div className="relative bg-[#1c1c2e] rounded-xl p-4 shadow-md max-w-l text-white group overflow-hidden">
            {/* Certificate Image */}
            <div className="relative rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="rounded-lg transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white font-medium py-2 px-4 rounded-full transition-all duration-300"
                    >
                    </a>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-4">{title}</h3>
        </div>
    );
};

export default Certificate;
