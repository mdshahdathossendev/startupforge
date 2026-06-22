import { Users } from "lucide-react";

export default function NoApplicationsForFounder() {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-4">
      <div className="max-w-lg text-center">
        
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
          <Users size={50} className="text-indigo-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          No Applications Received
        </h1>

        <p className="text-gray-500 text-lg">
          No collaborators have applied to your opportunities yet.
          Once someone submits an application, it will appear here.
        </p>

      </div>
    </div>
  );
}