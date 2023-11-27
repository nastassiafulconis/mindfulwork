import React, { useState } from 'react';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [organization, setOrganization] = useState('');
    const [message, setMessage] = useState('');

    /**
     * @description Validates an email before adding it to state
     * @param email {string} The email of the user
     */
    const validateEmail = (email: string) => {
        setEmail(email);

        if ((/^\S+@\S+\.\S+$/).test(email)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    }

    /**
     * @description Sends the email
     * @param e {MouseEvent} Used to prevent default behavior from send button
     */
    const sendEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        // TODO: Send email!
    }

    return (
        <form className="flex flex-col">
            <label>Name</label>
            <input className='p-4 rounded-md focus:bg-slate-200 outline-none' value={name} onChange={(e) => setName(e.target.value)}/>
            <label className='mt-4'>Email</label>
            <input className='p-4 rounded-md focus:bg-slate-200 outline-none' value={email} onChange={(e) => validateEmail(e.target.value)}/>
            {(email && !validEmail) && <span className='text-orange-700'>Please input a valid email.</span>}
            <label className='mt-4'>Organization</label>
            <input className='p-4 rounded-md focus:bg-slate-200 outline-none' value={organization} onChange={(e) => setOrganization(e.target.value)}/>
            <label className='mt-4'>Message</label>
            <textarea className='p-4 rounded-md focus:bg-slate-200 outline-none max-h-48' rows={5} maxLength={200} value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button disabled={!validEmail} onClick={sendEmail} className={`bg-default mt-4 w-24 p-4 rounded-md ${!validEmail ? 'cursor-not-allowed' : 'cursor-pointer' }`}>Send</button>
        </form>
    )
}