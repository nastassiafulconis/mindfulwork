import React from "react";
import { Logo } from "../Logo";

export const HomePage = () => {
    return (
        <section className="flex flex-col justify-center">
            <Logo logoSize="text-5xl" />
            {/* Image here */}
                <div className="h-[40vh] mr-[20vw] ml-[20vw] bg-gray-300 rounded-lg mt-20 text-center">

                </div>
        </section>
    );
};
