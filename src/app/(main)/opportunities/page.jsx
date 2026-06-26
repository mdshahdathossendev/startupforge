import Oposrsontiys from '@/Component/Oposrsontiys';
import { auth } from '@/lib/auth';
import { getOpportunities } from '@/lib/data';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async({ searchParams }) => {
    // const session = await auth.api.getSession({
    //     headers: await headers(),
    //   });
    
    //   if (!session || !session.user) {
    //     redirect("/login");
    //   }
    
    //   const userStatus = session.user.status; 
    
    //   if (userStatus !== "Unblock") {
       
    //     redirect("/block"); 
    //   }
    const params = await searchParams;
    const data = await getOpportunities(params.page)
    return (
        <div>
          <Oposrsontiys data={data}></Oposrsontiys>
        </div>
    );
};

export default page;