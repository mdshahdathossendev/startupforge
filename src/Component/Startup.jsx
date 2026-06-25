import { Trash2 } from "lucide-react";
import { FounderEditFrom } from "./FundeerEditFrom";
import { deleteStartup } from "@/lib/action";
import Image from "next/image";

const Startup = ({ data }) => {
  const handleDelete = async (email) => {
    const result = await deleteStartup(email);

    if (result.deletedCount > 0) {
      alert("Deleted Successfully");
      window.location.reload();
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
        
        {/* Status Badge */}
        <div
          className={`absolute top-5 right-5 px-4 py-2 rounded-full text-xs font-bold text-white shadow-md
            ${
              data?.stats === "Approved"
                ? "bg-green-500"
                : data?.stats === "Pending"
                ? "bg-yellow-500"
                : data?.stats === "Rejected"
                ? "bg-red-500"
                : "bg-gray-500"
            }`}
        >
          {data?.stats || "Unknown"}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src={data?.logo || "/placeholder.png"}
              alt={data?.startup_name || "Startup"}
              width={300}
              height={300}
              className="w-44 h-44 rounded-2xl object-cover border shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {data?.startup_name}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Industry</p>
                <p className="font-semibold text-gray-800">
                  {data?.industry}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Funding Stage</p>
                <p className="font-semibold text-gray-800">
                  {data?.funding_stage}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl md:col-span-2">
                <p className="text-sm text-gray-500">Founder Email</p>
                <p className="font-semibold text-gray-800 break-all">
                  {data?.founder_email}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl md:col-span-2">
                <p className="text-sm text-gray-500 mb-2">Description</p>
                <p className="text-gray-700 leading-relaxed">
                  {data?.description}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-15">
            <div className="w-full">
              <FounderEditFrom data={data} />
            </div>

            <button
              onClick={() => handleDelete(data?.founder_email)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-all"
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startup;