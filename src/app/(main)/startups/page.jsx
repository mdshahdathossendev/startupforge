import DisplayStartups from '@/Component/DisplayStartups';
import { auth } from '@/lib/auth';
import { getStats } from '@/lib/data';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async() => {
    const session = await auth.api.getSession({
            headers: await headers(),
          });
        
          if (!session || !session.user) {
            redirect("/login");
          }
        
          const userStatus = session.user.status; 
        
          if (userStatus !== "Unblock") {
           
            redirect("/block"); 
          }
    const data = await getStats()
    return (
        <div>
          <DisplayStartups data={data}></DisplayStartups>
        </div>
    );
};

export default page;