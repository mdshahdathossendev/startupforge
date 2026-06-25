"use client";

import { motion } from "framer-motion";

export default function Daynamic1({ startup }) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            🚀 Featured Startups
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Innovative Startups
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            Connect with visionary founders and explore innovative
            startups across multiple industries shaping the future.
          </p>
        </div>

        {/* Startup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {startup?.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Gradient Top Border */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

              {/* Background Number */}
              <div className="absolute right-4 top-4 text-7xl font-black text-slate-100 group-hover:text-blue-50 transition-all duration-500">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="p-7 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 pr-10">
                  {item.startup_name}
                </h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">
                      Founder Name
                    </p>

                    <p className="font-semibold text-slate-800 text-lg">
                      {item.founder_name}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400 mb-2">
                      Industry
                    </p>

                    <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                      {item.industry}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-pink-500/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}