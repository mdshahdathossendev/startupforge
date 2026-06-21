"use client";

import { motion } from "framer-motion";

export default function SuccessStories() {
  const stories = [
    {
      name: "Sarah Ahmed",
      role: "Frontend Developer",
      company: "TechNova",
      story:
        "Started as an intern and became a full-time developer in just 6 months.",
    },
    {
      name: "Rahim Khan",
      role: "UI/UX Designer",
      company: "CreativeHub",
      story:
        "Built an amazing portfolio through startup collaborations and landed his dream job.",
    },
    {
      name: "Nusrat Jahan",
      role: "Product Manager",
      company: "InnovateX",
      story:
        "Connected with founders and grew into a successful product manager.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Success Stories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-lg max-w-2xl mx-auto text-blue-100"
        >
          Discover how talented people transformed their careers through
          StartupForge.
        </motion.p>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "500+", label: "Success Stories" },
            { value: "10K+", label: "Members" },
            { value: "92%", label: "Growth Rate" },
            { value: "150+", label: "Startups" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <h2 className="text-3xl font-bold text-indigo-600">
                {item.value}
              </h2>
              <p className="text-gray-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl p-6 shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-600 mb-4">
                {story.name.charAt(0)}
              </div>

              <h3 className="text-xl font-bold">
                {story.name}
              </h3>

              <p className="text-indigo-600 font-medium">
                {story.role}
              </p>

              <p className="text-sm text-gray-500">
                {story.company}
              </p>

              <p className="mt-4 text-gray-600">
                {story.story}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Create Your Own Success Story?
          </h2>

          <p className="text-gray-500 mt-3">
            Join StartupForge today and connect with exciting opportunities.
          </p>

          <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
}