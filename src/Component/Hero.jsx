"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        {/* Title */}
        <p className="bg-blue-100 text-blue-800 max-w-fit mx-auto px-8 p-1 rounded-full mb-2 flex gap-2"><Rocket></Rocket> The Startup Tem Buldding Platfrom</p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Build Your Future <br />
          <span className="text-blue-600">Startup Team</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Connect with top companies, discover exciting opportunities,
          and take the next step in your career journey.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5"
        >
          <div className="flex justify-center gap-8">
            <button className="px-4 p-2 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:scale-105 hover:transition-all duration-300">
            Explore Opportunities
          </button>
            <button className="px-4 p-2 border border-blue-400 text-blue-500 rounded-xl font-semibold text-lg  hover:scale-105 hover: transition-all duration-300">
            Startups
          </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}