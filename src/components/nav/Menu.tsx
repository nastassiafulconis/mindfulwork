import { Dropdown, MenuButton, MenuItem, Menu } from "@mui/base";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export const HomeMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = (item: string) => {
        // scroll to item
        const element = document.getElementById(item);
        window.scrollTo({
            top: (element?.offsetTop || 0) - 100,
            behavior: "smooth",
        });
    };

    return (
        <Dropdown>
            <MenuButton>
                <CiMenuBurger className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
            </MenuButton>
            <Menu className="pr-4">
                <MenuItem onClick={() => handleMenuClick("About")}>About</MenuItem>
                <MenuItem onClick={() => handleMenuClick("Services")}>Services</MenuItem>
                <MenuItem onClick={() => handleMenuClick("Contact")}>Contact</MenuItem>
            </Menu>
        </Dropdown>
    );
};
