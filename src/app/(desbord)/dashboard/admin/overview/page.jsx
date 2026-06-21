'use client'

import { Users, Rocket, Briefcase, DollarSign } from "lucide-react";

export default function AdminOverview() {
  const stats = [
    {
      title: "Total Users",
      value: "1,245",
      icon: <Users size={28} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Total Startups",
      value: "320",
      icon: <Rocket size={28} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Total Opportunities",
      value: "890",
      icon: <Briefcase size={28} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Total Revenue",
      value: "$45,670",
      icon: <DollarSign size={28} />,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Here's an overview of your platform.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  {item.value}
                </h2>
              </div>

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center`}
              >
                {item.icon}
              </div>
            </div>

            <div className="mt-4">
              <span className="text-green-500 text-sm font-medium">
                +12.5%
              </span>
              <span className="text-gray-400 text-sm ml-2">
                from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Overview Section */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Platform Performance
          </h2>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>User Growth</span>
                <span>80%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full">
                <div className="h-3 bg-blue-500 rounded-full w-[80%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Startup Approvals</span>
                <span>65%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full">
                <div className="h-3 bg-green-500 rounded-full w-[65%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Opportunities Filled</span>
                <span>90%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full">
                <div className="h-3 bg-purple-500 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Recent Activity
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium">
                New user registered
              </p>
              <p className="text-sm text-gray-500">
                2 minutes ago
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium">
                Startup approved
              </p>
              <p className="text-sm text-gray-500">
                15 minutes ago
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-medium">
                New opportunity posted
              </p>
              <p className="text-sm text-gray-500">
                1 hour ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}