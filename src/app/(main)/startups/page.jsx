import DisplayStartups from '@/Component/DisplayStartups';
import { getStats } from '@/lib/data';
import React from 'react';

const page = async() => {
    const data = await getStats()
    console.log(data)
    return (
        <div>
          <DisplayStartups data={data}></DisplayStartups>
        </div>
    );
};

export default page;