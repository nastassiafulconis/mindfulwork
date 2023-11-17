import React from "react";

interface Props {
    logoSize?: string;
}

export const Logo = ({ logoSize }: Props) => {
    return (
        <div className={`flex text-center justify-center items-center font-bold font-logo ${logoSize || "text-base"}`}>
            <span>Mindful</span>
            <span>
                <i>Work</i>
            </span>
        </div>
    );
};
