import Sidebar from "@/Component/Sideber";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-72">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="ml-72 min-h-screen p-6">
        {children}
      </main>

    </div>
  );
}