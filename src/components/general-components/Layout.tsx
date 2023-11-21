import React, { useRef } from 'react';
import { useIsVisible } from '../../../utility/isVisible';

interface Props {
    title: string;
    content: string | JSX.Element;
    image?: string;
    backgroundColor: string;
    titleLast?: boolean;
}

export const Layout = ({ title, content, image, backgroundColor, titleLast }: Props) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const titleIsVisible = useIsVisible(titleRef);

    const contentRef = useRef<HTMLDivElement>(null);
    const textIsVisisble = useIsVisible(contentRef);

    return (
        <section className={`flex ${titleLast ? 'flex-row-reverse' : ''} justify-start items-center gap-8 h-[80vh] ${backgroundColor} pt-8 pr-20 pl-20 `} id={title}>
            <h2 ref={titleRef} className={`font-logo text-4xl w-[30vw] animate-in slide-in-from-${titleLast ? 'right' : 'left'} duration-700 ${titleIsVisible ? 'running' : 'paused'}`}>
                {title}
            </h2>
            <div ref={contentRef} className={`w-[70vw] animate-in slide-in-from-${titleLast ? 'left' : 'right'} duration-700 ${titleIsVisible ? 'running' : 'paused'}`}>
                {content}
            </div>
        </section>
    )
}