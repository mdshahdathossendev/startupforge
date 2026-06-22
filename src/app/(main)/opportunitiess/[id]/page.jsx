import OporsontiyDetles from "@/Component/OporsontiyDetles";
import { auth } from "@/lib/auth";
import { getApplicantByOpportunity, getDetlesOpportunities } from "@/lib/data";
import { headers } from "next/headers";
const OpportunityDetailsPage = async ({ params }) => {
    const { id } = await params;
  const job = await getDetlesOpportunities(id);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const idt = session?.user?.id;
  const data = await getApplicantByOpportunity(idt)
  return (
    <div>
       <OporsontiyDetles job = {job} data={data}></OporsontiyDetles>
    </div>
  );
};

export default OpportunityDetailsPage;