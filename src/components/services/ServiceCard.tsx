import React, { useState } from "react";

interface Props {
    serviceTitle: string;
    serviceImage?: string;
    serviceDescription: string;
}

export const ServiceCard = ({ serviceTitle, serviceImage, serviceDescription }: Props) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className='flip-card drop-shadow-md w-48 h-48 bg-transparent perspective-10'>
            <div
            className='flip-card-inner relative rounded-lg h-full w-full'
            onClick={() => setShowDescription(!showDescription)}>
                {/* Front of card */}
                <div className="flip-card-front bg-gray-300 absolute h-full w-full">
                    <h2 className="text-center mt-20">{serviceTitle}</h2>
                </div>
                {/* Back of card */}
                <div className='flip-card-back bg-secondary absolute w-full h-full'>
                    <p className="p-4">{serviceDescription}</p>
                </div>
            </div>
        </div>
    );
};
