import Link from "next/link";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Oposrsontiys = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 container mx-auto mt-8">
      {data.map((job) => (
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
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
  );
};

export default Oposrsontiys;