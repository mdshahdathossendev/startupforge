'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Home } from 'lucide-react';

export default function ApplicationSuccess() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 antialiased">
      {/* Success Card Wrapper */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl shadow-slate-100 p-8 text-center border border-slate-100 transition-all transform duration-500 ease-out animate-in fade-in zoom-in-95 duration-300">
        
        {/* Success Icon Badge */}
        <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 ring-8 ring-emerald-50/50">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>

        {/* Messaging */}
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Application Submitted!
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          Thank you for applying. Your information has been safely received, and our team is already reviewing it. We will get back to you shortly.
        </p>

        {/* Structural Divider */}
        <div className="border-t border-slate-100 my-6" />

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row-reverse gap-3 animate-in fade-in slide-in-from-bottom-4 delay-150 duration-500 fill-mode-both">
          
          {/* Primary Action */}
          <Link 
            href="/opportunities" 
            className="w-full inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-3 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm shadow-indigo-100"
          >
            <span>Continue to Apply</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>

          {/* Secondary Action */}
          <Link 
            href="/" 
            className="w-full inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 font-medium px-5 py-3 rounded-xl transition-all duration-200 active:scale-[0.98]"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Back to Home</span>
          </Link>
          
        </div>
      </div>
    </main>
  );
}