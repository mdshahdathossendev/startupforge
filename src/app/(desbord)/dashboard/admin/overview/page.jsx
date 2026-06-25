
import AdminOverviwe from "@/Component/AdminOverviwe"
import { auth } from "@/lib/auth";
import { getOpportunities, getStats, getTangation, getUserData } from "@/lib/data"
import { headers } from "next/headers";



export default async function AdminOverview() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const token = session.session.token
  const users = await getUserData(token);
  const state = await getStats();
  const opprotunes = await getOpportunities()
  const data = await getTangation(token)
  const totalAmount = data.reduce((sum, item) => {
    return sum + Number(item.amount || 0);
  }, 0);
  return (
    <div>
      <AdminOverviwe users={users} state={state} opprotunes={opprotunes} totalAmount={totalAmount}></AdminOverviwe>
    </div>
  )
}