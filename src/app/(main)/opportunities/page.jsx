import Oposrsontiys from '@/Component/Oposrsontiys';
import { getOpportunities } from '@/lib/data';
import React from 'react';

const page = async({ searchParams }) => {
    const params = await searchParams;
    const data = await getOpportunities(params.page)
    return (
        <div>
          <Oposrsontiys data={data}></Oposrsontiys>
        </div>
    );
};

export default page;