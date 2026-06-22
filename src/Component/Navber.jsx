import Image from "next/image";
import Link from "next/link";
import { Home, Rocket, Briefcase } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Popber from "./Popber";

export default async function Navbar() {
    const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/ChatGPT Image Jun 18, 2026, 08_40_54 AM.png"
              width={160}
              height={160}
              alt="logo"
            />
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">

            <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition">
              <Home size={18} />
              Home
            </Link>

            <Link href="/startups" className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition">
              <Rocket size={18} />
              Startups
            </Link>

            <Link href="/opportunities" className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition">
              <Briefcase size={18} />
              Opportunities
            </Link>

          </div>

          {/* Buttons */}
          {session ? (
          <div className="">
          <Popber></Popber>
          </div>
        ) : (

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="px-5 py-2 border rounded-xl hover:bg-gray-100 transition"
            >
              Login
            </Link>

            <Link
              href="/sinin"
              className="px-5 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition"
            >
              Get Started
            </Link>
          </div>
        )}

        </div>
      </div>
    </nav>
  );
}