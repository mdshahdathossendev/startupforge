'use client'
import { createStartups } from '@/lib/action';
import { useRouter } from 'next/navigation';
import React from 'react';

const AddOporsontiy = ({data}) => {
     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = {
      startup_id: data._id,
      startup_name: data.startup_name,
      role_title: formData.get("role_title"),
      required_skills: formData.get("required_skills"),
      work_type: formData.get("work_type"),
      commitment_level: formData.get("commitment_level"),
      date: formData.get("deadline"),
    };
    createStartups(userData)
   window.location.reload()
} 
    return (
         <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold mb-6">
        Create Opportunity
      </h2>

      <form onSubmit={onSubmit} className="space-y-5">
    
        {/* Role Title */}
        <div>
          <label className="block mb-2 font-medium">
            Role Title
          </label>
          <input
            type="text"
            name="role_title"
            placeholder="Frontend Developer"
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        {/* Required Skills */}
       <div className="flex gap-4"> 
         <div className="w-full">
          <label className="block mb-2 font-medium">
            Required Skills
          </label>
          <input
            type="text"
            name="required_skills"
            placeholder="React, Next.js, Tailwind CSS"
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        {/* Work Type */}
        <div className="w-full">
          <label className="block mb-2 font-medium">
            Work Type
          </label>
          <select
            name="work_type"
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="">Select Work Type</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

       </div>
        {/* Commitment Level */}
        <div className="flex gap-4">
            <div className="w-full">
          <label className="block mb-2 font-medium">
            Commitment Level
          </label>
          <select
            name="commitment_level"
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="">Select Commitment</option>
            <option value="Part-time">Part-time</option>
            <option value="Full-time">Full-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Deadline */}
        <div className="w-full">
          <label className="block mb-2 font-medium">
            Application Deadline
          </label>
          <input
            type="date"
            name="deadline"
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold"
        >
          Create Opportunity
        </button>
      </form>
    </div>
    );
};

export default AddOporsontiy;