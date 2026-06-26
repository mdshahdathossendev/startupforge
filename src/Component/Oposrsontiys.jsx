'use client'
import Link from "next/link";
import { Briefcase, Calendar, MapPin, Search, SlidersHorizontal, Clock } from "lucide-react";
import { useState } from "react";
import { Pagination } from "@heroui/react";

const Opportunities = ({ data }) => {
  // Safe Fallbacks
  const alldata = data?.opportunities || [];
  const totalPages = data?.totalPages || 1;
  const page = data?.currentPage || 1;

  // Filter States
  const [searchTitle, setSearchTitle] = useState("");
  const [searchSkill, setSearchSkill] = useState("");
  const [selectedWorkType, setSelectedWorkType] = useState("");
  const [selectedCommitment, setSelectedCommitment] = useState("");

  // Combined Filtering Engine
  const filteredData = alldata.filter((job) => {
    // 1. Role Title Search
    const matchesTitle = job.role_title
      ?.toLowerCase()
      .includes(searchTitle.toLowerCase());
    
    // 2. Required Skills Search
    const matchesSkill = job.required_skills
      ?.toLowerCase()
      .includes(searchSkill.toLowerCase());

    // 3. Work Type Mapping (Handles matching normalized keys)
    let matchesWorkType = true;
    if (selectedWorkType !== "") {
      const jobWorkType = job.work_type?.toLowerCase() || "";
      matchesWorkType = jobWorkType.includes(selectedWorkType);
    }

    // 4. Commitment Level Mapping
    let matchesCommitment = true;
    if (selectedCommitment !== "") {
      const jobCommitment = job.commitment_level?.toLowerCase() || "";
      matchesCommitment = jobCommitment.includes(selectedCommitment);
    }

    return matchesTitle && matchesSkill && matchesWorkType && matchesCommitment;
  });

  // Track if user is actively searching/filtering
  const isFilteringActive = searchTitle !== "" || searchSkill !== "" || selectedWorkType !== "" || selectedCommitment !== "";

  return (
    <>
      {/* Control Filters Panel */}
      <div className="container mx-auto mt-8 px-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
          
          {/* Top Row: Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by Role Title..."
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 transition"
              />
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by Required Skills (e.g., React)..."
                value={searchSkill}
                onChange={(e) => setSearchSkill(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 transition"
              />
            </div>
          </div>

          {/* Bottom Row: Selection Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-gray-100">
            
            {/* Work Type Selection */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={16} className="text-gray-400 shrink-0" />
              <select
                value={selectedWorkType}
                onChange={(e) => setSelectedWorkType(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 transition cursor-pointer"
              >
                <option value="">All Work Types</option>
                <option value="remote">Remote</option>
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            {/* Commitment Level Selection */}
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gray-400 shrink-0" />
              <select
                value={selectedCommitment}
                onChange={(e) => setSelectedCommitment(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 transition cursor-pointer"
              >
                <option value="">All Commitment Levels</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="internship">Internship</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      {/* Main Grid View */}
      {filteredData.length === 0 ? (
        <div className="text-center my-16 text-gray-500">
          <p className="text-lg font-medium">No opportunities match your options</p>
          <p className="text-sm text-gray-400 mt-1">Try resetting your status drop-downs or text boxes.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 container mx-auto mt-8 px-4">
          {filteredData.map((job) => (
            <div
              key={job._id}
              className="group relative overflow-hidden rounded-md bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="h-2"></div>

              <div className="p-6">
                {/* Badge Context Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 capitalize">
                    {job.commitment_level}
                  </span>

                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    {job.date}
                  </div>
                </div>

                {/* Job Title Display */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {job.role_title}
                </h2>

                {/* Workplace Info */}
                <div className="flex flex-col gap-2 mb-5 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="capitalize">{job.work_type}</span>
                  </div>
                </div>

                {/* Dynamic Skills Mapping */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.required_skills?.split(", ").map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer Link Navigation Elements */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase size={16} />
                    <span className="text-sm capitalize">{job.commitment_level}</span>
                  </div>

                  <Link
                    href={`/opportunitiess/${job._id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Details →
                  </Link>
                </div>
              </div>

              {/* Hover Translucent Visual Filter Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-pink-500/5 transition duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Module Control System */}
      {!isFilteringActive && (
        <Pagination className="justify-center mt-6 flex-wrap gap-2 px-4 mx-auto">
          <Pagination.Content className="flex items-center gap-1 sm:gap-2">
            
            {/* Back Arrow Key Button */}
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

            {/* Desktop Full Numeric Node Maps */}
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

            {/* Compact Mobile Count Tracking Index Component */}
            <div className="md:hidden text-sm font-medium text-gray-600 px-2">
              {page} / {totalPages}
            </div>

            {/* Forward Arrow Key Button */}
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
      )}
    </>
  );
};

export default Opportunities;