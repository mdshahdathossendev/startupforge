
import AdminOverviwe from "@/Component/AdminOverviwe"
import { getOpportunities, getStats, getTangation, getUserData } from "@/lib/data"



export default async function AdminOverview() {
  const users = await getUserData();
  const state = await getStats();
  const opprotunes = await getOpportunities()
  const data = await getTangation()
  const totalAmount = data.reduce((sum, item) => {
  return sum + Number(item.amount || 0);
}, 0);
 console.log(totalAmount)    
    return(
      <div>
        <AdminOverviwe users={users} state={state} opprotunes={opprotunes} totalAmount={totalAmount}></AdminOverviwe>
      </div>
    )
}