'use client';

import Startup from "@/Component/Startup";
import { createOpportunity } from "@/lib/action";
import { authClient } from "@/lib/auth-client";
import { getDashboardStats } from "@/lib/data";
import Image from "next/image";
import {useEffect, useState } from "react";

export default function StartupForm() {
     const { data: session } = authClient.useSession();
    const [data, setData] = useState([]);
    const email = session?.user?.email;
    const name = session?.user?.name
     const token = session?.user?.token
     
useEffect(() => {
  if (!email) return;
  getDashboardStats(email)
    .then((res) => setData(res))
    .catch((err) => console.error(err));
}, [email, token]);

    
    const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = {
      startup_name: formData.get("startup_name"),
      industry: formData.get("industry"),
      funding_stage: formData.get("funding_stage"),
      founder_email: email,
      founder_name: name,
      description: formData.get("description"),
      temmumber: formData.get("temmumber"),
      logo: imageUrl,
      stats: "Pending",
    };
    createOpportunity(userData)
     window.location.reload();
}
     const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
     const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setImageUrl(data.data.url);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
        { data.length === 0 ? (
   <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">Create Startup</h1>

        <form onSubmit={onSubmit} className="space-y-5">
          {/* Startup Name */}
          <div>
            <label className="block mb-2 font-medium">
              Startup Name
            </label>
            <input
              type="text"
              name="startup_name"
              placeholder="Enter startup name"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Logo */}
         <div className="flex gap-4">
    <div>
         <label className="block mb-2 font-medium">
             Upload Logo
            </label>
      <input className="border p-3 rounded-lg"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />

      {loading && <p>Uploading...</p>}

      {imageUrl && (
        <Image width={200}
        height={200}
          src={imageUrl}
          alt="Uploaded"
          className="w-32 h-32 object-cover rounded-lg mt-4"
        />
      )}
    </div>
          {/* Industry */}
          <div className="w-full">
            <label className="block mb-2 font-medium">
              Industry
            </label>
            <input
              type="text"
              name="industry"
              placeholder="Technology"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          {/* <div className="w-full">
            <label className="block mb-2 font-medium">
              Needed Temmumber
            </label>
            <input
              type="number"
              name="temmumber"
              placeholder="Temmumber"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div> */}
         </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>
            <textarea
              rows="3"
              name="description"
              placeholder="Describe your startup..."
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Funding Stage */}
          <div>
            <label className="block mb-2 font-medium">
              Funding Stage
            </label>
            <select
              name="funding_stage"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Funding Stage</option>
              <option value="Bootstrapped">Bootstrapped</option>
              <option value="Pre-Seed">Pre-Seed</option>
              <option value="Seed">Seed</option>
              <option value="Series A">Series A</option>
              <option value="Series B">Series B</option>
            </select>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-xl font-semibold hover:bg-amber-600 transition"
          >
            Create Startup
          </button>
        </form>
      </div>
    </div>
) : (
 <Startup data = {data}></Startup>
)}
    </div>
   
  );
}