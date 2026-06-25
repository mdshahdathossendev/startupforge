'use client'
import Link from "next/link";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { Pagination } from "@heroui/react";

const Oposrsontiys = ({ data }) => {
  const alldata = data.opportunities
  const totalPages = data.totalPages
  const page = data.currentPage
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 container mx-auto mt-8">
      {alldata.map((job) => (
        <div
          key={job._id}
          className="group relative  overflow-hidden rounded-md bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >
          {/* Top Gradient */}
          <div className="h-2"></div>

          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                {job.commitment_level}
              </span>

              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <Calendar size={14} />
                {job.date}
              </div>
            </div>

            {/* Job Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
              {job.role_title}
            </h2>

            {/* Work Type */}
            <div className="flex items-center gap-2 text-gray-600 mb-5">
              <MapPin size={16} />
              <span>{job.work_type}</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {job.required_skills.split(", ").map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-600">
                <Briefcase size={16} />
                <span className="text-sm">{job.commitment_level}</span>
              </div>

              <Link
                href={`/opportunitiess/${job._id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Details →
              </Link>
            </div>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-pink-500/5 transition duration-500 pointer-events-none"></div>
        </div>
      ))}
    </div>
  <Pagination className="justify-center mt-6 flex-wrap gap-2 px-4 mx-auto">
  <Pagination.Content className="flex items-center gap-1 sm:gap-2">
    
    {/* Previous Button */}
    <Pagination.Item>
      {page === 1 ? (
        <span className="opacity-50 cursor-not-allowed flex items-center gap-1 px-3 py-2 border rounded-xl text-gray-400 text-sm">
          <Pagination.PreviousIcon />
          <span>Previous</span>
        </span>
      ) : (
        <Link href={`/opportunities?page=${page - 1}`} passHref legacyBehavior>
          <Pagination.Previous className="hover:bg-gray-100 rounded-xl text-sm transition">
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Link>
      )}
    </Pagination.Item>

    {/* Page Numbers: Hidden on mobile, visible on medium screens and up */}
    <div className="hidden md:flex items-center gap-1">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <Pagination.Item key={p}>
          <Link href={`/opportunities?page=${p}`} passHref legacyBehavior>
            <Pagination.Link
              isActive={p === page}
              className={`px-4 py-2 rounded-xl text-sm transition font-medium ${
                p === page
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {p}
            </Pagination.Link>
          </Link>
        </Pagination.Item>
      ))}
    </div>

    {/* Mobile Page Indicator (e.g., 2 / 10) */}
    <div className="md:hidden text-sm font-medium text-gray-600 px-2">
      {page} / {totalPages}
    </div>

    {/* Next Button */}
    <Pagination.Item>
      {page === totalPages ? (
        <span className="opacity-50 cursor-not-allowed flex items-center gap-1 px-3 py-2 border rounded-xl text-gray-400 text-sm">
          <span>Next</span>
          <Pagination.NextIcon />
        </span>
      ) : (
        <Link href={`/opportunities?page=${Number(page) + 1}`} passHref legacyBehavior>
          <Pagination.Next className="hover:bg-gray-100 rounded-xl text-sm transition">
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Link>
      )}
    </Pagination.Item>

  </Pagination.Content>
</Pagination>
    </>
  );
};

export default Oposrsontiys;