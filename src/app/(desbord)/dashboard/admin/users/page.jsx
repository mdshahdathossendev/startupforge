
import { MangeUser } from '@/Component/MangeUser';
import { getUserData } from '@/lib/data';
import React from 'react';

const page = async() => {
   const users = await getUserData()
    
    return (
        <div>
          <MangeUser users={users}></MangeUser>
        </div>
    );
};

export default page;