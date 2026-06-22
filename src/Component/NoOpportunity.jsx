import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

export default function NoOpportunityPage() {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-4">
      <div className="max-w-lg w-full text-center">
        
        <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-6">
          <BriefcaseBusiness
            size={50}
            className="text-indigo-600"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          No Opportunities Available
        </h1>

        <p className="text-gray-500 mb-8">
          There are currently no startup opportunities available.
          Check back later or create a new opportunity.
        </p>

        <div className="flex justify-center">
          <Link href="/dashboard/founder/add-opportunity">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300">
              Add Opportunity
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}