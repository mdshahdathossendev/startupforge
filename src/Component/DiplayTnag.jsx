'use client';

import { CalendarDays, BadgeCheck, CreditCard } from "lucide-react";

export default function DiplayTnag({ data = [] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm">
            <CreditCard size={14} />
            Payment Records
          </div>

          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Transaction History
          </h1>

          <p className="mt-2 text-gray-500">
            All subscription payments in one place.
          </p>
        </div>

        {/* Empty */}
        {data?.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Transactions Found
            </h2>
            <p className="text-gray-500 mt-1">
              Your payment history will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {data?.map((payment) => (
              <div
                key={payment._id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >

                {/* Top line */}
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-blue-500" />

                <div className="p-5">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                    {/* Left */}
                    <div className="flex items-center gap-4">

                      <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                        <CreditCard className="text-white" size={20} />
                      </div>

                      <div>
                        <h2 className="text-base font-semibold text-gray-900">
                          Pro Subscription
                        </h2>

                        <p className="text-xs text-gray-500 break-all">
                          {payment.user_email}
                        </p>

                        <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                          <CalendarDays size={12} />
                          {new Date(payment.paid_at).toLocaleString()}
                        </div>
                      </div>

                    </div>

                    {/* Amount */}
                    <div className="text-left md:text-center">
                      <p className="text-xs text-gray-400">Amount</p>
                      <h2 className="text-2xl font-bold text-green-600">
                        ${payment.amount}
                      </h2>
                    </div>

                    {/* Status */}
                    <div>
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        <BadgeCheck size={14} />
                        {payment.payment_status}
                      </span>
                    </div>

                  </div>

                  {/* Transaction ID */}
                  <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-1">
                      Transaction ID
                    </p>

                    <p className="font-mono text-xs text-gray-700 break-all">
                      {payment.transaction_id}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}