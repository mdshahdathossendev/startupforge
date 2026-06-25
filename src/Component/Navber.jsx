import Image from "next/image";
import Link from "next/link";
import { Home, Rocket, Briefcase, Menu } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Popber from "./Popber";

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/startups", label: "Startups", icon: Rocket },
    { href: "/opportunities", label: "Opportunities", icon: Briefcase },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 relative">

          {/* ========================================== */}
          {/* MOBILE: LEFT SIDE - HAMBURGER MENU (ডেস্কটপে হাইড) */}
          {/* ========================================== */}
          <div className="md:hidden group relative">
            <button 
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition focus:outline-none"
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>

            {/* মোবাইল ড্রপডাউন মেনু */}
            <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 hidden group-focus-within:block group-hover:block transition-all animate-in fade-in slide-in-from-top-5 duration-200">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
                  >
                    <Icon size={18} />
                    <span className="font-medium text-sm">{link.label}</span>
                  </Link>
                );
              })}
              
              {/* লগইন না থাকলে মোবাইলের ড্রপডাউনের ভেতরে বাটন */}
              {!session && (
                <div className="border-t border-gray-100 mt-2 pt-2 px-2 space-y-1">
                  <Link
                    href="/login"
                    className="block w-full text-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/sinin"
                    className="block w-full text-center px-4 py-2 text-sm font-medium bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* ========================================== */}
          {/* LOGO: MOBILE CENTER / DESKTOP LEFT */}
          {/* ========================================== */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex-shrink-0">
            <Link href="/">
              <Image
                src="/ChatGPT Image Jun 18, 2026, 08_40_54 AM.png"
                width={140}
                height={140}
                className="w-28 sm:w-36 md:w-40 h-auto object-contain"
                alt="logo"
                priority
              />
            </Link>
          </div>

          {/* ========================================== */}
          {/* DESKTOP LINKS: CENTER (মোবাইলে হাইড) */}
          {/* ========================================== */}
          <div className="hidden md:flex items-center gap-8 font-medium mx-auto">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition"
                >
                  <Icon size={18} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* ========================================== */}
          {/* RIGHT SIDE: PROFILE IMAGE (POPBER) / AUTH BUTTONS */}
          {/* ========================================== */}
          <div className="flex items-center gap-4 z-10">
            {session ? (
              <Popber />
            ) : (
              // ডেস্কটপের জন্য নরমাল বাটন (মোবাইলে এটি হাইড হয়ে বামের হ্যামবার্গার ড্রপডাউনে চলে গেছে)
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium border rounded-xl hover:bg-gray-100 transition"
                >
                  Login
                </Link>
                <Link
                  href="/sinin"
                  className="px-4 py-2 text-sm font-medium bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}