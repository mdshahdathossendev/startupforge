'use client';

import { useState } from "react";
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
  Menu,
  X,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const role = session?.user?.role;

  const toggleSidebar = () => setIsOpen(!isOpen);

  const getOverviewRoute = (userRole) => {
    if (userRole === "Founder") return "/dashboard/founder/overview";
    if (userRole === "Collaborator") return "/dashboard/collaborator/overview";
    if (userRole === "admin") return "/dashboard/admin/overview";
    return "/dashboard/overview";
  };

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  const isActive = (path) => pathname === path;
  const menuConfig = {
    Founder: [
      { href: "/dashboard/founder/my-startup", label: "My Startup", icon: Briefcase },
      { href: "/dashboard/founder/add-opportunity", label: "Add Opportunity", icon: FolderPlus },
      { href: "/dashboard/founder/manage-opportunities", label: "Manage Opportunities", icon: ClipboardList },
      { href: "/dashboard/founder/applications", label: "Applications", icon: Users },
    ],
    Collaborator: [
      { href: "/dashboard/collaborator/my-applications", label: "My Applications", icon: ClipboardList },
      { href: "/dashboard/collaborator/profile", label: "Profile", icon: UserCheck },
    ],
    admin: [
      { href: "/dashboard/admin/users", label: "Manage Users", icon: Users },
      { href: "/dashboard/admin/startups", label: "Manage Startups", icon: Briefcase },
      { href: "/dashboard/admin/transactions", label: "Transactions", icon: DollarSign },
    ],
  };

  const roleLinks = menuConfig[role] || [];

  return (
    <>
     
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b sticky top-0 z-40 w-full">
        <h1 className="text-xl font-bold">
          Startup<span className="text-amber-500">Forge</span>
        </h1>
        <button 
          onClick={toggleSidebar} 
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

   
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

    
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out
        lg:static lg:translate-x-0 lg:h-screen lg:min-h-screen
        ${isOpen ? "translate-x-0" : "-translate-x-full w-0 lg:w-72"}
      `}>
        
        <div className="p-6 border-b hidden lg:block">
          <h1 className="text-2xl font-bold">
            Startup<span className="text-amber-500">Forge</span>
          </h1>
        </div>

       
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          
      
          <Link
            href={getOverviewRoute(role)}
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
              isActive(getOverviewRoute(role))
                ? "bg-blue-800 text-white shadow-lg"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </Link>

       
          {roleLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive(link.href)
                    ? "bg-blue-800 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

 
        <div className="p-4 border-t bg-white">
          <button 
            onClick={handleLogOut} 
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}