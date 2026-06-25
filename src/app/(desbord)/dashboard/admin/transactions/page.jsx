import DiplayTnag from '@/Component/DiplayTnag';
import { auth } from '@/lib/auth';
import { getTangation } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const page = async() => {
    const session = await auth.api.getSession({
              headers: await headers(),
            });
            const token = session.session.token
    const data = await getTangation(token)
    console.log(data)
    return (
        <div>
           <DiplayTnag data={data}></DiplayTnag>
        </div>
    );
};

export default page;