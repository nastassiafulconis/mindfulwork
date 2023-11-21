import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export const HomeMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('click', function(e: MouseEvent){
            // If we clicked outside of our menu and its open, close the menu
            if (!document.getElementById('home-menu')?.contains(e.target as Node) && menuOpen) {
                setMenuOpen(false);
            }
        });
    })


    const handleMenuClick = (item: string) => {
        // scroll to item
        const element = document.getElementById(item);

        setTimeout(() => {
            window.scrollTo({
                top: (element?.offsetTop || 0) - 100,
                behavior: "smooth",
            });
        })
        setMenuOpen(false);
    };

    return (
        <div className="relative inline-block text-left" id='home-menu'>
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-center outline-none gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setMenuOpen(!menuOpen)}
                    onMouseEnter={() => setMenuOpen(true)}
                >
                    <CiMenuBurger className='hover:text-white'/>
                </button>
            </div>

            {menuOpen && <div
                className="absolute right-0 z-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
                onMouseLeave={() => setMenuOpen(false)}
            >
                <div onClick={() => handleMenuClick('About')} className="py-1 hover:bg-gray-50 rounded-md" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
                        About
                    </a>
                </div>
                <div onClick={() => handleMenuClick('Services')} className="py-1 hover:bg-gray-50" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">
                        Services
                    </a>
                </div>
                <div onClick={() => handleMenuClick('Contact')} className="py-1 hover:bg-gray-50 rounded-md" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-4">
                        Contact
                    </a>
                </div>
            </div>}
        </div>
    );
};
