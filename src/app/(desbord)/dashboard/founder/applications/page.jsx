import MangeApplication from '@/Component/MangeApplication';
import NoApplicationsForFounder from '@/Component/NoFunderApplicaton';
import { auth } from '@/lib/auth';
import { getApplicationsByOpportunity, getDashboardStats} from '@/lib/data';
import { headers } from 'next/headers';

import React from 'react';

const page = async() => {
     const session = await auth.api.getSession({
        headers: await headers(),});
    const email = session?.user?.email;
     const token = session.session.token
    const opsoData = await getDashboardStats(email)
    const id = opsoData._id;
    const data = await getApplicationsByOpportunity(id, token);
   
    return (
        <div>
            {
                data.length == 0 ? <NoApplicationsForFounder></NoApplicationsForFounder> : <MangeApplication data={data}></MangeApplication>
            }
        </div>
    );
};

export default page;