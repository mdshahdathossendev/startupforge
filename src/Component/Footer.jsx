"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px]" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              StartupForge
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Connecting ambitious founders, talented collaborators,
              and innovative startups to build the future together.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Platform
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/startups" className="hover:text-white transition">
                  Browse Startups
                </Link>
              </li>

              <li>
                <Link href="/jobs" className="hover:text-white transition">
                  Open Opportunities
                </Link>
              </li>

              <li>
                <Link href="/founders" className="hover:text-white transition">
                  Founders
                </Link>
              </li>

              <li>
                <Link href="/community" className="hover:text-white transition">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Stay Connected
            </h3>

            <div className="flex items-center gap-3 text-slate-400 mb-5">
              <Mail size={18} />
              <span>support@startupforge.com</span>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-xl bg-slate-900 hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
              >
              </a>

              <a
                href="#"
                className="p-3 rounded-xl bg-slate-900 hover:bg-sky-500 transition-all duration-300 hover:-translate-y-1"
              >
                
              </a>

              <a
                href="#"
                className="p-3 rounded-xl bg-slate-900 hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
               
              </a>

              <a
                href="#"
                className="p-3 rounded-xl bg-slate-900 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
              >
                
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 StartupForge. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>

            <Link href="/cookies" className="hover:text-white transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}