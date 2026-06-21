import {
  Briefcase,
  Users,
  TrendingUp,
  Rocket,
} from "lucide-react";

export default function StartupStatistics() {
  const stats = [
    {
      title: "Total Startups",
      value: "250+",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Active Founders",
      value: "1,200+",
      icon: Users,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Funding Raised",
      value: "$5.2M",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Success Rate",
      value: "92%",
      icon: Rocket,
      color: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
            Statistics
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Startup Statistics
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            A quick overview of the growth and success of startups
            within our ecosystem.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-slate-500 font-medium">
                  {stat.title}
                </h3>

                <h1 className="text-5xl font-bold mt-2 text-slate-900">
                  {stat.value}
                </h1>

                <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} w-full`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-3xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Building The Future Together 🚀
          </h3>

          <p className="mt-3 text-indigo-100">
            Join hundreds of founders and innovators growing their
            startups through our platform.
          </p>

          <button className="mt-6 bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Explore Startups
          </button>
        </div>
      </div>
    </section>
  );
}