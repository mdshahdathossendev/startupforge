import Oposrsontiys from '@/Component/Oposrsontiys';
import { getOpportunities } from '@/lib/data';
import React from 'react';

const page = async() => {
    const data = await getOpportunities()
    return (
        <div>
          <Oposrsontiys data={data}></Oposrsontiys>
        </div>
    );
};

export default page;