import Link from "next/link";

export default function BlockedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
        <div className="text-6xl mb-4">🚫</div>

        <h1 className="text-3xl font-bold text-red-600 mb-3">
          Account Blocked
        </h1>

        <p className="text-gray-600 mb-6">
          Your account has been blocked by the administrator.
          Please contact support for more information.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
}