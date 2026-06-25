"use client";

import React from "react";
import { UpdetProfileset } from "./UpdetProiple";

const ProfileSection = ({ userData }) => {

  const hasValue = (value) => value && value.toString().trim() !== "";

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* Cover */}
        <div className="h-40 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8"></div>

        {/* Profile Header */}
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16">

            {/* Image */}
            <img
              src={userData?.image}
              alt={userData?.name}
              className="w-32 h-32 rounded-full border-4 border-white object-cover bg-gray-100"
            />

            {/* Name */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-gray-800">
                {userData?.name}
              </h1>

              <p className="text-gray-500 mt-1">
                {userData?.role}
              </p>
            </div>

            {/* Edit Button */}
            <div>
              <UpdetProfileset />
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-5 mt-8">

            {/* Email (always show) */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">{userData?.email}</p>
            </div>

            {/* Role (always show) */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-700">Role</h3>
              <p className="text-gray-600">{userData?.role}</p>
            </div>

            {/* Location */}
            {hasValue(userData?.location) && (
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-700">Location</h3>
                <p className="text-gray-600">{userData.location}</p>
              </div>
            )}

            {/* Phone */}
            {hasValue(userData?.phone) && (
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">{userData.phone}</p>
              </div>
            )}

          </div>

          {/* Bio + Skill */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">

            {/* Bio */}
            {hasValue(userData?.bio) && (
              <div className="bg-gray-50 p-4 rounded-xl w-full">
                <h3 className="font-semibold text-gray-700 mb-2">About</h3>
                <p className="text-gray-600">{userData.bio}</p>
              </div>
            )}

            {/* Skill */}
            {hasValue(userData?.skill) && (
              <div className="bg-gray-50 p-4 rounded-xl w-full">
                <h3 className="font-semibold text-gray-700 mb-2">Skill</h3>
                <p className="text-gray-600">{userData.skill}</p>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileSection;