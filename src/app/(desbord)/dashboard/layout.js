import Sidebar from "@/Component/Sideber";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  // const session = await auth.api.getSession({
  //     headers: await headers(),
  //   });
  // console.log(session)
  
  //   if (!session) {
  //     redirect("/login");
  //   }
  
    
  //   if (session.user.status !== "Unblock") {
  //     redirect("/block");
  //   }
  
  return (
    <div className="bg-gray-50">
      
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-72">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="ml-72 min-h-screen p-6">
        {children}
      </main>

    </div>
  );
}