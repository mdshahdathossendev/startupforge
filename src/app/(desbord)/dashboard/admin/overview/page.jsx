
import AdminOverviwe from "@/Component/AdminOverviwe"
import { getOpportunities, getStats, getUserData } from "@/lib/data"



export default async function AdminOverview() {
  const users = await getUserData();
  const state = await getStats();
  const opprotunes = await getOpportunities()
    return(
      <div>
        <AdminOverviwe users={users} state={state} opprotunes={opprotunes}></AdminOverviwe>
      </div>
    )
}