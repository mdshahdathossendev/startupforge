import ManageSatage from '@/Component/ManageSatage';
import { getStats } from '@/lib/data';
import React from 'react';

const page = async() => {
    const data = await getStats()
    console.log(data)
    return (
        <div>
           <ManageSatage data = {data}></ManageSatage>
        </div>
    );
};

export default page;