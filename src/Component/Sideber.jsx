'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  FolderPlus,
  ClipboardList,
  UserCheck,
  DollarSign,
  LogOut,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter()
  const { data: session } = authClient.useSession();
  const role = session?.user?.role;
  const getOverviewRoute = (role) => {
  if (role === "Founder") return "/dashboard/founder/overview";
  if (role === "Collaborator") return "/dashboard/collaborator/overview";
  if (role === "Admin") return "/dashboard/admin/overview";
  return "/dashboard/overview";
};
   const handellogOut = async() => {
         await authClient.signOut({
   fetchOptions: {
     onSuccess: () => {
       router.push("/login"); 
     },
   },
 });
     }
 
  const isActive = (path) => pathname === path;

  return (
    <aside className="w-72 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      
      {/* Logo */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold">
          Startup<span className="text-amber-500">Forge</span>
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">

        {/* COMMON */}
        <Link
  href={getOverviewRoute(role)}
  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
    isActive(getOverviewRoute(role))
      ? "bg-amber-500 text-white shadow-lg"
      : "text-gray-700 hover:bg-gray-100"
  }`}
>
  <LayoutDashboard size={20} />
  <span>Overview</span>
</Link>

        {/* FOUNDER */}
        {role === "Founder" && (
          <>
            <Link
              href="/dashboard/founder/projects"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive("/dashboard/founder/projects")
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Briefcase size={20} />
              <span>My Startup</span>
            </Link>

            <Link
              href="/dashboard/founder/add-opportunity"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive("/dashboard/founder/add-opportunity")
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FolderPlus size={20} />
              <span>Add Opportunity</span>
            </Link>

            <Link
              href="/dashboard/founder/manage-opportunities"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive("/dashboard/founder/manage-opportunities")
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ClipboardList size={20} />
              <span>Manage Opportunities</span>
            </Link>

            <Link
              href="/dashboard/founder/applications"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive("/dashboard/founder/applications")
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Users size={20} />
              <span>Applications</span>
            </Link>
          </>
        )}

        {/* COLLABORATOR */}
        {role === "Collaborator" && (
          <>
            <Link
              href="/dashboard/collaborator/my-applications"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive("/dashboard/collaborator/my-applications")
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ClipboardList size={20} />
              <span>My Applications</span>
            </Link>

            <Link
              href="/dashboard/collaborator/profile"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive("/dashboard/collaborator/profile")
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <UserCheck size={20} />
              <span>Profile</span>
            </Link>
          </>
        )}

        {/* ADMIN */}
        {role === "Admin" && (
          <>
            <Link
              href="/dashboard/admin/users"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive("/dashboard/admin/users")
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Users size={20} />
              <span>Manage Users</span>
            </Link>

            <Link
              href="/dashboard/admin/startups"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive("/dashboard/admin/startups")
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Briefcase size={20} />
              <span>Manage Startups</span>
            </Link>

            <Link
              href="/dashboard/admin/transactions"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive("/dashboard/admin/transactions")
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <DollarSign size={20} />
              <span>Transactions</span>
            </Link>
          </>
        )}
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t">
        <button onClick={handellogOut} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}