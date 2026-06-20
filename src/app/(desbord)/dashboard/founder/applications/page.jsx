import MangeApplication from '@/Component/MangeApplication';
import { auth } from '@/lib/auth';
import { getApplicationsByOpportunity, getDashboardStats} from '@/lib/data';
import { headers } from 'next/headers';

import React from 'react';

const page = async() => {
     const session = await auth.api.getSession({
        headers: await headers(),});
    const email = session?.user?.email;
    const opsoData = await getDashboardStats(email)
    const id = opsoData._id;
    const data = await getApplicationsByOpportunity(id);
    console.log(data)
    return (
        <div>
            <MangeApplication data = {data}></MangeApplication>
        </div>
    );
};

export default page;