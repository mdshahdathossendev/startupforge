import Navbar from '@/Component/Navber';
import { Inter } from 'next/font/google';
import React from 'react';
const inter = Inter({
  subsets: ["latin"],
});
const layout = ({ children }) => {
    return (
        <div className={inter.className}>
            <Navbar></Navbar>
            { children }
        </div>
    );
};

export default layout;