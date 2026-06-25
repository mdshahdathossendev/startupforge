import ManageSatage from '@/Component/ManageSatage';
import { auth } from '@/lib/auth';
import { getStats } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const page = async() => {
    const session = await auth.api.getSession({
          headers: await headers(),
        });
        const token = session.session.token
    const data = await getStats(token)
    console.log(data)
    return (
        <div>
           <ManageSatage data = {data}></ManageSatage>
        </div>
    );
};

export default page;