import {
  Briefcase,
  FileText,
  Users,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";


export default function FounderOverview({data, applaction, acceptedCount}) {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-xl mb-8">
        <h1 className="text-4xl font-bold">
          Founder Dashboard
        </h1>

        <p className="mt-2 text-blue-100">
          Manage opportunities, applications and team growth.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Opportunities
              </p>

              <h2 className="text-5xl font-bold mt-2">
               {data.length}
              </h2>

              <p className="text-green-500 text-sm mt-2 flex items-center gap-1">
                <ArrowUpRight size={14} />
                +12%
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-100">
              <Briefcase
                className="text-amber-500"
                size={32}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Applications
              </p>

              <h2 className="text-5xl font-bold mt-2">
                {applaction.length}
              </h2>

              <p className="text-green-500 text-sm mt-2 flex items-center gap-1">
                <ArrowUpRight size={14} />
                +18%
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-100">
              <FileText
                className="text-blue-500"
                size={32}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Accepted Members
              </p>

              <h2 className="text-5xl font-bold mt-2">
                {acceptedCount}
              </h2>

              <p className="text-green-500 text-sm mt-2 flex items-center gap-1">
                <ArrowUpRight size={14} />
                +6%
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-green-100">
              <Users
                className="text-green-500"
                size={32}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Growth Rate
              </p>

              <h2 className="text-5xl font-bold mt-2">
                72%
              </h2>

              <p className="text-green-500 text-sm mt-2 flex items-center gap-1">
                <TrendingUp size={14} />
                Growing
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-100">
              <TrendingUp
                className="text-purple-500"
                size={32}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-5">
            Application Progress
          </h2>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between mb-2">
                <span>Applications</span>
                <span>{applaction.length}%</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div className="bg-blue-500 h-3 rounded-full w-[80%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Accepted</span>
                <span>65%</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div className="bg-green-500 h-3 rounded-full w-[65%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Growth</span>
                <span>72%</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div className="bg-purple-500 h-3 rounded-full w-[72%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-5">
            Recent Activity
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl">
              New application received
            </div>

            <div className="p-4 bg-slate-50 rounded-xl">
              Candidate accepted
            </div>

            <div className="p-4 bg-slate-50 rounded-xl">
              New opportunity posted
            </div>

            <div className="p-4 bg-slate-50 rounded-xl">
              Team member joined
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}