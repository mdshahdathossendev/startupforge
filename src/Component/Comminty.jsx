import {
  Users,
  MessageSquare,
  Award,
  TrendingUp,
} from "lucide-react";

export default function CommunityHighlights() {
  const highlights = [
    {
      title: "Active Members",
      value: "10K+",
      description: "Developers, founders and innovators.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Discussions",
      value: "25K+",
      description: "Meaningful conversations every month.",
      icon: MessageSquare,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Success Stories",
      value: "500+",
      description: "Members achieving career milestones.",
      icon: Award,
      color: "from-orange-500 to-pink-500",
    },
    {
      title: "Growth Rate",
      value: "92%",
      description: "Community engagement growth.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm">
            Community
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Community Highlights
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Discover the impact of our growing startup community and
            the achievements of our members.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-slate-500 font-medium">
                  {item.title}
                </h3>

                <h1 className="text-5xl font-bold mt-2 text-slate-900">
                  {item.value}
                </h1>

                <p className="mt-3 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured Community Box */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-10 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold">
                Join Our Growing Community 🚀
              </h3>

              <p className="mt-3 text-blue-100 max-w-2xl">
                Connect with startup founders, developers, designers,
                investors, and innovators from around the world.
              </p>
            </div>

            <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}