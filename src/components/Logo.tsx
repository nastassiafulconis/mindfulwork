import React from "react";

interface Props {
    logoSize?: string;
    animate?: boolean;
}

export const Logo = ({ logoSize, animate }: Props) => {
    return (
        <div className={`flex text-center justify-center items-center font-bold font-logo ${logoSize || "text-base"}`}>
            <span className={animate ? "animate-in slide-in-from-left duration-700" : ''}>Mindful</span>
            <span className={animate ? "animate-in slide-in-from-right duration-700" : ''}>
                <i>Work</i>
            </span>
        </div>
    );
};
