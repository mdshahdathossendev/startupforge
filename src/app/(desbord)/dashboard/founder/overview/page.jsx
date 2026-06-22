import FounderOverview from '@/Component/FounderOverview';
import { auth } from '@/lib/auth';
import { getApplicationsByOpportunity, getDashboardStats, getMangeOpportunities } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const page = async() => {
  const session = await auth.api.getSession({
              headers: await headers(),
            });
       const email = session?.user?.email;
     const dataa = await getDashboardStats(email)   
      const data = await getMangeOpportunities(dataa._id);
      const id = dataa._id;
     const applaction = await getApplicationsByOpportunity(id);
     const acceptedCount = applaction.filter(
  item => item.status === "Accepted"
).length;

  return (
    <div>
      <FounderOverview data={data} applaction={applaction} acceptedCount={acceptedCount}></FounderOverview>
    </div>
  );
};

export default page;