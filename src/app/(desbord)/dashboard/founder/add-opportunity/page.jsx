
import AddOporsontiy from "@/Component/AddOporsontiy";
import { auth } from "@/lib/auth";
import { getDashboardStats } from "@/lib/data";
import { headers } from "next/headers";
export default async function CreateOpportunity() {
    const session = await auth.api.getSession({
        headers: await headers(),
      });
    
    const email = session?.user?.email;
    const token = session.session.token
    const data = await getDashboardStats(email, token)
  return (
   <AddOporsontiy data = {data}></AddOporsontiy>
  );
}