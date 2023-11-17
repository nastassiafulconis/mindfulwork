'use client';
import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServiceCards = () => {
    const services = [
        {
            serviceTitle: "Anti-Harassment",
            serviceDescription: "Organization wide training to deal with sensitivity for sexual harassment. This in-depth training will engage all members of the org..."
        },
        {
            serviceTitle: "Diversity & Inclusion",
            serviceDescription: "Sensitivity training to raise awareness for different kinds of discrimination and how they arise."
        },
        {
            serviceTitle: "Situation Management",
            serviceDescription: "Dealing with tense situations in the workplace and diffusing workplace tension."
        }
    ]

    return (
        <div className="flex gap-8 justify-evenly w-full">
            {services.map((service, key) => {
                return (
                    <div key={key}>
                        <ServiceCard serviceTitle={service.serviceTitle} serviceDescription={service.serviceDescription} />
                    </div>
                )
            })}
        </div>
    )
}