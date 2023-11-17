import React from 'react';
import { Layout } from '../general-components/Layout';
import { ServiceCards } from './ServiceCards';

export const ServicesSection = () => {
    return (
        <Layout title='Services' content={<ServiceCards />} titleLast backgroundColor='bg-default'/>
    )
}