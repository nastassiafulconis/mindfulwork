'use client'

import React from 'react';
import { HomeMenu } from './Menu';
import { Logo } from '../Logo';

export const NavBar = () => {
    return (
        <div className="flex justify-between sticky top-0 p-4 backdrop-blur-sm">
            <Logo />
            <HomeMenu />
        </div>
    )
}