'use client'
import React from 'react';
import { Calendar} from "lucide-react";
import { authClient } from '@/lib/auth-client';
import { createApplication } from '@/lib/action';
import { redirect, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
const OporsontiyDetles = ({job, data}) => {
  const router = useRouter()
    const { data: session } = authClient.useSession();
      const email = session?.user?.email;
      const id = session?.user?.id;
     const planLimits = {
      Free : 3,
      Pro: 15
     }
     
    const handleApply = async(e) => {
    e.preventDefault();
     const limit = planLimits[session?.user?.plan]
 
     if(data.length >= limit){
      redirect('/payment')
     }
  
     if (session?.user?.role !== "Collaborator") {
    alert("Only Collaborators can apply for opportunities.");
    return;
  }
     const formData = new FormData(e.currentTarget);

    const userData = {
      opportunity_id: job.startup_id,
      job_title: job.role_title,
      motivation: formData.get("motivation"),
      portfolio_link: formData.get("portfolio_link"),
      applicant_email: email,
      status: 'Pending',
      applicant_id: id,
      startup_name: job.startup_name,
      applied_at: new Date()
    };
  
   createApplication(userData);
   router.refresh()
   redirect('/succes')
  

    }
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

    {/* Left Side - Opportunity */}
    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="h-3 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"></div>

      <div className="p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
            {job.commitment_level}
          </span>

          <div className="flex items-center gap-2 text-gray-500">
            <Calendar size={18} />
            {job.date}
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {job.role_title}
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500">Work Type</p>
            <p className="font-semibold">{job.work_type}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500">
              Commitment Level
            </p>
            <p className="font-semibold">
              {job.commitment_level}
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">
          Required Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {job.required_skills.split(", ").map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Right Side - Applicant Info */}
   <div className="bg-white rounded-3xl shadow-xl p-6 h-fit sticky top-6">
  <h2 className="text-2xl font-bold mb-6">
    Apply for this Opportunity
  </h2>

  <form onSubmit={handleApply} className="space-y-5">

    {/* Portfolio Link */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Portfolio Link
      </label>

      <input
        required
        type="url"
        name="portfolio_link"
        placeholder="https://yourportfolio.com"
        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Motivation */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Motivation
      </label>

      <textarea
       required
        name="motivation"
        rows="5"
        placeholder="Why are you interested in this opportunity?"
        className="w-full p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition"
    >
      Apply Now
    </button>

  </form>
</div>
</div>
</div>
    );
};

export default OporsontiyDetles;