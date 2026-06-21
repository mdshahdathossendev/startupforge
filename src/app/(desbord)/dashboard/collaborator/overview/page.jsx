import { auth } from "@/lib/auth";
import { getApplicantByOpportunity } from "@/lib/data";
import {
  Briefcase,
  CheckCircle2,
  Clock3,
  FileText,
  XCircle,
} from "lucide-react";
import { headers } from "next/headers";

export default async function Overview() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const id = session?.user?.id;

  const applications = await getApplicantByOpportunity(id);

  const total = applications.length;

  const stats = applications.reduce(
    (acc, item) => {
      if (item.status === "Accepted") acc.accepted++;
      else if (item.status === "Rejected") acc.rejected++;
      else if (item.status === "Pending") acc.pending++;

      return acc;
    },
    {
      accepted: 0,
      rejected: 0,
      pending: 0,
    }
  );

  const acceptanceRate =
    total > 0
      ? Math.round((stats.accepted / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Banner */}
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold">
          Applications Dashboard
        </h1>

        <p className="mt-2 text-blue-100">
          Track all applications and monitor acceptance rates.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="group rounded-3xl bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Total Applications
              </p>
              <h2 className="text-5xl font-bold mt-2">
                {total}
              </h2>
            </div>

            <div className="p-4 rounded-2xl bg-blue-100">
              <FileText
                size={32}
                className="text-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="group rounded-3xl bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Accepted
              </p>
              <h2 className="text-5xl font-bold mt-2 text-green-600">
                {stats.accepted}
              </h2>
            </div>

            <div className="p-4 rounded-2xl bg-green-100">
              <CheckCircle2
                size={32}
                className="text-green-600"
              />
            </div>
          </div>
        </div>

        <div className="group rounded-3xl bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Rejected
              </p>
              <h2 className="text-5xl font-bold mt-2 text-red-600">
                {stats.rejected}
              </h2>
            </div>

            <div className="p-4 rounded-2xl bg-red-100">
              <XCircle
                size={32}
                className="text-red-600"
              />
            </div>
          </div>
        </div>

        <div className="group rounded-3xl bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">
                Pending
              </p>
              <h2 className="text-5xl font-bold mt-2 text-amber-600">
                {stats.pending}
              </h2>
            </div>

            <div className="p-4 rounded-2xl bg-amber-100">
              <Clock3
                size={32}
                className="text-amber-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {/* Acceptance Rate */}
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">
              Acceptance Rate
            </h2>

            <span className="font-bold text-green-600">
              {acceptanceRate}%
            </span>
          </div>

          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-1000"
              style={{
                width: `${acceptanceRate}%`,
              }}
            />
          </div>

          <p className="mt-4 text-gray-500">
            {stats.accepted} accepted out of {total} applications.
          </p>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Application Summary
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Applications</span>
              <span className="font-bold">
                {total}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Accepted</span>
              <span className="font-bold text-green-600">
                {stats.accepted}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Rejected</span>
              <span className="font-bold text-red-600">
                {stats.rejected}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Pending</span>
              <span className="font-bold text-amber-600">
                {stats.pending}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <div className="flex items-center gap-3">
            <Briefcase className="text-indigo-600" />
            <h3 className="font-medium">
              Applications
            </h3>
          </div>

          <p className="text-4xl font-bold mt-4">
            {total}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h3 className="font-medium">
            Success Rate
          </h3>

          <p className="text-4xl font-bold mt-4 text-green-600">
            {acceptanceRate}%
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h3 className="font-medium">
            Pending Reviews
          </h3>

          <p className="text-4xl font-bold mt-4 text-amber-600">
            {stats.pending}
          </p>
        </div>
      </div>
    </div>
  );
}