import Footer from "@/Component/Footer";
import Navbar from "@/Component/Navber";
import { auth } from "@/lib/auth";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
});

const Layout = async({ children }) => {
  return (
    <div
      className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100`}
    >
      <Navbar />
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;