import React from 'react';

interface Props {
    title: string;
    content: string | JSX.Element;
    image?: string;
    backgroundColor: string;
    titleLast?: boolean;
}

export const Layout = ({ title, content, image, backgroundColor, titleLast }: Props) => {
    return (
        <section className={`flex ${titleLast ? 'flex-row-reverse' : ''} justify-start items-center gap-8 h-[80vh] ${backgroundColor} pt-8 pr-20 pl-20 `} id={title}>
            <h2 className="font-logo text-4xl w-[30vw]">
                {title}
            </h2>
            <div className="w-[70vw]">
                {content}
            </div>
        </section>
    )
}