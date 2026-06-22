'use client';

import { CheckCircle } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center">
          <h1 className="text-3xl font-bold">Upgrade to Pro</h1>
          <p className="mt-2 text-blue-100">
            Unlock more opportunities and grow faster
          </p>
        </div>

        {/* Price */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-gray-900">
              $10
            </h2>
            <p className="text-gray-500 mt-2">
              Per Month
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span>Apply to 20 Opportunities</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span>Priority Application Review</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span>Premium Startup Access</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span>Exclusive Community Features</span>
            </div>
          </div>

          {/* Payment Button */}
          <button
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold text-lg hover:scale-[1.02] transition-all"
          >
            Pay $10 & Upgrade
          </button>

          <p className="text-center text-gray-400 text-sm mt-4">
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
}