import React, { useState } from 'react';

interface Props {
    serviceTitle: string;
    serviceImage?: string;
    serviceDescription: string;
}

export const ServiceCard = ({ serviceTitle, serviceImage, serviceDescription }: Props) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className='bg-gray-300 rounded-lg h-48 w-48 flex justify-center items-center cursor-pointer' onClick={() => setShowDescription(!showDescription)}>
            {/* Front of card */}
            <div className={!showDescription ? '' : 'hidden'}>
                <h2 className='text-center'>{serviceTitle}</h2>
            </div>
            {/* Back of card */}
            <div className={showDescription ? '' : 'hidden'}>
                <p className='p-4'>{serviceDescription}</p>
            </div>
        </div>
    )
}