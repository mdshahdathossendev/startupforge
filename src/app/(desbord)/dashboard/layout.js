import { redirect } from "next/navigation";
import Sidebar from "@/Component/Sideber";
import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";

export default async function Layout({ children }) {
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    redirect("/login");
  }

  const userStatus = session.user.status; 

  if (userStatus !== "Unblock") {
   
    redirect("/block"); 
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      
      {/* Sidebar Container */}
      <div className="lg:w-72 lg:flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full p-4 md:p-6 lg:p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}