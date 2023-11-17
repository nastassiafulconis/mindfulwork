import React from 'react';

export const ContactForm = () => {
    return (
        <form className="flex flex-col">
            <label>Name</label>
            <input />
            <label>Email</label>
            <input />
            <label>Organization</label>
            <input />
            <label>Description</label>
            <textarea rows={5} />
            <button className='bg-default mt-4 w-24'>Send</button>
        </form>
    )
}