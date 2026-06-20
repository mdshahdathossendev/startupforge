
import AddOporsontiy from "@/Component/AddOporsontiy";
import { auth } from "@/lib/auth";
import { getDashboardStats } from "@/lib/data";
import { headers } from "next/headers";
export default async function CreateOpportunity() {
    const session = await auth.api.getSession({
        headers: await headers(),
      });
    
    const email = session?.user?.email;
    const data = await getDashboardStats(email)
  return (
   <AddOporsontiy data = {data}></AddOporsontiy>
  );
}