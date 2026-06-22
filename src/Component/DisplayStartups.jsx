import Image from "next/image";

const DisplayStartups = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto mt-4">
      {data.map((startup) => (
        <div
          key={startup._id}
          className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Logo + Name */}
          <div className="flex items-center gap-4">
            <Image
              src={startup.logo || "/default.png"}
              alt={startup.startup_name}
              width={80}
              height={80}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
            />

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {startup.startup_name}
              </h2>

              <p className="text-sm text-blue-600 font-medium">
                {startup.industry}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 text-gray-600 text-sm leading-relaxed line-clamp-3">
            {startup.description}
          </p>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">
                Funding Stage
              </p>
              <p className="text-sm font-semibold text-gray-800">
                {startup.funding_stage}
              </p>
            </div>

            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayStartups;