import {
  Briefcase,
  FileText,
  Users,
} from "lucide-react";

export default function Overview() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Total Opportunities */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Total Opportunities
              </p>
              <h2 className="text-4xl font-bold mt-2">
                12
              </h2>
            </div>

            <div className="bg-amber-100 p-4 rounded-xl">
              <Briefcase className="text-amber-500" size={30} />
            </div>
          </div>
        </div>

        {/* Total Applications */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Total Applications
              </p>
              <h2 className="text-4xl font-bold mt-2">
                48
              </h2>
            </div>

            <div className="bg-blue-100 p-4 rounded-xl">
              <FileText className="text-blue-500" size={30} />
            </div>
          </div>
        </div>

        {/* Accepted Members */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Accepted Members
              </p>
              <h2 className="text-4xl font-bold mt-2">
                8
              </h2>
            </div>

            <div className="bg-green-100 p-4 rounded-xl">
              <Users className="text-green-500" size={30} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}