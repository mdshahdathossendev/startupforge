import DiplayTnag from '@/Component/DiplayTnag';
import { getTangation } from '@/lib/data';
import React from 'react';

const page = async() => {
    const data = await getTangation()
    console.log(data)
    return (
        <div>
           <DiplayTnag data={data}></DiplayTnag>
        </div>
    );
};

export default page;