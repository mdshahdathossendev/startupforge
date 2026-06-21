import Application from '@/Component/Application';
import { auth } from '@/lib/auth';
import { getApplicantByOpportunity } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const page = async() => {
   const session = await auth.api.getSession({
  headers: await headers(),
});
const id = session?.user?.id;
const data = await getApplicantByOpportunity(id)
console.log(data)

  return (
    <div>
<Application data={data}></Application>
    </div>
  );
};

export default page;