export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>

          <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <h2 className="mt-6 text-2xl font-bold text-slate-800">
          Loading...
        </h2>

        <p className="mt-2 text-slate-500">
          Please wait while we prepare your dashboard
        </p>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <span className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"></span>
          <span
            className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>
      </div>
    </div>
  );
}