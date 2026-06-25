'use client';

import Image from "next/image";
import { Mail, Building2, Layers, User } from "lucide-react";

const StartupDetails = ({ data }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">

          {/* Hero Section */}
          <div className="relative">
            <div className="h-[280px] bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center px-6">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                  {data?.startup_name}
                </h1>

                <p className="mt-3 text-lg opacity-90">
                  {data?.industry}
                </p>

              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="-mt-16 relative z-10 flex justify-center">
            <div className="bg-white p-2 rounded-[30px] shadow-2xl">
              <Image
                src={data?.logo || "/default.png"}
                alt={data?.startup_name}
                width={140}
                height={140}
                className="w-36 h-36 rounded-3xl object-cover"
              />
            </div>
          </div>

          <div className="p-8 md:p-10">

            {/* Startup Name */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">
                {data?.startup_name}
              </h2>

              <p className="text-slate-500 mt-2">
                Building the future with innovation
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <Building2
                  size={38}
                  className="text-blue-600 mb-4"
                />

                <p className="text-slate-500 text-sm">
                  Industry
                </p>

                <h3 className="font-bold text-xl mt-2 text-slate-800">
                  {data?.industry}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <Layers
                  size={38}
                  className="text-purple-600 mb-4"
                />

                <p className="text-slate-500 text-sm">
                  Funding Stage
                </p>

                <h3 className="font-bold text-xl mt-2 text-slate-800">
                  {data?.funding_stage}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <User
                  size={38}
                  className="text-green-600 mb-4"
                />

                <p className="text-slate-500 text-sm">
                  Founder
                </p>

                <h3 className="font-bold text-xl mt-2 text-slate-800">
                  {data?.founder_name}
                </h3>
              </div>

            </div>

            {/* About Section */}
            <div className="mt-10 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                About Startup
              </h2>

              <p className="text-slate-600 leading-8">
                {data?.description}
              </p>

            </div>

            {/* Founder Email */}
            <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl p-8 shadow-xl">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Mail size={28} className="text-white" />
                </div>

                <div>
                  <p className="text-slate-300 text-sm">
                    Founder Email
                  </p>

                  <p className="text-white font-semibold text-lg break-all">
                    {data?.founder_email}
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDetails;