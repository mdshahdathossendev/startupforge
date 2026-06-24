"use client";

import { motion } from "framer-motion";

export default function JobCards({ opportunities = [] }) {
  const validJobs = opportunities.opportunities.filter(
    (job) =>
      job.role_title?.trim() &&
      job.required_skills?.trim() &&
      job.date?.trim()
  );

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-50 text-violet-600 text-sm font-semibold mb-4">
            💼 Open Opportunities
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Explore Startup Roles
          </h2>

          <p className="max-w-2xl mx-auto text-slate-500 text-lg">
            Find exciting opportunities from innovative startups and
            collaborate with talented founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {validJobs.map((job, index) => (
            <motion.div
              key={job._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-500"
            >
              <div className="h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500" />

              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {job.role_title}
                </h3>

                <div className="mb-4">
                  <p className="text-sm text-slate-400 mb-1">
                    Startup Name
                  </p>

                  <p className="font-semibold text-slate-800">
                    {job.startup_name || "StartupForge"}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-slate-400 mb-1">
                    Required Skills
                  </p>

                  <p className="text-slate-700 line-clamp-2">
                    {job.required_skills}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 mb-1">
                    Application Deadline
                  </p>

                  <span className="inline-flex px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium">
                    {job.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}