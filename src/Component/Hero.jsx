"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden bg-slate-50/50">
      {/* Modern Background Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative max-w-4xl text-center z-10">
        {/* Feature Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100 text-blue-700 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 text-sm font-medium shadow-sm"
        >
          <Rocket className="w-4 h-4 text-blue-600 animate-pulse" /> 
          <span>The Startup Team Building Platform</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
        >
          Build Your Future <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Startup Team
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Connect with top tier companies, discover exciting co-founder opportunities, 
          and build the next big thing together.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link href="/opportunities" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
              Explore Opportunities
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          
          <Link href="/startups" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
              View Startups
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}