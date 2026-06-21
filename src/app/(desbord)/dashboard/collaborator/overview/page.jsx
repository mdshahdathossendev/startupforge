
import { auth } from "@/lib/auth";
import { getApplicantByOpportunity } from "@/lib/data";
import { Briefcase, FileText, ReceiptJapaneseYenIcon, Users } from "lucide-react";
import { headers } from "next/headers";

export default async function Overview() {
     const session = await auth.api.getSession({
      headers: await headers(),
    });
    const id = session?.user?.id;
    const applications = await getApplicantByOpportunity(id)
    const totle = applications.length
    const stats = applications.reduce(
  (acc, item) => {
    if (item.status === "Accepted") acc.accepted++;
    else if (item.status === "Rejected") acc.rejected++;
    else if (item.status === "Pending") acc.pending++;

    return acc;
  },
  { accepted: 0, rejected: 0, pending: 0 }
);

console.log(stats);
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Applications Overview
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Total Applications */}
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Applications</p>
              <h2 className="text-4xl font-bold mt-2 text-gray-800">
                {totle || 0}
              </h2>
            </div>

            <div className="bg-blue-100 p-4 rounded-xl">
              <FileText className="text-blue-500" size={30} />
            </div>
          </div>
        </div>
        {/* Total Opportunities */}
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Rejected
</p>
              <h2 className="text-4xl font-bold mt-2 text-gray-800">
                {stats?.rejected || 0}
              </h2>
            </div>

            <div className="bg-amber-100 p-4 rounded-xl">
              <ReceiptJapaneseYenIcon className="text-amber-500" size={30} />
            </div>
          </div>
        </div>

       

        {/* Accepted Members */}
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Accepted Members</p>
              <h2 className="text-4xl font-bold mt-2 text-gray-800">
                {stats?.accepted || 0}
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

