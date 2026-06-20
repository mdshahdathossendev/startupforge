import OporsontiyDetles from "@/Component/OporsontiyDetles";
import { getDetlesOpportunities } from "@/lib/data";
import { param } from "framer-motion/client";
const OpportunityDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)
  const job = await getDetlesOpportunities(id);

  return (
    <div>
       <OporsontiyDetles job = {job}></OporsontiyDetles>
    </div>
  );
};

export default OpportunityDetailsPage;