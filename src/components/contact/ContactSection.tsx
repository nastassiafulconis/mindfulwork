import React from 'react';
import { Layout } from '../general-components/Layout';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
    return (
        <Layout title='Contact' content={<ContactForm/>} backgroundColor='bg-secondary'/>
    )
}