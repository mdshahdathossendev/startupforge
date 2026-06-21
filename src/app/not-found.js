import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-bold text-slate-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-slate-500 mt-4">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-slate-300 rounded-xl hover:bg-slate-100 transition"
          >
            Go Back
          </button>
        </div>

        <div className="mt-12">
          <div className="w-40 h-40 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
}