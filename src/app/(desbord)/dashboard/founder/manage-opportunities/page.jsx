import MangeOporsontiy from '@/Component/MangeOporsontiy';
import { auth } from '@/lib/auth';
import { getDashboardStats, getMangeOpportunities } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const page =  async() => {
    const session = await auth.api.getSession({
            headers: await headers(),
          });
     const email = session?.user?.email;
   const dataa = await getDashboardStats(email)   
    const data = await getMangeOpportunities(dataa._id);
    console.log(data)
    return (
        <div>
         <MangeOporsontiy data = {data}></MangeOporsontiy>
        </div>
    );
};

export default page;