import Hero from '@/Component/Hero';
import React from 'react';

const page = () => {
  return (
    <div>
       <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>
     <Hero></Hero>
    </div>
  );
};

export default page;