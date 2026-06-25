import Sidebar from "@/Component/Sideber";

export default async function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      
      <div className="lg:w-72 lg:flex-shrink-0">
        <Sidebar />
      </div>
      <main className="flex-1 w-full p-4 md:p-6 lg:p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}