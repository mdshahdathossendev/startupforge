import { Pencil, Trash2 } from "lucide-react";
import { FounderEditFrom } from "./FundeerEditFrom";
import { deleteStartup } from "@/lib/action";

const Startup = ({data }) => {
  const handleDelete = async (email) => {
    console.log(email)
    const result = await deleteStartup(email);
  
    if (result.deletedCount > 0) {
      alert("Deleted Successfully");
    }
  };
    console.log(data)
  return (
    <div>
        <div
          key={data._id}
          className="bg-white rounded-2xl shadow-md p-6 max-w-4xl mb-6"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src={data.logo}
                alt={data.startup_name}
                className="w-40 h-40 rounded-xl object-cover border"
              />
            </div>

            {/* Details */}
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold">
                {data.startup_name}
              </h2>

              <div>
                <span className="font-semibold">Industry:</span>{" "}
                {data.industry}
              </div>

              <div>
                <span className="font-semibold">Funding Stage:</span>{" "}
                {data.funding_stage}
              </div>

              <div>
                <span className="font-semibold">Founder Email:</span>{" "}
                {data.founder_email}
              </div>

              <div>
                <span className="font-semibold">Description:</span>
                <p className="text-gray-600 mt-1">
                  {data.description}
                </p>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="flex md:flex-col gap-3 ml-auto">
             <FounderEditFrom></FounderEditFrom>

              <button onClick={()=>handleDelete(data.founder_email)} className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
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