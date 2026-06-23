import { addPaymentHistory, updateProfile } from '@/lib/action'
import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';


export default async function Success({ searchParams }) {
  const { session_id } = await searchParams
  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')
  
 const {
  status,
  metadata,
  amount_total,
  subscription,
  customer_details: { email: customerEmail }
} = await stripe.checkout.sessions.retrieve(session_id, {
  expand: ['line_items', 'subscription']
});
const paymentData = {
  user_email: customerEmail,
  amount: amount_total / 100,
  transaction_id: subscription.id,
  payment_status: status,
  paid_at: new Date(),
};
  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    addPaymentHistory(paymentData)
    await updateProfile(metadata.userId, {
  plan: "Pro",
});
    return (
      <section id="success">
       <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-10 text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle2 className="w-16 h-16 text-green-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 text-lg">
          Thank you for upgrading to
          <span className="font-semibold text-blue-600"> Pro Membership</span>.
        </p>

        {/* Membership Activated */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-4">
          <p className="text-green-700 font-medium">
            ✅ Your Pro Membership is now active.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/opportunities"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
          >
           Contoneue Applying
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/"
            className="w-full py-4 rounded-2xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            Back to Home
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400">
          Need help? Contact us at{" "}
          <a
            href="mailto:support@startupforge.com"
            className="text-blue-600 hover:underline"
          >
            support@startupforge.com
          </a>
        </p>
      </div>
    </div>
      </section>
    )
  }
}