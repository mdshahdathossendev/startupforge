import Sidebar from "@/Component/Sideber";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <div className="w-72 shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}