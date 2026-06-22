import { FileSearch, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function NoApplications() {
  return (
    <div className="min-h-[70vh] flex items-center items-center justify-center px-6">
      <div className="max-w-md w-full text-center p-10">

        {/* Icon */}
        <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-blue-50 mb-6">
          <FileSearch className="w-12 h-12 text-blue-600" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          No Applications Yet
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-8">
          You haven't submitted any applications yet.
          Explore opportunities and start applying today.
        </p>

        {/* Button */}
        <Link href="/opportunities">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105">
            <PlusCircle size={18} />
            Browse Opportunities
          </button>
        </Link>
      </div>
    </div>
  );
}