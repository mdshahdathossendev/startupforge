import CommunityHighlights from '@/Component/Comminty';
import Daynamic1 from '@/Component/Daynamic1';
import Dynamic2 from '@/Component/Dynamic2';
import Hero from '@/Component/Hero';
import StartupStatistics from '@/Component/StartupStatistics';
import { auth } from '@/lib/auth';
import { getOpportunities, getStats } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const page = async() => {
  const session = await auth.api.getSession({
      headers: await headers(),
    });
    const token = session.session.token
 const startup = await getStats(token)
 const opportunities = await getOpportunities()
  return (
    <div>
       <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>
     <Hero></Hero>
     <Daynamic1 startup={startup}></Daynamic1>
     <Dynamic2 opportunities={opportunities}></Dynamic2>
     <CommunityHighlights></CommunityHighlights>
     <StartupStatistics></StartupStatistics>
    </div>
  );
};

export default page;