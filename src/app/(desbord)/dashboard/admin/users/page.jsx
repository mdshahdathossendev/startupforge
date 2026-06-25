
import { MangeUser } from '@/Component/MangeUser';
import { auth } from '@/lib/auth';
import { getUserData } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const page = async() => {
  const session = await auth.api.getSession({
      headers: await headers(),
    });
    const token = session.session.token
   const users = await getUserData(token)
    
    return (
        <div>
          <MangeUser users={users}></MangeUser>
        </div>
    );
};

export default page;