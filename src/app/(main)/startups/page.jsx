import DisplayStartups from '@/Component/DisplayStartups';
import { auth } from '@/lib/auth';
import { getStats } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const page = async() => {
    const data = await getStats()
    return (
        <div>
          <DisplayStartups data={data}></DisplayStartups>
        </div>
    );
};

export default page;