import Application from '@/Component/Application';
import NoApplications from '@/Component/NoApplication';
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
    {
      data.length == 0 ? <NoApplications></NoApplications>:<Application data={data}></Application>
    }
    </div>
  );
};

export default page;