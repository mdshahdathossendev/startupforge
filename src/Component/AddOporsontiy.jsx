'use client'
import { createStartups } from '@/lib/action';
import { CustomToast } from '@/lib/coustomtost';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const AddOporsontiy = ({ data }) => {
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();
  if (data?.stats !== "Approved") {
    alert("Your startup is not approved yet!");
    return;
  }
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

   
      await createStartups(userData);

      setShowToast(true);
      setTimeout(() => {
    setShowToast(false);
  }, 3000);
    router.refresh()
  };

  return (
    <>
      {showToast && (
        <CustomToast
          message="Oporsontiy Added successfully!"
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">
          Create Opportunity
        </h2>

        <form onSubmit={onSubmit} className="space-y-5">

          {/* Role Title */}
          <div>
            <label className="block mb-2 font-medium">Role Title</label>
            <input
              type="text"
              name="role_title"
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Frontend Developer"
            />
          </div>

          {/* Required Skills + Work Type */}
          <div className="flex gap-4">
            <input
              type="text"
              name="required_skills"
              placeholder="React, Next.js"
              className="w-full border rounded-xl px-4 py-3"
            />

            <select
              name="work_type"
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="">Work Type</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Commitment + Deadline */}
          <div className="flex gap-4">
            <select
              name="commitment_level"
              className="w-full border rounded-xl px-4 py-3"
            >
              <option>Commitment</option>
              <option>Part-time</option>
              <option>Full-time</option>
              <option>Internship</option>
            </select>

            <input
              type="date"
              name="deadline"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold"
          >
            Create Opportunity
          </button>

        </form>
      </div>
    </>
  );
};

export default AddOporsontiy;