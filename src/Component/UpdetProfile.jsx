"use client";

import React from "react";
import { UpdetProfileset } from "./UpdetProiple";

const ProfileSection = ({ userData }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        
        {/* Cover */}
        <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        {/* Profile Content */}
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16">
            <img
              src={userData?.image}
              alt={userData?.name}
              className="w-32 h-32 rounded-full border-4 border-white object-cover bg-gray-100"
            />

            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-gray-800">
                {userData?.name}
              </h1>

              <p className="text-gray-500 mt-1">
                {userData?.role}
              </p>

            </div>

            
            <div>
                <UpdetProfileset></UpdetProfileset>
            </div>
    
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">{userData?.email}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">
                {userData?.phone || "Not Provided"}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-700">Location</h3>
              <p className="text-gray-600">
                {userData?.location || "Not Provided"}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-700">Role</h3>
              <p className="text-gray-600">{userData?.role}</p>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6 bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold text-gray-700 mb-2">About</h3>
            <p className="text-gray-600">
              {userData?.bio || "No bio available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;