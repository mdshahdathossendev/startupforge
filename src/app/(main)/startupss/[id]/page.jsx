import StartupDetails from '@/Component/StatasDetls';
import { getStatsDetls } from '@/lib/data';
import React from 'react';

const page = async({params}) => {
    const { id } = await params;
    const data = await getStatsDetls(id)
    return (
        <div>
         <StartupDetails data={data}></StartupDetails>
        </div>
    );
};

export default page;