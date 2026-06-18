import Navbar from "@/Component/Navber";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100`}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;